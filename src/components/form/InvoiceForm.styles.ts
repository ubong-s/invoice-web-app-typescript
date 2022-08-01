import styled from 'styled-components';
import { breakpoints } from '../../styles/globalStyles';

export const FormButtons = styled.div`
   padding: 0 1rem;
   background-color: ${(props) => props.theme.btnWrap};
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 15%;
   box-shadow: hsla(0, 0%, 0%, 0.15) 0px 5px 15px 0px;

   &.alt {
      justify-content: flex-end;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 0 2rem;
      height: 15%;
   }
`;

export const InvoiceFormRoot = styled.div`
   height: calc(100vh - 80px);
   margin: auto;
   z-index: 30;
   position: relative;
   line-height: 1;
   margin-bottom: 0;

   .intro {
      height: 10%;
      padding: 0.5rem 1rem 0;
      display: flex;
      align-items: center;

      h2 {
         span {
            color: ${(props) => props.theme.cardText};
         }
      }
   }

   form {
      padding: 0 1rem 2rem;
      height: 75%;
      overflow-y: scroll;
      padding-right: 1rem;
      padding-bottom: 1rem;

      &::-webkit-scrollbar {
         width: 0.5em;
      }

      &::-webkit-scrollbar-thumb {
         background-color: ${(props) => props.theme.scrollBar};
         border-radius: 10px;
      }

      label {
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 0.25rem;
      }

      .all-errors {
         display: block;
         color: ${(props) => props.theme.red};
         margin-top: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      height: 100vh;

      .intro {
         height: 15%;
         padding: 0 2rem;
      }

      form {
         height: 70%;
         padding: 2rem;
         margin-right: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      .intro {
         padding: 1rem 2rem 0;
      }
   }
`;

export const TwoColumns = styled.div`
   display: grid;
   align-items: center;
   column-gap: 1.5rem;
   grid-template-columns: repeat(2, 1fr);
`;

export const ThreeColumns = styled.div`
   display: grid;
   align-items: center;
   column-gap: 1.5rem;
   grid-template-columns: repeat(2, 1fr);

   div:last-of-type {
      grid-column: 1 /3;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(3, 1fr);

      div:last-of-type {
         grid-column: unset;
      }
   }
`;
