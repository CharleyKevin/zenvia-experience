import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #E5E5E5;
    color: #000;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Hind Vadodara', serif;
    font-size: 16px;
    line-height: 24px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
    background: #7D1E78;
    border-radius: 10px;
    width: 150px;
    color:white;
  }

  .nav_gray {
    padding-left: 7px;
    color: #706C6D;
  }

  .nav_black {
    color: 231F20;
  }

  .avatar {
    padding-left: 7px;
    padding-right: 7px;
  }

  .title {
    font-family: Hind Vadodara;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #231F20;
  }

  .subtitle {
    padding-top: 66px;
    font-family: Hind Vadodara;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #231F20;
  }
`;
