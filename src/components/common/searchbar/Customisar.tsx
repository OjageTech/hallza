import {
  Box,
  Grid,
  GridItem,
  InputRightElement,
  InputGroup,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';
import { FaLocationArrow, FaMoneyBill } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

interface SelectProps {
  options: string[];
  Icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const CustomSelect: React.FC<SelectProps> = ({
  options,
  Icon,
  selectedValue,
  setSelectedValue,
}: SelectProps) => (
  <Select
    borderBottom="1px solid"
    h="58px"
    w="312px"
    boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
    variant="outline"
    icon={Icon}
    value={selectedValue}
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(e.target.value);
    //   onOptionsSelected(e.target.value);
    }}
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </Select>
);

interface CustomisarProps {
  onOptionsSelected: (lo: string, ca: string, pr: string) => void;
}
const Customisar = ({ onOptionsSelected }: CustomisarProps) => {
  const options = {
    location: ['Buea', 'Douala', 'Tiko', 'Bamenda'],
    capacity: ['500 people', '800 people', '100 people', '40 people'],
    price: [
      '500,000 - 1,000,000 XAF',
      '50,000 - 100,000 XAF',
      '200,000 - 300,000 XAF',
      '20,000 - 50,000 XAF',
    ],
  };
  const [selectedLocation, setselectedLocation] = useState('');
  const [selectedCapacity, setselectedCapacity] = useState('');
  const [selectedPrice, setselectedPrice] = useState('');
  onOptionsSelected(selectedLocation, selectedCapacity, selectedPrice);
  return (
    <Box my="2rem">
      <Grid mt="40px" templateColumns="repeat(6, 1fr)" gap={5}>
        <GridItem colSpan={2}>
          <CustomSelect
            options={options.location}
            Icon={<FaLocationArrow />}
            selectedValue={selectedLocation}
            setSelectedValue={setselectedLocation}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CustomSelect
            options={options.capacity}
            Icon={<BsFillPeopleFill />}
            selectedValue={selectedCapacity}
            setSelectedValue={setselectedCapacity}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CustomSelect
            options={options.price}
            Icon={<FaMoneyBill />}
            selectedValue={selectedPrice}
            setSelectedValue={setselectedPrice}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Customisar;
