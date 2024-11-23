export default function Input({
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  type: string;
  placeholder: string;
  value: string | undefined;
  onChange: (x: string | undefined) => void;
  required: boolean;
}) {
  return (
    <>
      <input
        className={
          "w-full px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
        }
        type={type}
        placeholder={placeholder}
        value={value === undefined ? "" : value}
        onChange={(e) => onChange(e.currentTarget.value)}
        required={required}
      />
    </>
  );
}
