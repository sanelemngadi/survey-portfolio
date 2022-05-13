import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa"

export const SocialStyles = styled.ul`
    display: flex;
    align-items: center;
    // border 1px solid blueviolet;
    // height: 4.5rem;
`

const Socials = () => {
    return (
        <SocialStyles>
            <li>
                <a href='#'>
                    <FaFacebookSquare size={30} color="blue" />
                </a>
            </li>
            <li>
                <a href='#'>
                    <FaTwitterSquare size={30} color="#BFDBFE" />
                </a>
            </li>
            <li>
                <a href='#'>
                    <FaLinkedin size={30} color="#BFDBFE" />
                </a>
            </li>
            <li>
                <a href='#'>
                    <FaInstagramSquare size={48} color="pink" />
                </a>
            </li>
        </SocialStyles>
    )
}

export default Socials