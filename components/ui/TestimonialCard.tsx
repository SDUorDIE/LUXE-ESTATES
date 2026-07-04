import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-zinc-950 rounded-3xl border border-zinc-800 p-8 hover:border-yellow-500 transition-all duration-300">

      <div className="text-yellow-500 text-3xl mb-6">
        ★★★★★
      </div>

      <p className="text-zinc-300 leading-8 mb-8">
        "{testimonial.review}"
      </p>

      <div>

        <h3 className="font-bold text-xl">
          {testimonial.name}
        </h3>

        <p className="text-zinc-500">
          {testimonial.role}
        </p>

      </div>

    </div>
  );
}