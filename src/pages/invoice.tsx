import { useParams } from 'react-router-dom';

const Invoice = () => {
   const { id } = useParams();
   return <div>Invoice</div>;
};

export default Invoice;
