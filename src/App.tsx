import { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/my-theme';
import { GlobalStyle } from './styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { Layout, Loading } from './components';
const Home = lazy(() => import('./pages'));
const Invoice = lazy(() => import('./pages/invoice'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
   const { darkMode } = useSelector((state: RootState) => state.global);

   return (
      <ThemeProvider theme={darkMode ? myTheme.darkTheme : myTheme.lightTheme}>
         <GlobalStyle />
         <Suspense fallback={<Loading />}>
            <Router>
               <Layout>
                  <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/invoice/:id' element={<Invoice />} />
                     <Route path='*' element={<NotFound />} />
                  </Routes>
               </Layout>
            </Router>
         </Suspense>
      </ThemeProvider>
   );
}

export default App;
