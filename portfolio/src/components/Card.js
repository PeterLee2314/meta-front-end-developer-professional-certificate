import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg = "white" color="black">
    <VStack spacing={1}>
      <Image src={imageSrc}></Image>
        <Box p='3'>
        <VStack spacing={2} align='stretch'>
          <Heading fontSize="sm" color="black">{title}</Heading>
          <Text fontSize='xs' color="grey">{description}</Text>
          <HStack spacing={2} fontSize="xs">
                <Text>See More</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
            </VStack>
        </Box>
      </VStack>
  </Box>

    );
};

export default Card;
