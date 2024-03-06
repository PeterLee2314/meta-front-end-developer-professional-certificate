import React, { useEffect, useRef } from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import Logo from "../images/logo/logo1.png";
const Meta = () =>
    {
        return (
            <>
            <meta name="og:title" content="Little Lemon Restaurant"/>
            <meta name="og:description" content="A local restaurant"/>
            <meta name="og:image" content={Logo}/>
            </>
        );
    };
export default Meta;
