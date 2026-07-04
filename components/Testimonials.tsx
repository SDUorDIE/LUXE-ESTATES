import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-32 bg-zinc-950">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Client Stories"
          title="What Our Clients Say"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (

            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />

          ))}

        </div>

      </div>

    </section>
  );
}