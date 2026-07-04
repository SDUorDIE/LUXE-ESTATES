interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export default function SectionTitle({
  subtitle,
  title,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
        {subtitle}
      </p>

      <h2 className="text-5xl md:text-6xl font-black">
        {title}
      </h2>

    </div>
  );
}