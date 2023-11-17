import './style.css';

interface ICustomButton {
  className?: string;
  label: string;
  onClick: () => any;
  type?: 'submit' | 'reset' | 'button';
}

const CustomButton = ({
  className,
  label,
  onClick,
  type = 'button',
}: ICustomButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      title={className}
      className={className}>
      {label}
    </button>
  );
};

export default CustomButton;
