import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import { Container } from '../../components/Container';
import { HeaderStyle, LogoStyle, NavStyle, ToggleMenuStyle } from './header.styles';
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
                            alt="primary logo"
                            priority
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
                            <Link href="/about" >
                                <a onFocus={() => setShowSideBar(false)}>About</a>
                            </Link>
                        </li>
                    </ul>
                </Container>
            </NavStyle>
        </HeaderStyle >
    )
}

export default Header;