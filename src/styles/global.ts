import styled from "styled-components";
import { Colors } from "./colors";

export const Body = styled.div`
    min-height: 100vh;

    background-color: #fffafa;
`;

export const Container = styled.div`
    padding: 0px 5%;
    
    max-width: 1320px;
    margin: 0 auto;
`;

export const Main = styled.main`
    padding: 80px 5%;

    @media screen and (max-width: 375px){
        padding: 40px 0;
    }
`;

export const SneakersText = styled.p`
    font-size: 1rem;
    font-weight: 700;

    text-transform: uppercase;

    color: ${Colors.orange.normal};
`;