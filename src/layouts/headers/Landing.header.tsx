import {
  useState,
  useRef,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaSun } from 'react-icons/fa'
import { RiMoonLine } from 'react-icons/ri'
import { AiOutlineDownCircle, AiOutlineUpCircle, AiOutlineRight } from 'react-icons/ai'
import Box from '../../components/common/Box'
import {
  Button,
  Center,
  IconButton,
  VStack,
  Flex,
  Link,
  Text,
  Container,
  useColorMode,
} from '@chakra-ui/react'
import { navRoutes } from '../../routes/routes'
type PopItemProps = {
  name: string
}
const PopItem = ({ name }: PopItemProps) => {
  return (
    <Box
      _hover={{
        cursor: 'pointer',
        borderBottom: '1px solid teal',
      }}
      borderRadius='0'
      borderBottom='1px solid #e5e5e5'
      width='200px'
      as={RouteLink}
      to='/Login'
    >
      <Flex width='200px' alignItems='center' gap='5rem' justifyContent='space-between'>
        <Text as='div' w='100px'>
          {name}
        </Text>
        <Container
          // pl="2rem"
          _hover={{
            transform: 'translateX(0.5rem)',
          }}
          color='primary'
        >
          <AiOutlineRight />
        </Container>
      </Flex>
    </Box>
  )
}

function LandingHeader() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [hovered, setHovered] = useState(false)

  const handleHover = () => {
    setHovered(!hovered)
  }
  return (
    <>
      <Flex justifyContent='flex-end' textAlign='right' alignItems='center'>
        <Flex
          w='100vw'
          pl='1rem'
          pr='1rem'
          pt='1rem'
          pb='0.5rem'
          boxSizing='border-box'
          gap='1.5rem'
          justifyContent='flex-end'
          textAlign='right'
          alignItems='center'
          flexWrap='wrap'
        >
          {navRoutes.map(
            (item: {
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined
            }) => {
              // const Icon = item.icon;
              return (
                <Box
                  _hover={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '1rem',
                    textDecorationColor: 'primary',
                  }}
                  // variant={active == item.name ? 'activeItem' : 'navItem'}
                  // borderRadius="12.54px"
                  // onClick={() => handleItemClick(item.name)}
                >
                  {item.name==="Apply as Renter" : (<Button variant="primary">  {item.name}
                  </Button>) ?
                  <Text
                  >
                    {item.name}
                  </Text>}
                   
                  
                </Box>
              )
            },
          )}
          <Box
            _hover={{ cursor: 'pointer' }}
            display={hovered ? 'none' : 'block'}
            color='primary'
            onMouseOver={handleHover}
          >
            <AiOutlineDownCircle color='inherit' />
          </Box>
          <Box _hover={{ cursor: 'pointer' }} display={hovered ? 'block' : 'none'} color='primary'>
            <AiOutlineUpCircle color='inherit' />
          </Box>
          <Box
            onMouseLeave={handleHover}
            sx={{
              display: hovered ? 'block' : 'none',
              width: '250px',
              padding: '18px',
              border: '1px solid #bdbdbd',
              borderRadius: '4px',
              height: 'fit-content',
              marginTop: 0,
              position: 'absolute',
              // zIndex: 9,
              top: '4rem',
              // left: '-50%',
              // transform: 'var(--open-state) translateX(-50%)',
              transition: '.2s ease-in-out',
              // transformOrigin: 'top left',
              // '--open-state': 'scaleY(0)',
            }}
          >
            <VStack width='90%' gap='20px' textAlign='left' alignItems='left' justifyContent='left'>
              <VStack
                textAlign='left'
                alignItems='left'
                justifyContent='left'
                width='200px'
                gap='1rem'
              >
                <Text fontWeight={500} as='h4'>
                  Client
                </Text>
                <PopItem name='Login' />
                <PopItem name='Create an Account' />
              </VStack>
              <VStack
                textAlign='left'
                alignItems='left'
                justifyContent='left'
                width='200px'
                gap='1rem'
              >
                <Text fontWeight={500} as='h4'>
                  Venue
                </Text>
                <PopItem name='Login' />
                <PopItem name='Book a Call' />
              </VStack>
            </VStack>
          </Box>
          {colorMode === 'light' ? (
            <Box
              _hover={{
                cursor: 'pointer',
              }}
            >
              <FaSun size='2rem' onClick={toggleColorMode} />
            </Box>
          ) : (
            <Box
              _hover={{
                cursor: 'pointer',
              }}
            >
              <RiMoonLine size='2rem' onClick={toggleColorMode} />
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default LandingHeader
