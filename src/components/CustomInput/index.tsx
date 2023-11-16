import './style.css';

interface Isearch {
  placeholder: string;
  className: string;
}

const CustomImput = ({ placeholder, className }: Isearch) => {
  return (
    <input
      className={className + ' searchBox'}
      type='text'
      placeholder={placeholder}
    />
  );
};

export default CustomImput;
