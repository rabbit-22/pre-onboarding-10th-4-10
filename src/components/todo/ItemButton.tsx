import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

type Props = {
  mode: 'add' | 'remove' | 'search';
  handleClick?: () => void;
};

const ItemButton = ({ mode, handleClick }: Props) => {
  if (mode === 'remove') {
    return (
      <button onClick={() => handleClick!()}>
        <FaTrash className="btn-trash" />
      </button>
    );
  }
  if (mode === 'search') {
    return (
      <div className="input-search">
        <IoSearch className="btn-search" />
      </div>
    );
  }
  return (
    <button className="input-submit" type="submit">
      <FaPlusCircle className="btn-plus" />
    </button>
  );
};

export default ItemButton;
