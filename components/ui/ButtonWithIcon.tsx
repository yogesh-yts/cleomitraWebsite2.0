import Link from "next/link";

interface ButtonWithIconProps {
  text: string;
  href: string;
  className?: string;
  iconBg?: string;
}

export default function ButtonWithIcon({
  text,
  href,
  className = "bg-white text-black",
  iconBg = "bg-black/20",
}: ButtonWithIconProps) {
  return (
    <Link
      href={href}
      className={`w-fit md:w-full inline-flex items-center space-x-4 group font-medium justify-center  px-9 py-3 rounded-xl ${className}`}
    >
      <span>{text}</span>
      <span
        className={` rounded-full p-1.5 inline-flex items-center justify-center group-hover:translate-x-4 transform transition-transform duration-400 ease-in-out ${iconBg}`}
      >
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </span>
    </Link>
  );
}
