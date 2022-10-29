import {
  Box, Image, Text, Stack,
} from '@chakra-ui/react';
import logo from '../../../assets/images/logo.svg';

type WelcomeTextProps = { text: string };
const WelcomeText = ({ text }: WelcomeTextProps) => <Text fontSize="24px">{text}</Text>;

const DashboardHeader = () => (
  <div className="DashboardHeader">
    <Box
      w="100%"
      pt="3.5"
      pl="3.5"
      maxH="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Stack isInline>
        {/* <Image
          src={logo}
          alt="TTDIA-MLM"
        /> */}
        <WelcomeText text="Hi, Nneka Obi" />
      </Stack>
    </Box>
  </div>
);

export default DashboardHeader;
