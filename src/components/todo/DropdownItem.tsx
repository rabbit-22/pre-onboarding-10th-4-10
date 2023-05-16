import React from 'react';
import ActiveItem from './ActiveItem';

const DropdownItem = ({
  suggestion,
  keyword,
}: {
  suggestion: string;
  keyword: string;
}) => {
  return (
    <li className="dropdown-item">
      <p>{ActiveItem(suggestion, keyword)}</p>
    </li>
  );
};

export default DropdownItem;
