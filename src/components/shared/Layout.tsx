import styled from 'styled-components';
import { breakpoints } from '../../styles/globalStyles';
import Navbar from './Navbar';
import { LayoutProps } from '../../types';

const Layout = ({ children }: LayoutProps) => {
   return (
      <LayoutRoot>
         <Navbar />
         <main>{children}</main>
      </LayoutRoot>
   );
};

export default Layout;

const LayoutRoot = styled.div`
   @media screen and (min-width: ${breakpoints.desktop}) {
      display: grid;
      grid-template-columns: auto 1fr;
   }
`;
