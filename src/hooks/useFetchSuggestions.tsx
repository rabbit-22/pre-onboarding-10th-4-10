import { useCallback, useEffect, useState } from 'react';
import { getSearchList } from '../api/search';
import { debounce } from '../utils/debounce';

const useFetchSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getSuggestions = useCallback(
    debounce(async () => {
      try {
        setIsLoading(true);
        const data = await getSearchList(keyword, page);
        setSuggestions(prev => [...prev, ...data.data.result]);

        if (data.data.qty !== page && data.data.result.length !== 0) {
          setPage(prev => prev + 1);
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
          setSuggestions([]);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }, 500),
    [keyword]
  );

  useEffect(() => {
    setHasNextPage(false);
    setPage(1);
    if (keyword === '') {
      setSuggestions([]);
      return;
    }
    getSuggestions();
  }, [keyword, getSuggestions]);

  return [suggestions, isLoading, getSuggestions, hasNextPage] as const;
};

export default useFetchSuggestions;
