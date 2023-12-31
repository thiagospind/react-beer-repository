interface Props {
  id?: string;
  label?: string;
  type: string;
  value?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  label,
  id,
  type,
  value,
  placeholder,
  onChange,
  className,
  name,
}) => {
  return (
    <>
      <label htmlFor={id} hidden={label ? false : true}>
        {label}
      </label>
      <input
        className={`px-4 py-2 mx-2 my-4 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:border-blue-500 focus:shadow-none ${className}`}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
      />
    </>
  );
};
