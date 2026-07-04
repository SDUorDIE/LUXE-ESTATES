import SectionTitle from "./ui/SectionTitle";
import AgentCard from "./ui/AgentCard";
import { agents } from "@/data/agents";

export default function Agents() {
  return (
    <section
      id="agents"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <SectionTitle
        subtitle="Our Team"
        title="Meet Our Luxury Experts"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
          />
        ))}
      </div>
    </section>
  );
}