import {
  Box,
  Button, Flex, Input, Select,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RangeDatepicker } from 'chakra-dayzed-datepicker';
import { FaCity } from 'react-icons/fa';
import CM_CITIES from './CM_CITIES.json';

export default function MainSearch() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([new Date(), new Date()]);

  return (
    <Flex boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" gap=".7rem" backgroundColor="gainsboro" borderRadius={5} w="fit-content">
      <Select icon={<FaCity />} placeholder="Event location preference">
        {
            CM_CITIES.map((city) => (<option value={city.city}>{city.city}</option>))
        }
      </Select>
      <RangeDatepicker
        selectedDates={selectedDates}
        onDateChange={setSelectedDates}
      />
      <Flex _hover={{ cursor: 'pointer', backgroundColor: 'teal' }} color="white" borderRightRadius={5} justify="center" alignItems="center" p="0.3rem" backgroundColor="primary">Search</Flex>
    </Flex>
  );
}
