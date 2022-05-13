import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PrimaryBg = css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
`