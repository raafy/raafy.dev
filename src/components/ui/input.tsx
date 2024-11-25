import clsx from "clsx";

interface Props {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function Input({
  name,
  label,
  type,
  placeholder,
  value,
  required,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        required={required ?? false}
        type={type ?? "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          "mt-2 block w-full rounded-lg border-none bg-white/10 px-3 py-1.5 text-sm text-white",
          "focus:outline-none focus:ring-2 focus:ring-white/25 focus:ring-offset-2",
        )}
      />
    </div>
  );
}
