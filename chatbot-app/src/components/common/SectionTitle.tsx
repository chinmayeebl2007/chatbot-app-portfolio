type Props = {
  title: string;
  subtitle?: string;
};

function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="section-title">
      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;