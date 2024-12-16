function Button({
  children,
  disabled = false,
  className = "",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      disabled={disabled}
      className={`bg-sky-500 hover:bg-sky-600 px-3 py-2 rounded text-white focus:ring ring-black ring-offset-black disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
