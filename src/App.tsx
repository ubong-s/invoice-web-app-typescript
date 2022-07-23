import { Suspense, lazy, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/my-theme';
import { GlobalStyle } from './styles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./pages'));
const Invoice = lazy(() => import('./pages/invoice'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
   const [darkMode, setDarkMode] = useState(false);
   return (
      <ThemeProvider theme={darkMode ? myTheme.darkTheme : myTheme.lightTheme}>
         <GlobalStyle />
         <Suspense fallback={`Loading...`}>
            <Router>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/invoice/:id' element={<Invoice />} />
                  <Route path='*' element={<NotFound />} />
               </Routes>
            </Router>
         </Suspense>
      </ThemeProvider>
   );
}

export default App;
