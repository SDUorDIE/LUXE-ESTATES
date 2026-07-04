import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: 1,
    title: "Oceanfront Villa",
    location: "Cape Town",
    price: 45000000,
    bedrooms: 5,
    bathrooms: 4,
    garages: 3,
    size: 650,
    image: "/images/properties/property1.jpg",
    featured: true,
    description:
      "Modern luxury villa overlooking the Atlantic Ocean with panoramic views.",
  },

  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Johannesburg",
    price: 32000000,
    bedrooms: 4,
    bathrooms: 3,
    garages: 2,
    size: 420,
    image: "/images/properties/property2.jpg",
    featured: true,
    description:
      "Exclusive penthouse located in the heart of Sandton.",
  },

  {
    id: 3,
    title: "Winelands Estate",
    location: "Stellenbosch",
    price: 28000000,
    bedrooms: 6,
    bathrooms: 5,
    garages: 4,
    size: 900,
    image: "/images/properties/property3.jpg",
    featured: false,
    description:
      "Private estate surrounded by vineyards and breathtaking mountain views.",
  },
];