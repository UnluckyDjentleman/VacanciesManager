export default function Range({
  label,
  value,
  min,
  max,
  step,
  onChange,
  required,
}: {
  label: string;
  value: number | undefined;
  min: number;
  max: number;
  step: number;
  onChange: (x: number | undefined) => void;
  required: boolean;
}) {
  return (
    <>
      <label>
        {label}:{value}
      </label>
      <input
        id="default-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value === undefined ? 0 : value}
        className="w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
        onChange={(e) => onChange(Number(e.target.value))}
        required={required}
      ></input>
    </>
  );
}
