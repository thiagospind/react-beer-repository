interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  onClick,
}) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
