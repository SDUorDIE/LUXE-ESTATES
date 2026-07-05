"use client";

import {
  Building2,
  ShieldCheck,
  Gem,
} from "lucide-react";

import { Feature } from "@/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

const icons = {
  Building2,
  ShieldCheck,
  Gem,
};

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  const Icon =
    icons[feature.icon as keyof typeof icons];

  return (
    <div
      className="
      bg-zinc-900
      rounded-3xl
      border
      border-zinc-800
      p-10
      text-center
      hover:border-yellow-500
      hover:-translate-y-2
      hover:shadow-[0_0_35px_rgba(234,179,8,0.15)]
      transition-all
      duration-300
    "
    >
      <div className="flex justify-center mb-8">

        <div
          className="
            h-20
            w-20
            rounded-full
            bg-yellow-500/10
            flex
            items-center
            justify-center
          "
        >
          <Icon
            size={36}
            className="text-yellow-500"
          />
        </div>

      </div>

      <h3 className="text-2xl font-bold mb-4">

        {feature.title}

      </h3>

      <p className="text-zinc-400 leading-8">

        {feature.description}

      </p>

    </div>
  );
}