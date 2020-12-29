import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block
  }
  body {
    line-height: 1
  }
  html, body{
    background: #f2f3f4;
  }
  ol, ul {
    list-style: none
  }
  blockquote, q {
    quotes: none
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none
  }
  table {
    border-collapse: collapse;
    border-spacing: 0
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  
  /*  App styles */
  * {
    outline-color: #95A5A6;
    box-sizing: border-box;
  }
  
  html,
  body {
    font-size: 16px;
    height: 100%;
    -webkit-appearance: none;
    font-family: "Helvetica", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    margin: 0;
    background-color: #E5E8E8;
  }
  
  #app {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: #424949;
`;
