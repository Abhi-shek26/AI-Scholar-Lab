export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-accent/20 text-accent border border-accent/50",
    secondary: "bg-secondary/20 text-secondary border border-secondary/50",
    success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
        ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
