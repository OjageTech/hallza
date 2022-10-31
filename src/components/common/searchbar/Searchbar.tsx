import {
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import Search from '../../../assets/images/Search.svg';

const Searchbar = () => (
  <div className="Searchbar">
    <InputGroup h="58px">
      <InputLeftElement
        pl="5"
        h="50px"
        pointerEvents="none"
      >
        <Image
          src={Search}
          alt="Search Icon"
        />
      </InputLeftElement>
      <Input
        pl="4rem"
        h="50px"
        fontSize="16px"
        variant="flushed"
        bg="tertiary"
        w="320px"
        borderRadius="10px"
        placeholder="Search"
      />
    </InputGroup>
  </div>
);

export default Searchbar;
