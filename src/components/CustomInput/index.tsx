import { ChangeEventHandler } from 'react';
import './style.css';

interface Isearch {
  placeholder: string;
  className: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CustomImput = ({ placeholder, className, value, onChange }: Isearch) => {
  return (
    <input
      value={value}
      onChange={onChange}
      required
      className={className + ' searchBox'}
      type='text'
      placeholder={placeholder}
    />
  );
};

export default CustomImput;
