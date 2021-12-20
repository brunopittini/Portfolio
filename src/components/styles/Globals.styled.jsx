import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-family: "Share Tech Mono", monospace;
    scroll-behavior: smooth;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.navyBlue};
    font-size: 12px;
}

a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.green};
    transition: "all 250ms ease-in-out";

    &:hover{
        color: ${(props) => props.theme.colors.orange};
    }
}

ul{
    list-style: none;
}

hr{
    background: linear-gradient(
        to right, 
        ${(props) => props.theme.colors.orange} 0%,
        ${(props) => props.theme.colors.purple} 100%
    );
    border: 0px;
    height: 1px;
}
`;
