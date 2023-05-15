import React from 'react';

const DropdownItem = ({ suggestion }: { suggestion: string }) => {
  return <li className="dropdown-item">{suggestion}</li>;
};

export default DropdownItem;
