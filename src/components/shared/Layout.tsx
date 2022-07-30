import styled from 'styled-components';
import { breakpoints } from '../../styles/globalStyles';
import Navbar from './Navbar';
import { LayoutProps } from '../../types';
import InvoiceModal from './InvoiceModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Layout = ({ children }: LayoutProps) => {
   const { invoiceModal } = useSelector((state: RootState) => state.global);

   return (
      <LayoutRoot>
         <Navbar />
         <main className={invoiceModal ? 'active' : ''}>
            <InvoiceModal />
            {children}
         </main>
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
