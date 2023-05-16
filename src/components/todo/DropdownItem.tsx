import React from 'react';

const DropdownItem = ({ suggestion }: { suggestion: string }) => {
  return (
    <li className="dropdown-item">
      <p>{suggestion}</p>
    </li>
  );
};

export default DropdownItem;
