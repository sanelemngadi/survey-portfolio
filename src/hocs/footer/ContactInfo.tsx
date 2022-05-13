import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import styled from 'styled-components'
import { Center } from '../../components/components.styles'

const Wrapper = styled.div`
    a,td{
        color: ${({ theme }) => theme.colors.secondary};
    }

    td{
        padding-right: 2rem;
    }
    h3{
        margin-bottom: .5rem;
    }

    @media (min-width:992px){
        padding-top: 2rem;
    }
`
const ContactInfo = () => {
    return (
        <Wrapper>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td><span><FaPhoneAlt size={18} /></span></td>
                        <td><h3>Contact info:</h3></td>
                    </tr>
                    <tr>

                        <td></td>
                        <td><a href="mailto:hello@sanelemngadi.com">Email: hello@sanelemngadi.com</a></td>
                    </tr>
                    <tr>

                        <td></td>
                        <td><p>Phone: +27 607013296</p></td>
                    </tr>

                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    {/* <br /> */}

                    <tr>
                        <td><span><FaMapMarkerAlt size={18} /></span></td>
                        <td><h3>Address:</h3></td>
                    </tr>
                    <tr>

                        <td></td>
                        <td><p>Durban, 4001</p></td>
                    </tr>
                    <tr>

                        <td></td>
                        <td><p>KZN,  South Africa</p></td>
                    </tr>

                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    {/* <br /> */}

                    <tr>
                        <td><span><FaClock size={18} /></span></td>
                        <td><h3>Hours of operation:</h3></td>
                    </tr>
                    <tr>

                        <td></td>
                        <td><p>Monday - Friday</p></td>
                    </tr>
                    <tr>

                        <td></td>
                        <td><p>09:00 am - 7:00 pm</p></td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>

        </Wrapper>
    )
}

export default ContactInfo