// api.ts

import axios from 'axios';
import { venue } from '../interfaces/venue';

export async function getVenues(): Promise<venue> {
  try {
    const response = await axios.get<venue>(
      'http://localhost:3000/venues',
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching venues:', error);
    throw error;
  }
}
