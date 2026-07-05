import Image from "next/image";

interface PageHeaderProps {
  image: string;
  subtitle: string;
  title: string;
  description: string;
}

export default function PageHeader({
  image,
  subtitle,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.45em] text-yellow-400 mb-4">
          {subtitle}
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          {title}
        </h1>

        <p className="text-zinc-300 text-lg max-w-2xl leading-8">
          {description}
        </p>

      </div>

    </section>
  );
}