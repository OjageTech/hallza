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
import { Search2Icon } from '@chakra-ui/icons';
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
      width: '100%',
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
      h={{ base: '120px', md: '50px' }}
      alignItems="bottom"
      borderRadius={5}
      justifyContent="flex-start"
      w={{ base: '90%', md: 'fit-content' }}
      fontSize={{ base: 'xs', md: 'inherit' }}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Select
        variant="filled"
        size={{ base: 'md', md: 'lg' }}
        colorScheme="teal"
        borderColor="teal.500"
        focusBorderColor="teal.500"
        _hover={{ borderColor: 'teal.500' }}
        width="100%"
        border="none"
        fontSize="inherit"
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
        borderTopRadius={{ base: 0, md: 'inherit' }}
        justify="center"
        leftIcon={<Search2Icon />}
        alignItems="center"
        // p="0.3rem"
        variant="primary"
        h={{ base: '120px', md: '100%' }}
        w={{ base: '100%', md: 'fit-content' }}
        onClick={(e) => handleSearch(e)}
      >
        Search
      </Button>
      {/* {selectedDates.toString()} */}
    </Flex>
  );
}
