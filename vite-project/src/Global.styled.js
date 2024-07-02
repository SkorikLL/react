import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}


html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}
`;

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;
export const Hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`;
export const PopUserSet = css`
  button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: #565eef;
    border-radius: 4px;
    border: 1px solid #565eef;
    ${Hover03}
  }
  button a {
    color: #565eef;
  }
  &:target {
    display: block;
  }
`;

export const colors = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};

export const Orange = css`
  background-color: ${({ theme }) => theme.orangeBd};
  color: ${({ theme }) => theme.orangeText};
`;

export const Green = css`
  background-color: ${({ theme }) => theme.greenBd};
  color: ${({ theme }) => theme.greenText};
`;

export const Purple = css`
  background-color: ${({ theme }) => theme.purpleBd};
  color: ${({ theme }) => theme.purpleText};
`;

export const Gray = css`
  background: ${({ theme }) => theme.grayBd};
  color: ${({ theme }) => theme.grayText};
`;
