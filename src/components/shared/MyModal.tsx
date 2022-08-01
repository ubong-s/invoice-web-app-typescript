import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { closeMyModal } from '../../features/global/globalSlice';
import { breakpoints, misc } from '../../styles/globalStyles';

const MyModal = () => {
   const dispatch = useAppDispatch();
   const { myModal } = useSelector((state: RootState) => state.global);

   return (
      <MyModalRoot className={myModal ? 'active' : ''}>
         <div
            className='overlay'
            onClick={() => dispatch(closeMyModal())}
         ></div>
         <div className='content'>
            <h2>Ubong Sylvester</h2>
            <a
               href='https://github.com/ubong-s/invoice-web-app-typescript'
               target='_blank'
               rel='noreferrer noopener'
            >
               Project Repo
            </a>
            <a
               href='https://devubong.com'
               target='_blank'
               rel='noreferrer noopener'
            >
               devubong.com
            </a>
         </div>
      </MyModalRoot>
   );
};

export default MyModal;

const MyModalRoot = styled.div`
   position: fixed;
   left: 0;
   top: 80px;
   height: calc(100vh - 80px);
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   transform: scale(0);
   transform-origin: top right;
   opacity: 0;
   transition: ${misc.transition.ease};
   z-index: 100;

   .overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.body};
      opacity: 0.9;
   }

   .content {
      position: relative;
      width: 90%;
      max-width: 500px;
      background-color: ${(props) => props.theme.cardBody};
      border-radius: 10px;
      padding: 2.5rem 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      a {
         font-size: 1.15rem;
         color: ${(props) => props.theme.white};
         background-color: ${(props) => props.theme.accent};
         padding: 0.5rem;
         border-radius: 5px;
         transition: ${misc.transition.ease};

         &:hover {
            background-color: ${(props) => props.theme.red};
         }
      }
   }

   &.active {
      transform: scale(1);
      opacity: 1;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      left: 90px;
      top: 0;
      height: 100vh;
      transform-origin: left bottom;

      .content {
         padding: 3rem;

         h2 {
            font-size: 28px;
         }
      }
   }
`;
