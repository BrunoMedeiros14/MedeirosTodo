import './style.css';

interface ICustomButton {
  className?: string;
  label: string;
  onClick: () => any;
}

const CustomButton = ({ className, label, onClick }: ICustomButton) => {
  return (
    <button
      type='button'
      onClick={onClick}
      title={className}
      className={className}>
      {label}
    </button>
  );
};

export default CustomButton;
