import React, { useEffect, useRef } from "react";
import { Box, HStack, Link } from "@chakra-ui/react";

const Nav = () =>
    {
        return (
            <nav>
                <ul>
                    <li><a href="/home">Homepage</a></li>        
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/blog">Blog</a></li>  
                </ul>
            </nav>
        );
    };
export default Nav;
