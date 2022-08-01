import { createGlobalStyle, css } from 'styled-components';

const misc = {
   rounded: {
      xs: '8px',
      sm: '10px',
      md: '15px',
      lg: '20px',
      full: '999px',
   },
   transition: {
      ease: 'all 0.3s ease-in-out',
   },
};

const typography = {
   type: {
      primary: ` 'League Spartan', sans-serif`,
   },
   weight: {
      light: '300',
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
   font-size: 1rem;
   background-color: ${(props) => props.theme.body};
   color: ${(props) => props.theme.text};
   line-height: 1.6;
   max-width: 1600px;
   font-weight: 400;
   margin: auto;
   transition: ${misc.transition.ease};
   overflow-y: scroll;
   overflow-x: hidden;

   &::-webkit-scrollbar {
      width: 0.75em;
   }

   &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
   }

   &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      border-radius: 10px;
      /* outline: 1px solid slategrey; */
   }

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
      color: ${(props) => props.theme.boldText};
   }

   p {
      font-size: 1rem;
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

   fieldset {
      border: none;
   }

   legend {
      padding: 2rem 0 0.5rem;
      font-weight: ${typography.weight.semibold};
      color: ${(props) => props.theme.accent};
   }

   input,
   select {
      width: 100%;
      height: 100%;
      padding: 1rem;
      border-radius: 5px;
      border: 1px solid transparent;
      outline: none;
      background-color: ${(props) => props.theme.cardBody};
      color: ${(props) => props.theme.boldText};
      transition: ${misc.transition.ease};

      &:hover,
      &:focus {
         border: 1px solid ${(props) => props.theme.accent};
      }
   }

   input {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
         -webkit-appearance: none;
         margin: 0;
      }

      &[type='number'] {
         -moz-appearance: textfield;
      }
   }

   .container {
      width: 90%;
      margin: auto;

      @media screen and (min-width: ${breakpoints.tablet}) {
         width: 90%;
      }

      @media screen and (min-width: ${breakpoints.desktop}) {
         width: 65%;
         max-width: 800px;
      }
   }

   button,
   .btn {
      border: none;
      cursor: pointer;
      border-radius: ${misc.rounded.full};
      padding: 1rem 1rem;
      font-size: 0.9rem;
      font-weight: ${typography.weight.semibold};
      text-transform: capitalize;
      outline: none;
      color: ${(props) => props.theme.white};
      transition: ${misc.transition.ease};

      &.edit,
      &.draft {
         background-color: ${(props) => props.theme.bodyAlt};
         color: ${(props) => props.theme.text};
      }

      &.delete {
         background-color: ${(props) => props.theme.red};
      }

      &.paid,
      &.save {
         background-color: ${(props) => props.theme.accent};
      }

      &.save {
         margin-left: 1rem;
      }

      &.discard {
         color: ${(props) => props.theme.accent};
         background-color: ${(props) => props.theme.btnWrapAlt};
      }

      &.add-item-btn {
         display: flex;
         gap: 0.5rem;
         justify-content: center;
         align-items: center;
         background-color: ${(props) => props.theme.cardBody};
         color: ${(props) => props.theme.text};
      }

      &.delete-item {
         background: none;
         line-height: 0;
         padding: 0;
      }

      &:hover {
         opacity: 0.5;
      }

      @media screen and (min-width: ${breakpoints.tablet}) {
         padding: 1rem 1.5rem;
         font-size: 1rem;
      }
   }

   .badge {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      padding: 0.65rem 0.75rem;
      border-radius: ${misc.rounded.xs};
      text-transform: capitalize;
      font-weight: ${typography.weight.semibold};
      font-size: 1rem;
      background-color: gray;
      width: 100%;

      .circle {
         width: 7px;
         height: 7px;
         border-radius: 50%;
         background-color: black;
      }

      &.paid {
         background-color: rgba(51, 214, 159, 0.1);
         color: ${(props) => props.theme.green};

         .circle {
            background-color: ${(props) => props.theme.green};
         }
      }

      &.pending {
         background-color: rgba(255, 143, 0, 0.1);
         color: ${(props) => props.theme.orange};

         .circle {
            background-color: ${(props) => props.theme.orange};
         }
      }

      &.draft {
         background-color: ${(props) => props.theme.bodyAlt};
         color: ${(props) => props.theme.boldText};

         .circle {
            background-color: ${(props) => props.theme.boldText};
         }
      }
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
