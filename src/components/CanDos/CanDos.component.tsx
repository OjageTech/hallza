/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { Link as RouteLink } from 'react-router-dom';
import {
  Text, Flex, Image, Grid, GridItem, Tooltip,
} from '@chakra-ui/react';
import { ROUTE, USER_DASHBOARD_ROUTE, IN_DASHBOARD_ROUTE } from '../../routes';
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
    subtitle: 'Learn Hallza fundamentals and start building with tutorials',
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
      title={title === 'Hallza Bills' || title === 'Hallza Catering' ? 'Coming soon' : title}
      as={RouteLink}
      to={
          title === 'Hallza Bills' || title === 'Hallza Catering' ? '/' : path
        }
      onClick={onClick}
      p="2px"
      w="225"
      boxShadow={
          title === 'Hallza Bills' || title === 'Hallza Catering'
            ? 'rgba(17, 17, 26, 0.1) 0px 1px 0px;'
            : 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
        }
      h="224"
    >
      <Image
        w={225}
        h="auto"
        src={img}
        style={{ filter: 'grayscale(100%)' }}
      />

      <Flex p={0} justifyContent="left" alignItems="center" gap=".5rem">
        <Text
          color={
              title === 'Hallza Bills' || title === 'Hallza Catering'
                ? 'gainsboro'
                : color
            }
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
        color={
            title === 'Hallza Bills' || title === 'Hallza Catering'
              ? 'gainsboro'
              : 'inherit'
          }
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
  <Box margin="0 auto" w="95vw">
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
  onClick: () => console.log('Default Immediately evoked Function prop'),
};

export default ProminentCanDos;
