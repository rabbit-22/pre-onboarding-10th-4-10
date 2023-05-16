import React from 'react';
import useIntersect from '../../hooks/useIntersect';
import DropdownItem from './DropdownItem';
import Spinner from '../base/Spinner';
import useFetchSuggestions from '../../hooks/useFetchSuggestions';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

const Dropdown = ({ keyword }: { keyword: string }) => {
  const [suggestions, isLoading, getSuggestions, hasNextPage] =
    useFetchSuggestions(keyword);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isLoading && keyword !== '') {
      getSuggestions();
    }
  });
  if (suggestions.length > 0)
    return (
      <div className="dropdown-container">
        <ul className="dropdown-box">
          {suggestions.map((suggestion, index) => (
            <DropdownItem
              key={index}
              suggestion={suggestion}
              keyword={keyword}
            />
          ))}
          <div className="dropdown-loading">
            {isLoading ? (
              <Spinner />
            ) : (
              <div ref={ref}>
                <IoEllipsisHorizontalSharp />
              </div>
            )}
          </div>
        </ul>
      </div>
    );
  else return <></>;
};

export default Dropdown;
