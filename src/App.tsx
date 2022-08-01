import { Suspense, lazy, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/my-theme';
import { GlobalStyle } from './styles/globalStyles';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { Layout, Loading } from './components';
import { AnimatePresence } from 'framer-motion';
const Home = lazy(() => import('./pages'));
const Invoice = lazy(() => import('./pages/invoice'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
   const {
      global: { darkMode },
      invoice: { data },
   } = useSelector((state: RootState) => state);
   const location = useLocation();

   useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(darkMode));
   }, [darkMode]);

   useEffect(() => {
      localStorage.setItem('invoices', JSON.stringify(data));
   }, [data]);

   return (
      <ThemeProvider theme={darkMode ? myTheme.darkTheme : myTheme.lightTheme}>
         <GlobalStyle />
         <Suspense fallback={<Loading />}>
            <Layout>
               <AnimatePresence exitBeforeEnter>
                  <Routes location={location} key={location.pathname}>
                     <Route path='/' element={<Home />} />
                     <Route path='/invoice/:id' element={<Invoice />} />
                     <Route path='*' element={<NotFound />} />
                  </Routes>
               </AnimatePresence>
            </Layout>
         </Suspense>
      </ThemeProvider>
   );
}

export default App;
