import styled from "styled-components";

export const H1 = styled.h1`
    font-weight: 400;
    font-size: 48px;
    margin: 80px 20px 10px 740px;

    @media (max-width: 980px) {
        margin-left: 280px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

export const IntroductionSection = styled.section`
    width: 90%;
    display: flex;
    flex-direction: row;
    margin-left: 44px;

    @media (max-width: 850px) {
        margin-left: 16px;
    }

    @media (max-width: 600px) {
        margin-left: 8px;
        flex-direction: column;
    }
`;

export const Image = styled.img`
    height: 150px;
    border-radius: 150px;
    margin: 0 10px 10px 80px;

    @media (max-width: 600px) {
        margin: 40px 10px 10px 40px;
        display: block;
        height: auto;
        width: 24%;
    }

    @media (max-width: 480px) {
        width: 28%;
    }
`;

export const P = styled.p`
    text-align: justify;
    font-size: 16px;
    margin: 14px 10px 12px 12px;

    @media (max-width: 600px) {
        margin: 14px 0 12px 42px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        margin: 14px 0 12px 26px;
    }
`;

