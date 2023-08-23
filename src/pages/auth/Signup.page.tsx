/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Navigate, Link, LinkProps } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { SpinnerIcon } from '@chakra-ui/icons';
import * as Yup from 'yup';
import AppName from '../../components/common/AppName';
import AuthService from '../../services/auth.service';
import avatarMann from '../../assets/images/avatarMann.svg';
import ShapesTri from '../../assets/images/ShapesTri.png';

interface BannerRightProps {
  ShapesTria: string;
  avatarMannn: string;
  Linkk: React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}
function BannerRight({
  ShapesTria,
  Linkk,
  avatarMannn,
}: BannerRightProps) {
  return (
    <Box
      color="white"
      h="100%"
      p="4rem 6rem"
      bg="primary"
      borderRadius="28px"
      backgroundImage={ShapesTria}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="right"
    >
      <Text as={Linkk} to="/" fontSize="md">
        HALLZA
      </Text>
      <Box>
        <Text mt="5rem" fontSize="40px" fontWeight={700}>
          Start your
          {' '}
          <br />
          journey with us.
        </Text>
        <Text>
          Discover the nation's best resorts, event-spaces
          {' '}
          <br />
          you would need, even at a moments notice.
        </Text>

        <Box
          className="animate__animated animate__bounceInRight"
          boxShadow="xl"
          borderRadius="10px"
          fontSize="12px"
          mt="6rem"
          w="400px"
          backgroundColor="teal"
          p="1rem"
        >
          <Text>
            Simply unbelievable! I am really satisfied with th halls I've gotten
            so far. This is absolutely wonderful
          </Text>
          <Flex mt="1rem" gap=".7rem">
            <Image src={avatarMannn} alt="Testimonial-photo" />
            <Box>
              <Text fontWeight={600}>Thomas Obi</Text>
              <Text>Entrepreneur</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

const Signup = () => {
  const [redirect, setRedirect] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');
  const [isMobileDevices] = useMediaQuery('(max-width: 767px)');
  const [baseTablet] = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setRedirect('/profile');
    }
  }, []);

  const validationSchema = () => Yup.object().shape({
    fullname: Yup.string()
      .test(
        'len',
        'The fullname must be between 5 and 60 characters.',
        (val: any) => val && val.toString().length >= 5 && val.toString().length <= 60,
      )
      .required('This field is required'),
    username: Yup.string()
      .test(
        'len',
        'The username must be between 3 and 20 characters.',
        (val: any) => val && val.toString().length >= 3 && val.toString().length <= 20,
      )
      .required('This field is required'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val: any) => val && val.toString().length >= 6 && val.toString().length <= 14,
      )
      .required('This field is required'),
  });

  const handleSignup = (formValue: {
    username: string;
    email: string;
    fullname: string;
    password: string;
  }) => {
    const {
      username, email, fullname, password,
    } = formValue;
    setMessage('');
    setLoading(true);
    AuthService.signup(fullname, username, email, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        // Handle error
        const resMessage = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();
        setSuccessful(false);
        setMessage(resMessage);
      },
    );
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  const initialValues = {
    fullname: '',
    email: '',
    username: '',
    password: '',
  };
  return (
    <Box className="Signup">
      <Flex alignItems="top" justifyContent="flex-start" overflow="hidden" w="100vw" h="100vh" p={isMobileDevices ? '.2rem' : '1rem'}>
        <Box maxW="40%" pl={isMobileDevices ? 'inherit' : '6rem'}>
          {' '}
          <br />
          <Box w={isMobileDevices || baseTablet ? '97vw' : 'inherit'}>
            <Text as="h1" fontWeight={700} fontSize="40px">
              Signup
            </Text>
            <Text as="span">
              Have an account Already?
              {' '}
              <Text as={Link} to="/login" color="primary">
                Login
              </Text>
            </Text>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSignup}
            >
              <Form>
                <Box mt="2rem">
                  <Text as="label" htmlFor="fullname">
                    Full name
                  </Text>
                  <br />
                  <Box
                    width={isMobileDevices ? '97vw' : '330px'}
                    height="40px"
                    mt=".6rem"
                    border="1px solid gainsboro"
                    borderRadius="7"
                    p=".2rem .6rem"
                    name="fullname"
                    type="text"
                    as={Field}
                  />
                  {/* <Field  className="form-control" /> */}
                  <Text
                    color="danger"
                    fontSize="12px"
                    as={ErrorMessage}
                    name="fullname"
                    component={Box}
                    className="alert alert-danger"
                  />
                </Box>
                <Box mt="2rem">
                  <Text as="label" htmlFor="email">
                    Email
                  </Text>
                  <br />
                  <Box
                    width={isMobileDevices ? '97vw' : '330px'}
                    height="40px"
                    mt=".6rem"
                    border="1px solid gainsboro"
                    borderRadius="7"
                    p=".2rem .6rem"
                    name="email"
                    type="text"
                    as={Field}
                  />
                  {/* <Field  className="form-control" /> */}
                  <Text
                    color="danger"
                    fontSize="12px"
                    as={ErrorMessage}
                    name="email"
                    component={Box}
                    className="alert alert-danger"
                  />
                </Box>
                <Box mt="2rem">
                  <Text as="label" htmlFor="username">
                    Username
                  </Text>
                  <br />
                  <Box
                    width={isMobileDevices ? '97vw' : '330px'}
                    height="40px"
                    mt=".6rem"
                    border="1px solid gainsboro"
                    borderRadius="7"
                    p=".2rem .6rem"
                    name="username"
                    type="text"
                    as={Field}
                  />
                  {/* <Field  className="form-control" /> */}
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
                    width={isMobileDevices ? '97vw' : '330px'}
                    height="40px"
                    mt=".6rem"
                    border="1px solid gainsboro"
                    borderRadius="7"
                    p=".2rem .6rem"
                    name="password"
                    type="password"
                    as={Field}
                  />
                  {/* <Field  className="form-control" /> */}
                  <Text
                    color="danger"
                    fontSize="12px"
                    as={ErrorMessage}
                    name="password"
                    component={Box}
                    className="alert alert-danger"
                  />
                </Box>

                <Box mt="3rem">
                  <Button disabled={successful} type="submit" variant="primary">
                    Signup
                  </Button>
                </Box>
                {
                  (loading && !message) && <SpinnerIcon />
                }
                {message && (
                  <Box
                    borderRadius="10"
                    mt="3rem"
                    className="animate__animated animate__bounceInLeft"
                    p="1rem"
                    width="23.5%"
                    backgroundColor="secondary"
                    color="white"
                  >
                    Successful Sign up
                  </Box>
                )}
              </Form>
            </Formik>
          </Box>
        </Box>

        <Box display={isMobileDevices ? 'none' : 'block'} w="60%" h="98vh">
          <BannerRight
            ShapesTria={ShapesTri}
            Linkk={Link}
            avatarMannn={avatarMann}
          />
        </Box>

      </Flex>
    </Box>
  );
};

export default Signup;
