import { Box, Flex } from '@chakra-ui/react';
import AppName from '../../components/common/AppName';

const Login = () => (
  <Box className="Login">
    <Flex w="100vw">
      <Box w="40%" border="1px solid">
        <AppName />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur optio quae itaque ea quibusdam quasi nobis esse possimus dolor blanditiis, magnam, necessitatibus excepturi atque? Eum perferendis cum repellendus incidunt.</p>
      </Box>
      <Box
        bg="pink"
        w="60%"
        h="100vh"
        borderLeftRadius="28px"
      >
        This is the Login Page
      </Box>
    </Flex>

  </Box>
);

export default Login;
