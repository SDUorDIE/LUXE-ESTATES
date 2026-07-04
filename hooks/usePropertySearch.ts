"use client";

import { useMemo, useState } from "react";
import { properties } from "@/data/properties";

export default function usePropertySearch() {
  const [search, setSearch] = useState("");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) =>
      property.location
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return {
    search,
    setSearch,
    filteredProperties,
  };
}