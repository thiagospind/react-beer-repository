interface Option {
  value: string | number;
  label: string;
}

interface Props {
  name: string;
  id?: string;
  placeholder?: string;
  onClick?: () => void;
  onChange?: () => void;
  className?: string;
  options: Option[];
}

export const Select: React.FC<Props> = ({
  name,
  className,
  id,
  onChange,
  onClick,
  placeholder,
  options,
}) => {
  return (
    <select
      name={name}
      id={id}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onChange}
      className={`px-4 py-2 mx-2 my-2 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:border-blue-500 focus:shadow-none ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
