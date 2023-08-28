interface Location {
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface Owner {
  id: string;
  name: string;
  email: string;
}

interface Availability {
  start_date: string;
  end_date: string;
  available_slots: {
    start_time: string;
    end_time: string;
  }[];
}

interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface venue {
  location: Location;
  owner: Owner;
  availability: Availability;
  name: string;
  description: string;
  capacity: number;
  amenities: string[];
  photos: string[];
  price_per_hour: number;
  rating: number;
  reviews: Review[];
  created_at: string;
  updated_at: string;
}
