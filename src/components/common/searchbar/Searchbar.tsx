import {
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { CiSearch } from 'react-icons/ci'
import { updateSearchText } from '../../../features/search/search-slice';

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
}: SearchbarProps) => {
  // const searchStuff = useAppSelector(selectStuffBySearchText);
  const dispatch = useAppDispatch();
  return (
    <div className="Searchbar">
      <InputGroup h={groupHeight}>
        <InputLeftElement pl={paddingLeftInputLeft} h={heightInputLeft} pointerEvents="none">
          <CiSearch />
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
          onChange={(e) => dispatch(updateSearchText(e.target.value))}
        />
      </InputGroup>
    </div>
  );
};

export default Searchbar;
