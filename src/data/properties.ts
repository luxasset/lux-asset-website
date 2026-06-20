export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  type: "Villa" | "Penthouse" | "Estate" | "Apartment";
  beds: number;
  baths: number;
  sqft: number;
  image: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Cliffside Modern Villa",
    location: "Malibu, CA",
    price: "$4,850,000",
    type: "Villa",
    beds: 5,
    baths: 6,
    sqft: 6200,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Skyline Penthouse Suite",
    location: "Manhattan, NY",
    price: "$7,200,000",
    type: "Penthouse",
    beds: 4,
    baths: 5,
    sqft: 4800,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Oceanfront Estate",
    location: "Miami Beach, FL",
    price: "$9,950,000",
    type: "Estate",
    beds: 7,
    baths: 8,
    sqft: 9100,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Hillside Glass Residence",
    location: "Beverly Hills, CA",
    price: "$6,400,000",
    type: "Villa",
    beds: 6,
    baths: 7,
    sqft: 7300,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Alpine Luxury Chalet",
    location: "Aspen, CO",
    price: "$5,100,000",
    type: "Estate",
    beds: 5,
    baths: 5,
    sqft: 5600,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Downtown Sky Apartment",
    location: "Chicago, IL",
    price: "$2,300,000",
    type: "Apartment",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop",
  },
];
