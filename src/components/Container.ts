import styled from "styled-components";


export const Container = styled.div`
    --bs-gutter-x: 1rem;
    max-width: 500px;
    margin: 0 auto;
    padding: var(--bs-gutter-x);
    // background-color: blueviolet;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 576px;
    }

    @media (min-width: 992px) {
        max-width: 768px;
    }

    @media (min-width: 1200px) {
        max-width: 992px;
    }

    @media (min-width: 1400px) {
        max-width: 1200px;
    }
`