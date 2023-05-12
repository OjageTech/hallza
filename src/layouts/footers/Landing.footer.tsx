import { Link } from 'react-router-dom';
import { Flex, Container, useColorMode } from '@chakra-ui/react';
import { ROUTE } from '../../routes';
import FooterLinkI from '../../interfaces/footer';

const FooterLink = ({ path, name }: FooterLinkI) => (
  <Link to={path}>
    <div>{name}</div>
  </Link>
);

const Footer = () => {
  const { colorMode } = useColorMode();
  const currentYr = new Date().getFullYear();
  return (
    <Container
      fontSize="14px"
      position="absolute"
      bottom={0}
      mt={20}
      maxWidth="100vw"
      ml={0}
      mr={0}
      padding="2px"
      minW="100vw"
      textAlign="center"
      alignItems="center"
      backgroundColor={
        colorMode === 'light' ? 'tertiary' : 'cardColor'
      }
    >
      <Flex minH="3vh" justifyContent="space-between">
        <Flex>
          <Container>
            <FooterLink path={ROUTE.LOGIN} name="Feedback" />
          </Container>
          <Container>
            <FooterLink path={ROUTE.LOGIN} name="Language" />
          </Container>
        </Flex>
        <Flex gap="5pc" pr="1pc">
          <div>
            &copy;
            {currentYr}
            ,
            <span> Hallza </span>
            All rights reserved
          </div>
          <FooterLink path={ROUTE.LOGIN} name="Privacy" />
          <FooterLink path={ROUTE.LOGIN} name="Terms" />
          <FooterLink path={ROUTE.LOGIN} name="Cookie preferences" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
