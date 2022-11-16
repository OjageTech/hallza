import {
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import Search from '../../../assets/images/Search.svg';

type SearchbarProps = {
	groupHeight?: string;
	inputHeight?: string;
	bg?: string;
	inputWidth?: string;
	variant?: string;
	borderRadius?: string;
	placeholder?: string;
	fontSize?: string;
	pl?: string;
  paddingLeftInputLeft?: string;
  heightInputLeft?: string;
};

const Searchbar = ({
  groupHeight,
  inputHeight,
  bg,
  inputWidth,
  variant,
  borderRadius,
  placeholder,
  fontSize,
  pl,
  paddingLeftInputLeft,
  heightInputLeft,
}: SearchbarProps) => (
  <div className="Searchbar">
    <InputGroup h={groupHeight}>
      <InputLeftElement pl={paddingLeftInputLeft} h={heightInputLeft} pointerEvents="none">
        <Image src={Search} alt="Search Icon" />
      </InputLeftElement>
      <Input
        pl={pl}
        h={inputHeight}
        fontSize={fontSize}
        variant={variant}
        bg={bg}
        w={inputWidth}
        borderRadius={borderRadius}
        placeholder={placeholder}
      />
    </InputGroup>
  </div>
);

export default Searchbar;
