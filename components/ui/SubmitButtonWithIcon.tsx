interface SubmitButtonWithIconProps {
  text: string;
  className?: string;
  iconBg?: string;
  type?: "button" | "submit" | "reset";
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export default function SubmitButtonWithIcon({
  text,
  className = "bg-foreground text-background",
  iconBg = "bg-white/20",
  type = "submit",
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}: SubmitButtonWithIconProps) {
  return (
    <button
      type={type}
      className={`w-full inline-flex items-center space-x-4 group font-medium justify-center px-9 py-3 rounded-lg hover:bg-gray-800 transition-colors ${className}`}
      aria-label={ariaLabel || text}
      aria-describedby={ariaDescribedBy}
    >
      <span>{text}</span>
      <span
        className={`rounded-full p-1.5 inline-flex items-center justify-center group-hover:translate-x-4 transform transition-transform duration-400 ease-in-out ${iconBg}`}
      >
        <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
      </span>
    </button>
  );
}