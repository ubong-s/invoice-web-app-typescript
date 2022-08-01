import styled from 'styled-components';
import { breakpoints } from '../../styles/globalStyles';
import Navbar from './Navbar';
import { LayoutProps } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import MyModal from './MyModal';

const Layout = ({ children }: LayoutProps) => {
   const { invoiceModal, deleteModal } = useSelector(
      (state: RootState) => state.global
   );

   return (
      <LayoutRoot>
         <Navbar />
         <main className={invoiceModal || deleteModal ? 'active' : ''}>
            {children}
         </main>
         <MyModal />
      </LayoutRoot>
   );
};

export default Layout;

const LayoutRoot = styled.div`
   main {
      position: relative;

      &.active {
         height: calc(100vh - 80px);
         overflow: clip;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: grid;
      grid-template-columns: auto 1fr;

      main {
         &.active {
            height: 100vh;
         }
      }
   }
`;
