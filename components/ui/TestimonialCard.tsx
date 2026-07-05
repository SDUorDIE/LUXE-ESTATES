import { Quote } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div
      className="
        relative
        bg-zinc-900
        rounded-3xl
        border
        border-zinc-800
        p-10
        hover:border-yellow-500
        hover:-translate-y-2
        hover:shadow-[0_0_35px_rgba(234,179,8,0.12)]
        transition-all
        duration-300
      "
    >
      <Quote
        className="absolute top-8 right-8 text-yellow-500/20"
        size={60}
      />

      <div className="text-yellow-500 text-2xl mb-6">
        ★★★★★
      </div>

      <p className="text-zinc-300 leading-8 italic mb-10">
        "{testimonial.review}"
      </p>

      <div className="border-t border-zinc-800 pt-6">

        <h3 className="text-xl font-bold">
          {testimonial.name}
        </h3>

        <p className="text-yellow-500 mt-1">
          {testimonial.role}
        </p>

      </div>

    </div>
  );
}