import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
   return (
      <LoadingWrap>
         <LoadingRipple>
            <div></div>
            <div></div>
         </LoadingRipple>
      </LoadingWrap>
   );
};

export default Loading;

const ldsRipple = keyframes`0% {
         top: 36px;
         left: 36px;
         width: 0;
         height: 0;
         opacity: 0;
      }
      4.9% {
         top: 36px;
         left: 36px;
         width: 0;
         height: 0;
         opacity: 0;
      }
      5% {
         top: 36px;
         left: 36px;
         width: 0;
         height: 0;
         opacity: 1;
      }
      100% {
         top: 0px;
         left: 0px;
         width: 72px;
         height: 72px;
         opacity: 0;
      }
   `;

const LoadingWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
`;

const LoadingRipple = styled.div`
   display: inline-block;
   position: relative;
   width: 80px;
   height: 80px;

   div {
      position: absolute;
      border: 4px solid ${(props) => props.theme.text};
      opacity: 1;
      border-radius: 50%;
      animation: ${ldsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

      &:nth-child(2) {
         animation-delay: -0.5s;
      }
   }
`;
