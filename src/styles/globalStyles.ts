import { createGlobalStyle, css } from 'styled-components';

const misc = {
   rounded: {
      xs: '5px',
      sm: '10px',
      md: '15px',
      lg: '20px',
      full: '999px',
   },
};

const typography = {
   type: {
      primary: `'Jost', sans-serif`,
   },
   weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
   },
};

const breakpoints = {
   mobile: '375px',
   tablet: '768px',
   desktop: '1024px',
   large: '1100px',
   hd: '1440px',
};

const bodyStyles = css`
   font-family: ${typography.type.primary};
   background-color: ${(props) => props.theme.body};
   line-height: 1.6;
   max-width: 1600px;
   font-weight: 400;
   margin: auto;

   *,
   ::after,
   ::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: ${typography.type.primary};
   }

   main {
      min-height: 80vh;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-weight: ${typography.weight.bold};
      letter-spacing: 0.5px;
      line-height: 1;
   }

   p {
      font-size: 0.9rem;
      margin-bottom: 1rem;

      @media screen and (min-width: ${breakpoints.tablet}) {
         font-size: 1rem;
      }
   }

   img {
      max-width: 100%;
   }

   ul {
      list-style-type: none;
   }

   a {
      text-decoration: none;
      letter-spacing: 0.5px;
   }

   .container {
      width: 88%;
      margin: auto;

      @media screen and (min-width: ${breakpoints.tablet}) {
         width: 88%;
      }

      @media screen and (min-width: ${breakpoints.desktop}) {
         width: 80%;
         max-width: 1110px;
      }
   }

   .btn {
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: ${misc.rounded.sm};
      border: none;
      font-weight: ${typography.weight.semibold};
      text-transform: capitalize;
   }
`;

const GlobalStyle = createGlobalStyle`
   html {
      scroll-behavior: smooth;
   }

   body {
      ${bodyStyles}
   }
`;

export { GlobalStyle, breakpoints, typography, misc };
