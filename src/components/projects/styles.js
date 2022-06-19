import styled from 'styled-components';

export const ProjectSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 30px 80px;

    @media (max-width: 850px) {
        margin-left: 20px;
    }

    @media (max-width: 480px) {
        margin-left: 12px;
    }

    @media (max-width: 400px) {
        margin-left: 6px;
    }
`;

export const Project = styled.div`
    width: 30%;
    position: relative;
    border-radius: 12px;
    background-color: #a5dce4;
    margin: 8px;

    @media (max-width: 600px) {
        width: 100%;
        margin: 20px 40px;
    }

    @media (max-width: 400px) {
        width: 96%;
        margin: 20px 30px;
    }
`;

export const IMG = styled.img`
    width: 98%;
    height: auto;
    margin: 4px auto;
    border: 2px dotted #fff;
`;

export const Overlay = styled.div`
    opacity: 0;
    position: absolute;
    background-color: #73cdd9;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &:hover {
        opacity: 0.97;
    }
`;

export const P = styled.p`
    text-align: center;
    font-size: 20px;
`;

export const P2 = styled.p`
    font-size: 18px;
    margin-left: 20px;

    @media (max-width: 600px) {
        margin-left: 40px;
    }

    @media (max-width: 400px) {
        font-size: 14px;
        margin-left: 36px;
    }
`;

export const OverlayH2 = styled.h2`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`;

export const A = styled.a`
    text-decoration: none;
    color: #fff;
    transition: border 0.2s ease-in;

    &:hover {
        border-bottom: 1px solid #fff;
    }
`;

export const OverlayP = styled.p`
    text-align: justify;
    font-size: 14px;
    font-weight: 300;
    padding: 20px;

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const OverlayFooterP = styled.p`
    font-size: 14px;
    font-weight: 400;
    position: absolute;
    bottom: 10px;
    left: 20px;
`;
