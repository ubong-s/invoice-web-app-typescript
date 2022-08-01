import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slide } from '../animations';
import { Seo } from '../components';
import { breakpoints } from '../styles/globalStyles';

const NotFound = () => {
   return (
      <NotFoundWrap
         variants={slide}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title='404' />
         <div className='container'>
            <h1>Oops..., Page cannot be found</h1>

            <Link to='/'>
               <button className='paid'>Back to Home</button>
            </Link>
         </div>
      </NotFoundWrap>
   );
};

export default NotFound;

const NotFoundWrap = styled(motion.section)`
   display: grid;
   align-items: center;
   justify-items: center;
   height: 100vh;
   text-align: center;

   h1 {
      margin: 1.5rem 0;
   }

   button {
      a {
         color: white;
         font-size: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      h1 {
         margin-bottom: 2rem;
         font-size: 2.5rem;
      }

      button {
         a {
            font-size: 1.5rem;
         }
      }
   }
`;
