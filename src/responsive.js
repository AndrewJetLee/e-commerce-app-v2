import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media (max-width: 600px) {
            ${props}
        }
    `
}

export const tablet = (props) => {
    return css`
        @media (max-width: 768px) {
            ${props}
        }
    `
}