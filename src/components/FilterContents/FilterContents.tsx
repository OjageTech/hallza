import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { ContentsProps, FilterContentsProps, venue } from '../../interfaces/venue';
import { Contents } from '../../pages/FindnBrowseVenues/FindnBrowseVenues.page';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// FilterContents HOC
const FilterContents: React.FC<FilterContentsProps> = ({ data, nameFilter, dateFilter }) => {
  // State to store filtered data
  const [filteredData, setFilteredData] = useState<venue[]>(data);

  useEffect(() => {
    // Filter the data based on the name and date filters if provided
    let filtered = data;

    if (nameFilter) {
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(nameFilter.toLowerCase())
        || item.location.city.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    if (dateFilter) {
      filtered = filtered.filter((item) => {
        const startDate = new Date(item.availability.start_date);
        const endDate = new Date(item.availability.end_date);
        const filterDate = JSON.parse(dateFilter);
        const filterStartDate = new Date(filterDate[0]);
        const filterEndDate = new Date(filterDate[1]);

        // Check if the item's date range overlaps with the filter date range
        return startDate <= filterEndDate && endDate >= filterStartDate;
      });
    }

    setFilteredData(filtered);
  }, [data, nameFilter, dateFilter]);

  return <Contents venues={filteredData} />;
};

export default FilterContents;
