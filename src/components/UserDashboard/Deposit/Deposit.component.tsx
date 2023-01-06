import { useFormik } from 'formik';
import * as React from 'react';
import {
  Select,
  InputGroup,
  InputLeftElement,
  Input,
  Container,
  Button,
  VStack,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
import Box from '../../common/Box';
import { useAppSelector } from '../../../app/hooks';

import Card from '../../common/Card';

interface MyFormValues {
	firstName: string;
}

const Deposit: React.FC<{}> = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      paymentMethod: '',
      amount: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const expanded: boolean = useAppSelector(
    (state: { mainSidebar: { value: boolean } }) => state.mainSidebar.value,
  );
  return (
    <Container
      textAlign="left"
      p={0}
      pt="4rem"
      mt="7rem"
      ml={expanded ? '16.7rem' : '9rem'}
    >
      <Card alignItems="left" pr={0} pl={0} w="75vw" textAlign="left">
        <Container ml={0} textAlign="left" pl="1.5rem">
          <Text as="h4">
            <strong>Balance:</strong>
            {' '}
            N2,000,134
          </Text>
        </Container>
        <Divider />
        <Flex m="1.5rem">
          <Box bg="gainsboro" w="50%" p="1rem">
            <Text fontStyle="italic">
              "
              Pending: The request has been sent but is not yet
              processed. Verified: The request has passed
              verification. Processing: The request is being
              processed. Once processed, the funds will be sent to
              your account.
            </Text>
          </Box>
          <Box w="50%" p="1rem">
            <form onSubmit={formik.handleSubmit}>
              <VStack>
                <InputGroup>
                  <InputLeftElement w="10vw">
                    <Text>Payment Method:</Text>
                  </InputLeftElement>
                  <Select
                    ml="10rem"
                    variant="flushed"
                    id="paymentMethod"
                    name="paymentMethod"
                    onChange={formik.handleChange}
                    value={formik.values.paymentMethod}
                  >
                    <option value="bank">Bank</option>
                    <option value="card">Card</option>
                    <option value="mtnmomo">Mtn Mobile Money</option>
                  </Select>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement w="10vh">
                    <Text>Amount:</Text>
                  </InputLeftElement>
                  <Input
                    ml="10rem"
                    pl="0"
                    variant="flushed"
                    id="amount"
                    name="amount"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.amount}
                  />
                </InputGroup>
                <Flex fontSize="13px">
                  <Text>Fee:</Text>
                  <Text ml="1rem">0 Naira</Text>
                </Flex>
                <Flex gap="5px">
                  <Button
                    variant="primaryOutline"
                    type="reset"
                    mt="1rem"
                  >
										Clear
                  </Button>
                  <Button
                    variant="primaryOutline"
                    type="submit"
                    mt="1rem"
                  >
										Deposit
                  </Button>
                </Flex>
              </VStack>
            </form>
          </Box>
        </Flex>
        {/* Create a small warning  text */}
        <Text fontSize="13px" color="danger" ml="1.5rem">
          "
          Please note that you can only Deposit to the payment
          method.
        </Text>
      </Card>

      <Button variant="primaryOutline" mt="1rem">
        View All Deposits
      </Button>
    </Container>
  );
};

export default Deposit;
