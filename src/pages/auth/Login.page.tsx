import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { SpinnerIcon } from '@chakra-ui/icons';
import AppName from '../../components/common/AppName';
import AuthService from '../../services/auth.service';
import strips from '../../assets/images/strips.png';
import YellowKid from '../../assets/images/YellowKid.png';

const Login = () => {
  const [redirect, setRedirect] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isMobileDevices] = useMediaQuery('(max-width: 767px)');
  const [baseTablet] = useMediaQuery('(min-width: 798px)');
  const toast = useToast();
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setRedirect('/userDashboard');
    }
  }, []);

  const validationSchema = () => Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = async (formValue: { username: string; password: string; }) => {
    const { username, password } = formValue;
    setMessage('');
    setLoading(true);

    try {
      await AuthService.login(username, password);
      toast({
        title: 'Logged In',
        description: "You've logged in successfully.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setRedirect('/userDashboard');
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Box className="Login">
      <Flex w="100%" h="100vh" p="1rem" overflow="hidden">
        <Box w="40%" p="4rem 6rem">
          <Box w={isMobileDevices || baseTablet ? '97vw' : 'inherit'}>
            <Text as="h1" fontWeight={700} fontSize="40px">
              Login
            </Text>
            <Text as="span">
              Don't have an account?
              {' '}
              <Text as={Link} to="/signup" color="primary">
                Register
              </Text>
            </Text>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <Box mt="2rem">
                  <Text as="label" htmlFor="username">
                    Username
                  </Text>
                  <br />
                  <Box
                    width="330px"
                    height="40px"
                    mt=".6rem"
                    border="1px solid gainsboro"
                    borderRadius="7"
                    p=".2rem .6rem"
                    name="username"
                    type="text"
                    as={Field}
                  />
                  <Text
                    color="danger"
                    fontSize="12px"
                    as={ErrorMessage}
                    name="username"
                    component={Box}
                    className="alert alert-danger"
                  />
                </Box>
                <Box mt="2rem">
                  <Text as="label" htmlFor="password">
                    Password
                  </Text>
                  <br />
                  <Box
                    width="330px"
                    height="40px"
                    mt=".6rem"
                    border="1px solid gainsboro"
                    borderRadius="7"
                    p=".2rem .6rem"
                    name="password"
                    type="password"
                    as={Field}
                  />
                  <Text
                    fontSize="12px"
                    color="danger"
                    as={ErrorMessage}
                    name="password"
                    component={Box}
                    className="alert alert-danger"
                  />
                </Box>
                <Box mt="3rem">
                  <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? <SpinnerIcon /> : 'Login'}
                  </Button>
                </Box>
                {message && (
                  <Box
                    borderRadius="10"
                    mt="3rem"
                    className={`animate__animated ${
                      message.startsWith('Login failed') ? 'animate__shakeX' : 'animate__bounceInLeft'
                    }`}
                    p="1rem"
                    width="23.5%"
                    backgroundColor={message.startsWith('Login failed') ? 'danger' : 'secondary'}
                    color="white"
                  >
                    {message}
                  </Box>
                )}
              </Form>
            </Formik>
          </Box>
        </Box>
        <Box
          display={isMobileDevices ? 'none' : 'auto'}
          backgroundImage={strips}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="left"
          color="white"
          p="4rem 6rem"
          backgroundColor="primary"
          w="60%"
          h="100%"
          borderRadius="28px"
        >
          <Text as={Link} to="/" fontSize="md">
            HALLZA
          </Text>
          <Box>
            <Text mt="5rem" fontSize="40px" fontWeight={700}>
              Welcome back,
              {' '}
              <br />
              Get back into your work
            </Text>
            <Text>
              Continue your booking process, browse, view and communicate with
              {' '}
              <br />
              Event-space owners anywhere.
            </Text>
          </Box>
          <Flex
            mt={baseTablet ? '7rem' : '11rem'}
            className="animate__animated animate__bounceInRight"
            gap="5rem"
            alignItems="center"
            borderRadius="10px"
            h="40vh"
            boxShadow="dark-lg"
          >
            <Image h="100%" src={YellowKid} />
            <Text fontSize={34} fontWeight={700}>
              Be on the Lookout for event-space deals
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
