import { useEffect, useState } from 'react';
import { getSearchList } from '../api/search';

const useFetchSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  const getSuggestions = async () => {
    setIsLoading(true);
    const data = await getSearchList(debouncedInputValue, page);
    setSuggestions(prev => [...prev, ...data.data.result]);
    if (data.data.qty < data.data.page) setHasNextPage(false);
    if (data.data.result.length !== 0) {
      setPage(prev => prev + 1);
      setHasNextPage(true);
    } else {
      setHasNextPage(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setSuggestions([]);
    setHasNextPage(false);
    setPage(1);
    if (debouncedInputValue === '') {
      setSuggestions([]);
      return;
    }
    getSuggestions(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInputValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(keyword);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [keyword]);

  return [suggestions, isLoading, getSuggestions, hasNextPage] as const;
};

export default useFetchSuggestions;
