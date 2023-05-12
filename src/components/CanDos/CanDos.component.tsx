/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { Link as RouteLink } from 'react-router-dom';
import {
  Text, Flex, Image, Grid, GridItem,
} from '@chakra-ui/react';
import {
  ROUTE,
  USER_DASHBOARD_ROUTE,
  IN_DASHBOARD_ROUTE,
} from '../../routes';
import Box from '../common/Box';
import Card from '../common/Card';
import Badger from '../../layouts/sidebars/UserDashboard/Badger';
import hand from '../../assets/images/hand.png';
import comp from '../../assets/images/comp.png';
import edgeEditorial from '../../assets/images/Edge_Editorial.png';

const handleClick = () => {
  const inputElement = document.querySelector('input[type="text"]'); // not found
  let scrollPosition = 800;
  if (inputElement instanceof HTMLInputElement) {
    inputElement.focus(); // not doing anytin
    scrollPosition = window.pageYOffset + inputElement.offsetTop - 100;
  }

  // Scroll to the desired position
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
  });
};

const CanDosData = [
  {
    title: 'Find Multiple Venues',
    subtitle: 'Search for the specific Hall you need for your event',
    img: hand,
    newBadge: false,
    color: 'primary',
    path: ROUTE.FIND,
  },
  {
    title: 'Launch your First Hall',
    subtitle:
      'Learn Hallza fundamentals and start building with tutorials',
    img: edgeEditorial,
    newBadge: false,
    color: 'secondary',
    path: ROUTE.USER_DASHBOARD,
  },
  {
    title: 'Hallza Bills',
    subtitle: 'Powerful asynchronous bills management tool',
    img: comp,
    newBadge: false,
    color: 'primary',
    path: ROUTE.USER_DASHBOARD,
  },
  {
    title: 'Hallza Catering',
    subtitle: 'Powerful tool for your Catering services',
    img: hand,
    newBadge: false,
    color: 'secondary',
    path: ROUTE.USER_DASHBOARD,
  },
];

type CanDoProps = {
  title: string;
  subtitle: string;
  img: string;
  newBadge: boolean;
  color: string;
  onClick?: () => void;
  path: ROUTE | USER_DASHBOARD_ROUTE | IN_DASHBOARD_ROUTE | undefined;
};

const CanDo = ({
  title,
  subtitle,
  img,
  newBadge,
  color,
  onClick,
  path,
}: CanDoProps) => (
  <GridItem>
    <Card
      as={RouteLink}
      to={path}
      onClick={onClick}
      p="2px"
      w="225"
      h="224"
    >
      <Image w={225} h="auto" src={img} />
      <Flex
        p={0}
        justifyContent="left"
        alignItems="center"
        gap=".5rem"
      >
        <Text
          color={color}
          lineHeight={{
            base: '.9rem',
            md: '1.2rem',
            lg: '1.3rem',
            xl: '1.6rem',
          }}
          fontWeight={600}
          fontSize={{
            base: '.55rem',
            sm: '.6rem',
            md: '.8rem',
            lg: '1rem',
            xl: '1.2rem',
          }}
        >
          {title}
        </Text>
        <Box display={newBadge ? 'block' : 'none'}>
          {' '}
          <Badger bg={color} disp="New" />
          {' '}
        </Box>
      </Flex>
      <Text
        textAlign="center"
        mt=".5rem"
        fontWeight={300}
        lineHeight="1rem"
        fontSize={{
          base: '.5rem',
          md: '.6rem',
          lg: '.6rem',
          xl: '.9rem',
        }}
      >
        {subtitle}
      </Text>
    </Card>
  </GridItem>
);

const ProminentCanDos = () => (
  <Box
    margin="0 auto"
    w="95vw"
  >
    <Grid
      mt="1rem"
      templateColumns={{
        base: 'repeat(1,minmax(0,1fr))',
        sm: 'repeat(3,minmax(0,1fr))',
        lg: 'repeat(4,minmax(0,1fr))',
      }}
      gap={{
        sm: '.6rem',
        md: '.8rem',
        lg: '1.5rem',
        xl: '2.3rem',
      }}
    >
      {CanDosData.map(
        ({
          title,
          subtitle,
          img,
          newBadge,
          onClick,
          color,
          path,
        }: CanDoProps) => (
          <CanDo
            title={title}
            subtitle={subtitle}
            img={img}
            newBadge={newBadge}
            color={color}
            path={path}
            onClick={onClick}
          />
        ),
      )}
    </Grid>
  </Box>
);

CanDo.defaultProps = {
  onClick: () => console.log('canDo-french'),
};

export default ProminentCanDos;
