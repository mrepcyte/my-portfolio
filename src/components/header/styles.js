import styled from "styled-components";

export const HeaderComponent = styled.div`
    background-color: #f9e79f;
    height: 30px;
    width: 100vw;
    padding: 4px;
`;

export const NAV = styled.nav`
    padding: 2px;
`;

export const A = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: #000;
    margin: 0 10px 1px 5px;

    &:hover {
        border-bottom: 1px solid #000;
    }
`;
