/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */

'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel(photos: any) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const thePhotos = photos.photos;
  return (
    <Box borderRadius={7} position="relative" height="100%" width="full" overflow="hidden">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        _hover={{ backgroundColor: 'primary' }}
        transform="translate(0%, -50%)"
        background="rgba(26, 186, 189, 0.1)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(5px)"
        color="white"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        background="rgba(26, 186, 189, 0.1)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(5px)"
        right={side}
        top={top}
        _hover={{ backgroundColor: 'primary' }}
        transform="translate(0%, -50%)"
        zIndex={2}
        color="white"
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {thePhotos.map((photo: string) => (
          <Box
            key={photo}
            height="100%"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={photo}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                maxW="lg"
                background="rgba(26, 33, 32, 0.1)"
                borderRadius="7"
                p="5px"
                boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
                backdropFilter="blur(5px)"
                position="absolute"
                top="10%"
                transform="translate(0, -50%)"
              >
                {/* <Heading color="white" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                </Text> */}
              </Stack>
            </Container>

          </Box>
        ))}
      </Slider>
    </Box>
  );
}
