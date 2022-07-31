import { Helmet } from 'react-helmet';

interface SeoProps {
   title: string;
   description?: string;
}

const Seo = ({ title, description }: SeoProps) => {
   return (
      <Helmet>
         <title>{title ? `${title} | Invoice App` : 'Invoice App'} </title>
         <meta
            name='description'
            content={description || 'Frontend Mentor - Invoice App'}
         />
      </Helmet>
   );
};

export default Seo;
