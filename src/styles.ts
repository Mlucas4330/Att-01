import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

export const Header = styled.header`
    background-color: gray;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Tittle = styled.h1`
    color: white;
    text-align: center;
    font-size: 3rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Section = styled.section`
    background-color: lightgray;
    display: flex;
    height: 50vh;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`

export const Card = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SectionImg = styled.section`
    height: 100vh;
    display: flex;
`

export const Wraper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Contato = styled(Header)`
    height: 50vh;
`

export const Footer = styled.footer`
    height: 40vh;
    background-color: lightgray;
    display: flex;
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
`