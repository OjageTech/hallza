export interface Venue {
  id: string;
  name: string;
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  capacity: number;
  amenities: string[];
  photos: string[];
  owner: {
    id: string;
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
}
