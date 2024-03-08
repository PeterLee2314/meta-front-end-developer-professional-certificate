import React, { useEffect, useRef } from "react";
import { Box, HStack, Link, Image } from "@chakra-ui/react";
import Logo from "../images/logo/logo1.png";
const Header = () =>
    {
        const handleClick = (anchor) => () => {
            const id = `${anchor}-section`;
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          };
        return (

            <Box maxWidth="1280px" margin="0 300px">
                <HStack
                px={16}
                py={4}
                spacing={16}
                justifyContent="center"
                alignItems="center"
                >
                <Image width="200px" height="70px" src={Logo}/>
                <a href="/#Home" onClick={handleClick("Home")}>Home</a>
                <a href="/#About" onClick={handleClick("About")}>About</a>
                <a href="/#Menu" onClick={handleClick("Menu")}>Menu</a>
                <a href="/#Reservation" onClick={handleClick("Reservation")}>Reservation</a>
                
                
                {/*<a href="/#Order Online" onClick={handleClick("Order Online")}>Order Online</a><a href="/#Login" onClick={handleClick("Login")}>Login</a>*/}
                </HStack>
            </Box>

        );
    };
export default Header;
