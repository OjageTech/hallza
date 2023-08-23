import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import LandingHeader from '../../layouts/headers/Landing.header';
import Hotels from './Hotels/Hotels';
import Resorts from './Resorts/Resorts';
import Churches from './Churches/Churches';
import Outdoors from './Outdoors/Outdoors';
import Footer from '../../layouts/footers/Landing.footer';

function BrowseHallByType() {
  const { type } = useParams();

  const [bytype, setBytype] = useState('/single');

  useEffect(() => {
    if (type) {
      setBytype(type);
    }
  });
  return (
    <Box>
      <LandingHeader />
      <Box mt="5rem">
        {(() => {
          switch (bytype) {
            case 'hotels':
              return <Hotels />;
            case 'resorts':
              return <Resorts />;
            case 'churches':
              return <Churches />;
            case 'outdoors':
              return <Outdoors />;
            default:
              return null;
          }
        })()}
      </Box>
      <Box mt="3rem" />
      <Footer />
    </Box>
  );
}

export default BrowseHallByType;
