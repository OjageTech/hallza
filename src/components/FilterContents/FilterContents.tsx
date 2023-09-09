import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { ContentsProps, FilterContentsProps, venue } from '../../interfaces/venue';
import { Contents } from '../../pages/FindnBrowseVenues/FindnBrowseVenues.page';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// FilterContents HOC
const FilterContents: React.FC<FilterContentsProps> = ({ data, nameFilter, dateFilter }) => {
  const [filteredData, setFilteredData] = useState<venue[]>(data);
  console.log(nameFilter);
  console.log(dateFilter);
  useEffect(() => {
    // Filter the data based on the name and date filters if provided
    let filtered = data;

    if (nameFilter) {
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    if (dateFilter) {
      filtered = filtered.filter((item) => {
        const startDate = new Date(item.availability.start_date);
        const endDate = new Date(item.availability.end_date);
        const filterDate = new Date(dateFilter);
        console.log('start_date: ', item.availability.start_date);
        return filterDate >= startDate && filterDate <= endDate;
      });
    }

    setFilteredData(filtered);
  }, [data, nameFilter, dateFilter]);

  return <Contents venues={filteredData} />;
};

export default FilterContents;
