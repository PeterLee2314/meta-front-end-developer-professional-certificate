import { HStack, Link, Box, Heading, VStack, Text, Image, Button, Highlight } from '@chakra-ui/react'
import Card from "./Card";
const specials = [
    {
        title: "Greek salad",
        price: "12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImageSrc: () => require("../images/menu/Melonandhamappetizer.jpg"),
      },
    {
        title: "Bruchetta",
        price: "5.99",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        getImageSrc: () => require("../images/menu/BURRATAAppetizer.jpg"),
    },
    {
        title: "Lemon Dessert",
        price: "5.00",
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../images/menu/Melonandshrimpappetizer.jpg"),
    },
];
const Highlights = () => {
  return (
    <Box maxWidth="1280px" margin="0 350px">
        <Box height="555px" width="1230px">
        <HStack
        px={16}
        py={4}
        spacing={15}
        justifyContent="space-between"
        >
        <Heading fontSize='40px'>Speicals</Heading>
        <Button height="60px" width="200px" fontSize="18px">Online Menu</Button>
        </HStack>
            <Box
            display="grid"
            gridTemplateColumns= "1fr 1fr 1fr"
        >
            {specials.map((special) => (
            <Card
                key={special.title}
                title={special.title}
                description={special.description}
                imageSrc={special.getImageSrc()}
            />
            ))}
        </Box>
        </Box>

    </Box>
  );
};

export default Highlights;
