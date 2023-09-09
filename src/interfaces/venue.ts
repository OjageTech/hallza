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
  find: any;
  _id: string,
  location: Location;
  owner: Owner;
  availability: Availability;
  name: string;
  description: string;
  capacity: number;
  amenities: string[];
  photos: string[];
  price_per_day: number;
  rating: number;
  reviews: Review[];
  created_at: string;
  updated_at: string;
}
// Define the props for the Contents component
export type ContentsProps = {
  venues: venue[]; // Array of venue objects
};

// Define the props for the FilterContents HOC
export type FilterContentsProps = {
  data: venue[]; // Original venues data
  nameFilter?: string | null; // Optional name filter
  dateFilter?: string | null; // Optional date filter
};
