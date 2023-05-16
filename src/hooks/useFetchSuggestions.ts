import { useCallback, useEffect, useState } from 'react';
import { getSearchList } from '../api/search';

const useFetchSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [isSuggestionLoading, setIsSuggestionLoading] =
    useState<boolean>(false);
  const [debouncedInputValue, setDebouncedInputValue] = useState<string>('');

  const getSuggestions = useCallback(async () => {
    setIsSuggestionLoading(true);
    const data = await getSearchList(debouncedInputValue, page);
    setSuggestions(prev => [...prev, ...data.data.result]);
    setIsSuggestionLoading(false);
    if (data.data.qty < data.data.page) setHasNextPage(false);
    if (data.data.result.length !== 0) {
      setPage(prev => prev + 1);
      setHasNextPage(true);
    } else {
      setHasNextPage(false);
    }
  }, [debouncedInputValue]);

  useEffect(() => {
    setSuggestions([]);
    setHasNextPage(false);
    setPage(1);
    if (debouncedInputValue === '') {
      setSuggestions([]);
      return;
    }
    getSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInputValue, getSuggestions]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(keyword);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [keyword]);

  return [
    suggestions,
    isSuggestionLoading,
    getSuggestions,
    hasNextPage,
  ] as const;
};

export default useFetchSuggestions;
