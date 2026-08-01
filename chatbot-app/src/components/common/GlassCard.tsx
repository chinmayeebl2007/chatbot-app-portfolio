type Props = {
  children: React.ReactNode;
  className?: string;
};

function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  );
}

export default GlassCard;