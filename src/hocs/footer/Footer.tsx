import Image from 'next/image';
import React from 'react';
import Socials from '../../components/Socials';
import { FooterWrap, SiteMap, Wrapper, CompanyWrapper, CompanyCopy } from './footer.styles';
import { FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import BusinessForm from './BusinessForm';
import { Heading } from '../../components/Heading';
import ContactInfo from './ContactInfo';

const Footer = () => {
    return (
        <Wrapper>
            <FooterWrap>
                <Heading style={{ textAlign: "left", color: "#BFDBFE" }}>
                    <h1>Let's Work Together</h1>
                </Heading>
                <ContactInfo />
                <BusinessForm />
            </FooterWrap>

            <CompanyWrapper>
                <CompanyCopy>

                    <div>
                        <Image
                            src="/assets/vectors/logo.svg"
                            width={100}
                            height={51}
                            // width={133}
                            // height={68}
                            alt="primary logo"
                        />

                        SurvPreneur
                    </div>
                    <SiteMap>
                        <div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Surveys</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </SiteMap>
                    <div>
                        <Socials />
                    </div>

                </CompanyCopy>
            </CompanyWrapper>
        </Wrapper>
    )
}

export default Footer