import React from 'react';
import useIntersect from '../../hooks/useIntersect';
import DropdownItem from './DropdownItem';
import Spinner from '../base/Spinner';
import useFetchSuggestions from '../../hooks/useFetchSuggestions';

const Dropdown = ({ keyword }: { keyword: string }) => {
  const [suggestions, isLoading, getSuggestions, hasNextPage] =
    useFetchSuggestions(keyword);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isLoading && keyword !== '') {
      getSuggestions();
    }
  });

  return (
    <ul className="dropdown-container">
      {suggestions.length > 0 &&
        suggestions.map((suggestion, index) => (
          <DropdownItem key={index} suggestion={suggestion} />
        ))}
      {suggestions.length > 0 && isLoading ? <Spinner /> : <></>}
      <div ref={ref}></div>
    </ul>
  );
};

export default Dropdown;
