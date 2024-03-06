import { HStack, Link, Box, Heading, VStack, Text, Image, Button } from '@chakra-ui/react'
import Melonandhamappetizer from '../images/menu/Melonandhamappetizer.jpg'
const Hero = () => {
  return (
    <Box maxWidth="1280px" margin="0 300px">
        <HStack
        px={16}
        py={4}
        spacing={15}
        justifyContent="center"
        alignItems="center"
        >
        <Box m={12} >
        <VStack spacing={4} alignItems="left">
            <Heading fontSize="56px">Little Lemon</Heading>
            <Text fontSize='32px'>Chicago</Text>
            <Text fontSize='20px'>Welcome to our family-owned Mediterranean restaurant, a culinary haven where tradition meets innovation. Nestled in the heart of Chicago, 
            we take pride in curating an authentic dining experience that pays homage to time-honored recipes while infusing a modern twist into every dish.</Text>
            <Button height="60px" width="200px">Reverse a Table</Button>
        </VStack>
        </Box>
        <Image  height="325px" wdith="375px"src={Melonandhamappetizer}/>
        </HStack>
    </Box>
  );
};

export default Hero;