interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">

      {subtitle && (
        <p className="uppercase tracking-[0.4em] text-yellow-500 text-sm mb-4">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl md:text-6xl font-black">
        {title}
      </h2>

    </div>
  );
}