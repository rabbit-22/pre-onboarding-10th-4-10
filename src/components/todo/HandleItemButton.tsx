import { FaPlusCircle, FaTrash } from 'react-icons/fa';

type Props = {
  mode: 'add' | 'remove';
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

  return (
    <button className="input-submit" type="submit">
      <FaPlusCircle className="btn-plus" />
    </button>
  );
};

export default ItemButton;
