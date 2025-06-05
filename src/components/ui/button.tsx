import cn from 'classnames';


interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  title?: string;
}

export default function Button({ children, onClick, type = "button", className, title }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "px-4 py-1  rounded",
        className
      )}
      title={title} // sets the tooltip  attribute (optional)
    >
      {title || children}
    </button>
  );
}
