import {
  Text, Flex, VStack, Grid, GridItem,
} from '@chakra-ui/react';
import Box from '../common/Box';
import Card from '../common/Card';
import Badger from '../../layouts/sidebars/UserDashboard/Badger';

const FeatureData = [
  {
    title: 'Venue Specific',
    subtitle: 'Your dashboard is very customisable ',
    content:
      'Fetch, cache, update and wrangle all forms of async data in your TS/JS, React, Vue, Solid & Svelte applications all without touching any "global state',
    newBadge: true,
    color: 'danger',
  },
  {
    title: 'TanStack Query',
    subtitle: 'Powerful asynchronous state management tool',
    content:
      'Fetch, cache, update and wrangle all forms of async data in your TS/JS, React, Vue, Solid & Svelte applications all without touching any "global state',
    newBadge: true,
    color: 'green',
  },
  {
    title: 'TanStack Query',
    subtitle: 'Powerful asynchronous state management tool',
    content:
      'Fetch, cache, update and wrangle all forms of async data in your TS/JS, React, Vue, Solid & Svelte applications all without touching any "global state',
    newBadge: true,
    color: 'secondary',
  },
  {
    title: 'TanStack Query',
    subtitle: 'Powerful asynchronous state management tool',
    content:
      'Fetch, cache, update and wrangle all forms of async data in your TS/JS, React, Vue, Solid & Svelte applications all without touching any "global state',
    newBadge: true,
    color: 'orange',
  },
  {
    title: 'TanStack Query',
    subtitle: 'Powerful asynchronous state management tool',
    content:
      'Fetch, cache, update and wrangle all forms of async data in your TS/JS, React, Vue, Solid & Svelte applications all without touching any "global state',
    newBadge: true,
    color: 'blue',
  },
  {
    title: 'TanStack Query',
    subtitle: 'Powerful asynchronous state management tool',
    content:
      'Fetch, cache, update and wrangle all forms of async data in your TS/JS, React, Vue, Solid & Svelte applications all without touching any "global state',
    newBadge: true,
    color: 'violet',
  },
];

type FeatureProps = {
  title: string;
  subtitle: string;
  content: string;
  newBadge: boolean;
  color: string;
};

const Feature = ({
  title,
  subtitle,
  content,
  newBadge,
  color,
}: FeatureProps) => (
  <GridItem>
    <Card w="fit-content" h="fit-content">
      <Flex justifyContent="space-between" alignItems="center" gap=".5rem">
        <Text
          color={color}
          lineHeight={{
            base: '1rem',
            md: '1.5rem',
            lg: '1.6rem',
            xl: '2rem',
          }}
          fontWeight={800}
          fontSize={{
            base: '.55rem',
            sm: '.8rem',
            md: '1rem',
            lg: '1.1rem',
            xl: '1.2rem',
          }}
        >
          {title}
        </Text>
        <Box display={newBadge ? 'true' : 'false'}>
          {' '}
          <Badger bg={color} disp="New" />
          {' '}
        </Box>
      </Flex>
      <Text
        color={color}
        mt=".5rem"
        fontStyle="italic"
        fontWeight={300}
        lineHeight="1.75rem"
        fontSize={{
          base: '.6rem',
          md: '.7rem',
          lg: '.8rem',
          xl: '1rem',
        }}
      >
        {subtitle}
      </Text>
      <Text
        mt=".5rem"
        fontSize={{
          base: '.5rem',
          md: '.7rem',
          lg: '.8rem',
          xl: '1rem',
        }}
      >
        {content}
      </Text>
    </Card>
  </GridItem>
);
const ProminentFeatures = () => (
  <Box margin="0 auto" w="70vw">
    <Text
      as="h3"
      fontSize={{
        base: '.7rem',
        md: '.95rem',
        lg: '1rem',
        xl: '2.4rem',
      }}
      fontWeight={300}
      lineHeight={{
        base: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3.1rem',
      }}
    >
      Most Prominent Features
    </Text>
    <Grid
      mt="1rem"
      templateColumns={{
        base: 'repeat(1,minmax(0,1fr))',
        sm: 'repeat(2,minmax(0,1fr))',
        lg: 'repeat(3,minmax(0,1fr))',
      }}
      gap={{
        sm: '.6rem',
        md: '.8rem',
        lg: '1.5rem',
        xl: '2.3rem',
      }}
    >
      {FeatureData.map(({
        title, subtitle, content, newBadge, color,
      }) => (
        <Feature
          title={title}
          subtitle={subtitle}
          content={content}
          newBadge={newBadge}
          color={color}
        />
      ))}
    </Grid>
  </Box>
);

export default ProminentFeatures;
