
export interface PackageType {
  id: string;
  name: string;
  destination: string;
  description: string;
  price: number;
  days: number;
  imageUrl: string;
  category: "india" | "international";
  season?: "summer" | "winter" | "monsoon" | "spring";
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  images?: string[]; // Optional array of additional images
}

export interface CustomerInquiry {
  id: string;
  timestamp: string;
  packageId: string;
  packageName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message: string;
  status: "new" | "contacted" | "closed";
}
