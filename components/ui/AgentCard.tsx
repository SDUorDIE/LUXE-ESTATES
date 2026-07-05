import Image from "next/image";
import Button from "./Button";
import { Agent } from "@/types/agent";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2">

      <div className="relative h-96 overflow-hidden">

        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {agent.name}
        </h3>

        <p className="text-yellow-500 mt-2">
          {agent.role}
        </p>

        <div className="w-12 h-1 bg-yellow-500 rounded-full my-4" />

        <p className="text-zinc-400 mt-4">
          {agent.phone}
        </p>

        <Button className="w-full mt-6">
          Schedule Consultation
        </Button>

      </div>

    </div>
  );
}