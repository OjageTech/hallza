/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  Box, Button, Center, Checkbox, Flex, Image, Text, useMediaQuery,
} from '@chakra-ui/react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import AppName from '../../../components/common/AppName';
import AuthService from '../../../services/auth.service';
import brainPower from '../../../assets/images/brain-power_46706-670.jpg';
import YellowKid from '../../../assets/images/YellowKid.png';

const Login = () => {
  const [redirect, setRedirect] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isMobileDevices] = useMediaQuery('(max-width: 767px)');
  const [baseTablet] = useMediaQuery('(min-width: 798px)');
  const [rootEmail, setRootEmail] = useState('');
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setRedirect('/console');
    }
  }, []);

  const validationSchema = () => Yup.object().shape({
    email: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required'),
  });

  const handleLogin = (formValue: { email: string; password: string; }) => {
    const { email, password } = formValue;
    setMessage('');
    setLoading(true);

    AuthService.login(email, password).then(
      () => {
        setRedirect('/profile');
      },
      (error) => {
        // Handle error
        setMessage('Login failed, Please check your credentials.');
        setLoading(false);
      },
    );
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <Box className="Login">
      <Flex w="100vw" alignItems="center" h="100vh" p={{ base: '.1rem', md: '1rem' }} overflowX="hidden">
        <Box w={{ base: '100vw', md: '45%' }} p=".5rem 6rem" pl={{ base: '1', md: '6rem' }} pt={{ base: '9rem', md: '0' }}>
          {' '}
          <Box w={{ base: '100vw', md: '97vw' }}>
            <AppName />
            <Text as="h1" fontWeight={700} fontSize="40px">Login</Text>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <Box mt="2rem">
                  {rootEmail === ''
                    ? (
                      <>
                        <Box p={{ base: '1rem .1rem', md: '1rem' }} minH="10vh" w={{ base: '95%', md: '430px' }} border="1px solid gainsboro">
                          <Checkbox>
                            <strong>Root user</strong>
                            <br />
                            Account owner that performs tasks requiring unrestricted access.
                            {' '}
                            <Text as={Link} color="primary" to="/about-rootUser"> Learn more</Text>
                          </Checkbox>
                        </Box>
                        <Box mb="1rem" p="1rem" mt=".5rem" minH="10vh" w={{ base: '95%', md: '430px' }} border="1px solid gainsboro">
                          <Checkbox>
                            <strong>IAM user</strong>
                            <br />
                            User within an account that performs daily tasks.
                            {' '}
                            <Text as={Link} color="primary" to="/about-iamUser"> Learn more</Text>
                          </Checkbox>
                        </Box>
                        <Text fontWeight={500} as="label" htmlFor="email">Root user email address</Text>
                        <br />
                        <Box w={{ base: '96%', md: '430px' }} height="40px" mt=".6rem" border="1px solid gainsboro" borderRadius="7" p=".2rem .6rem" name="email" type="text" as={Field} />
                        <Text
                          fontSize="12px"
                          as={ErrorMessage}
                          name="email"
                          component={Box}
                          className="alert alert-danger"
                        />

                      </>
                    )
                    : null}
                </Box>
                {/* <Box mt="2rem">
                  <Text as="label" htmlFor="password">Password</Text>
                  <br />
                  <Box width="430px" height="40px" mt=".6rem" border="1px solid gainsboro" borderRadius="7" p=".2rem .6rem" name="password" type="password" as={Field} />
                  <Text
                    fontSize="12px"
                    color="danger"
                    as={ErrorMessage}
                    name="password"
                    component={Box}
                    className="alert alert-danger"
                  />
                </Box> */}
                <Box mt="1.5rem">
                  <Button type="submit" variant="primary">Next</Button>
                </Box>

                <Box h="12vh" w={{ base: '95%', md: '430px' }} mt="3rem">
                  <Text fontSize="12px">
                    By continuing, you agree to the
                    {' '}
                    <Text as={Link} to="/hallza-venues-agreement" color="primary">Hallza Venue Agreement</Text>
                    {' '}
                    or other agreement for Hallza services, and the
                    {' '}
                    <Text as={Link} to="/privacy-notice" color="primary">Privacy Notice.</Text>
                    {' '}
                    This site uses essential cookies. See our
                    {' '}
                    <Text as={Link} to="/cookie-notice" color="primary"> for more information</Text>
                  </Text>
                </Box>
                <Flex color="secondary" mt="1.5rem" w={{ base: '95%', md: '430px' }} justifyContent="space-between" alignItems="center">
                  <Box h="1px" backgroundColor="secondary" w="30%" />
                  <Text>New to Hallza?</Text>
                  <Box h="1px" w="30%" backgroundColor="secondary" />
                </Flex>
                <Box w={{ base: '95%', md: '430px' }} mt=".5rem">
                  <Button w="100%" type="submit" variant="secondary">Create a new Hallza Venue Account</Button>
                </Box>
                {/* <Box mt="3rem">
                  <Button type="submit" variant="primary">Login</Button>
                </Box> */}
              </Form>
            </Formik>
          </Box>
        </Box>
        <Box display={isMobileDevices ? 'none' : 'auto'} backgroundImage={brainPower} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="left" color="white" p="4rem 6rem" backgroundColor="primary" w="55%" h="80vh" borderRadius="28px" _hover={{ cursor: 'pointer' }}>
          <Text fontWeight="NORMAL">INTRODUCING</Text>
          <Text fontSize="44px" fontWeight="extrabold">
            Hallza
            <br />
            <em>BrainQuest</em>
          </Text>
          <Text fontSize="28px" fontWeight="semibold">Affix thoughts to your Venue and allow it to respond to client request</Text>
          <Text mt="3rem" fontWeight="bold">
            Learn how
            {' '}
            {'>'}
            {' '}
            {' '}
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
