import { Heading, HStack, Image, Text, VStack, Box, Button} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import deliver from "../images/icon/deliver.png"
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' bg = "white" color="black">
    <VStack spacing={1}>
      <Image boxSize="400px" src={imageSrc}></Image>
        <Box p='6'>
        <VStack spacing={6} align='stretch'>
        <Box height="125px">
          <VStack spacing={2} fontSize="xs" align="left">
          <Heading fontSize="24px" color="black">{title}</Heading>
          <Text fontSize='16px' color="grey">{description}</Text>
          </VStack>
          </Box>
          <HStack spacing={2} fontSize="xs">
          
            <Button>
                <HStack spacing={2} fontSize="xs">
                    <Text fontSize="16px">Order a Delivery</Text>
                    <Image src={deliver}></Image>
                </HStack>
            </Button>
            </HStack>
            </VStack>
        </Box>
      </VStack>
  </Box>

    );
};

export default Card;
