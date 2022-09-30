import React from 'react';
import styled from 'styled-components';
// import { Heading } from '../../components/Heading';

const Wrapper = styled.div`
    // border: 1px solid black;
`

const Form = styled.form`
    // border: 1px solid red;
    padding: .5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "name" 
                        "email" 
                        "phone" 
                        "company" 
                        "interest"
                        "expected" 
                        "message" 
                        "button";

    & > div:nth-of-type(1){ grid-area: name};
    & > div:nth-of-type(2){ grid-area: email};
    & > div:nth-of-type(3){ grid-area: phone};
    & > div:nth-of-type(4){ grid-area: company};
    & > div:nth-of-type(5){ grid-area: interest};
    & > div:nth-of-type(6){ grid-area: expected};
    & > div:nth-of-type(7){ grid-area: message};
    & > div:nth-of-type(8){ grid-area: button};

    input, textarea, select{
        border:none;
        outline:none;
        background-color: ${({ theme }) => theme.colors.primary};
        // background-color: transparent;
        border-bottom: 1px solid gray;
        width: 100%;
        height: 4rem;
        color: ${({ theme }) => theme.colors.secondary};
        padding: 1em;
    }
    input::placeholder, textarea::placeholder{
        color: ${({ theme }) => theme.colors.secondary};
    }

    input:hover, textarea:hover, select:hover,
    input:focus, textarea:focus, select:focus{
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    }

    button{
        display: block;
        background-color: #0f4532;
        width: 10rem;
        height: 3rem;
        color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        font-weight: 700;
        border-radius: 1rem;
        margin: 1rem auto;
        cursor: pointer;
    }
    button:active{
        transform: scaleX(.78);
    }


    @media (min-width: 768px){
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "name email" 
                        "phone company" 
                        "interest expected" 
                        "message message" 
                        "button .";

        gap: .5rem;
    }
`

const BusinessForm = () => {
    return (
        <Wrapper>
            <Form
                method='POST'
                action='/sucess/'
                name="Contacts"
                data-netlify="true"
                onSubmit={() => 'submit'}
                data-netlify-honeypot='bot-field'
            >

                <input name="bot-field" style={{ display: "none" }} />
                <input type="hidden" name="form-name" value='Contacts' />
                {/* <div> */}
                <div>
                    <input
                        type="text"
                        placeholder="Your Name *"
                        name='name'
                        required

                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Your Email *"
                        name='email'
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Your Phone *"
                        name='tel'
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Company"
                        name='co-name'
                    />
                </div>
                <div>
                    <select
                        name='interestedin'
                    >
                        <option value=''>I interested in ...</option>
                        <option value='logo'>&nbsp; &nbsp; Logo Design</option>
                        <option value='ux-ui'>&nbsp; &nbsp; UX/UI Web Design</option>
                        <option value='webdev'>&nbsp; &nbsp; Web Development</option>
                        <option value='poster'>&nbsp; &nbsp; Poster</option>
                        <option value='map'>&nbsp; &nbsp; Study Map</option>
                        {/* <option>&nbsp; &nbsp; Creative Branding</option> */}
                    </select>
                </div>
                <div>
                    <select name='expectedin'>
                        <option value=''> Expected in</option>
                        <option value='nextweek'>&nbsp; &nbsp; next week</option>
                        <option value='nextmonth'>&nbsp; &nbsp; next month</option>
                        <option value='2months'>&nbsp; &nbsp; next 2 months</option>
                        <option value='3months'>&nbsp; &nbsp; next three months</option>
                    </select>
                </div>
                <div>
                    <textarea
                        rows={2}
                        placeholder="Message *"
                        name='message'
                        required
                    >
                    </textarea>
                </div>
                <div>
                    <button type='submit'>Send</button>
                </div>
                {/* </div> */}
            </Form >
        </Wrapper>
    )
}

export default BusinessForm