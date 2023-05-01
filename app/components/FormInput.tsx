import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type: string;
  className?: string;
}
const formClasses =
  "block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm";

const Label = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  );
};

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({
  id,
  label,
  type = "text",
  className,
  ...props
}, ref) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input ref={ref} id={id} type={type} {...props} className={formClasses} />
    </div>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
