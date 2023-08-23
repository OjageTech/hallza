/* eslint-disable react/require-default-props */
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  useColorMode,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { RangeDatepicker } from 'chakra-dayzed-datepicker';
import { FaCity } from 'react-icons/fa';
import CM_CITIES from './CM_CITIES.json';
import './index.css';

interface MainSearchI {
  dateRange?: Date[];
  preferredLocation?: string;
}
export default function MainSearch({
  dateRange = [new Date(), new Date()],
  preferredLocation = '',
}: MainSearchI) {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const [eventPrefferedLocation, setEventPrefferedLoacation] = useState('');
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  function handleSearch(e: any): any {
    if (eventPrefferedLocation && selectedDates.toString() !== '') {
      const dateString: string = JSON.stringify(selectedDates);
      console.log(dateString);
      navigate(`/search/${eventPrefferedLocation}/${dateString}`);
    }
  }

  const customPropsConfigs = {
    dateNavBtnProps: {
      colorScheme: 'green',
      variant: 'none',
    },
    dayOfMonthBtnProps: {
      defaultBtnProps: {
        borderColor: 'red.300',
        _hover: {
          background: 'secondary',
        },
      },
      isInRangeBtnProps: {
        color: 'green',
      },
      selectedBtnProps: {
        background: 'blue.200',
        color: 'white',
      },
      todayBtnProps: {
        background: 'primary',
      },
    },
    inputProps: {
      height: '100%',
      border: 'none',
      width: '16vw',
    },
    popoverCompProps: {
      popoverContentProps: {
        background: 'white',
        color: 'black',
      },
    },
  };
  return (
    <Flex
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      gap=".7rem"
      backgroundColor={colorMode === 'light' ? 'white' : 'cardColor'}
      h="50px"
      alignItems="center"
      borderRadius={5}
      w="fit-content"
    >
      <Select
        variant="filled"
        size="lg"
        colorScheme="teal"
        borderColor="teal.500"
        focusBorderColor="teal.500"
        _hover={{ borderColor: 'teal.500' }}
        width="20vw"
        border="none"
        icon={<FaCity />}
        placeholder={preferredLocation || 'Event location preference'}
        onChange={(e) => setEventPrefferedLoacation(e.target.value)}
      >
        {CM_CITIES.map((city) => (
          <option value={city.city}>{city.city}</option>
        ))}
      </Select>
      <Box>
        <RangeDatepicker
          id="range-date-picker"
          selectedDates={selectedDates}
          propsConfigs={customPropsConfigs}
          onDateChange={setSelectedDates}
        />
      </Box>

      <Button
        as={Flex}
        _hover={{ cursor: 'pointer', backgroundColor: 'teal' }}
        color="white"
        // borderRightRadius={5}
        justify="center"
        alignItems="center"
        // p="0.3rem"
        variant="primary"
        h="100%"
        onClick={(e) => handleSearch(e)}
      >
        Search
      </Button>
      {/* {selectedDates.toString()} */}
    </Flex>
  );
}
