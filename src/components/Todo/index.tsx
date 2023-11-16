import { useState } from 'react';
import './style.css';
import EditPencil from '../../assets/EditPencil';
import RemoveTrash from '../../assets/RemoveTrash';

const Todo = () => {
  const [checked, setchecked] = useState(false);

  return (
    <div className='todo'>
      <input
        type='checkbox'
        title='todoCheckbox'
        checked={checked}
        onChange={() => setchecked(!checked)}
        onClick={() => setchecked(!checked)}
      />
      <div className='textDiv'>
        <p>nota</p>
      </div>
      <div className='buttons'>
        <button type='button' title='editButton' className='editButton'>
          <EditPencil />
        </button>
        <button type='button' title='removeButton' className='removeButton'>
          <RemoveTrash />
        </button>
      </div>
    </div>
  );
};

export default Todo;
