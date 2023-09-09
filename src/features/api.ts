// api.ts

import axios from 'axios';
import { venue } from '../interfaces/venue';

export async function getVenues(): Promise<venue[]> {
  try {
    const response = await axios.get<venue[]>(
      'https://hallza-api.cyclic.cloud/venues',
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching venues:', error);
    throw error;
  }
}
