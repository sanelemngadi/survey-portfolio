import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import { Container } from '../../components/Container';
import { HeaderStyle, LogoStyle, NavStyle, ToggleMenuStyle } from './header.styles';
import { FaHandHoldingHeart, FaCartPlus } from "react-icons/fa";
import Image from 'next/image';

const Header: FunctionComponent = () => {
    const [showSideBar, setShowSideBar] = useState<boolean>(false);
    return (
        <HeaderStyle as="header">
            <LogoStyle>
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/assets/vectors/logo.svg"
                            width={100}
                            height={51}
                            // width={133}
                            // height={68}
                            alt="primary logo"
                        />
                    </Link>
                </div>
                <ToggleMenuStyle onClick={() => setShowSideBar(!showSideBar)} isToggled={showSideBar}>
                    <span></span><span></span><span></span>
                </ToggleMenuStyle>
            </LogoStyle>
            <NavStyle isToggled={showSideBar}>
                <Container>
                    <ul>
                        <li><Link href="/"><a onFocus={() => setShowSideBar(false)}>Home</a></Link></li>
                        <li>
                            <a href="#">Surveying</a>
                            <ul>
                                <li>
                                    <Link href="/surveying/the-polar"><a onFocus={() => setShowSideBar(false)}>The Polar</a></Link>
                                </li>
                                <li>
                                    <Link href="/surveying/the-join"><a onFocus={() => setShowSideBar(false)}>The Join</a></Link>
                                </li>
                                <li>
                                    <Link href="/surveying/collimation-method"><a onFocus={() => setShowSideBar(false)}>The Coll</a></Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                            <ul>
                                <li>
                                    <Link href="/portfolio/services">
                                        <a onFocus={() => setShowSideBar(false)}>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/experiences">
                                        <a onFocus={() => setShowSideBar(false)}>Experiences</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/contact">
                                        <a onFocus={() => setShowSideBar(false)}>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio/about" >
                                        <a onFocus={() => setShowSideBar(false)}>About</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#store">
                                <a onFocus={() => setShowSideBar(false)}>Store <FaCartPlus color='blueviolet' /></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#donate" >
                                <a onFocus={() => setShowSideBar(false)}>Donate <FaHandHoldingHeart color='red' /></a>
                            </Link>
                        </li>
                    </ul>
                </Container>
            </NavStyle>
        </HeaderStyle >
    )
}

export default Header;