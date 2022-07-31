import { Suspense, lazy } from 'react';
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
   const { darkMode } = useSelector((state: RootState) => state.global);
   const location = useLocation();

   return (
      <ThemeProvider theme={darkMode ? myTheme.darkTheme : myTheme.lightTheme}>
         <GlobalStyle />
         <AnimatePresence initial={false} exitBeforeEnter>
            <Suspense fallback={<Loading />}>
               <Layout>
                  <Routes location={location} key={location.pathname}>
                     <Route path='/' element={<Home />} />
                     <Route path='/invoice/:id' element={<Invoice />} />
                     <Route path='*' element={<NotFound />} />
                  </Routes>
               </Layout>
            </Suspense>
         </AnimatePresence>
      </ThemeProvider>
   );
}

export default App;
