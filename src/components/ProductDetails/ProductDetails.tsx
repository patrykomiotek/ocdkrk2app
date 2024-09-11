import { ApiResponseProduct } from '@services/products';

export const ProductDetails = (props: ApiResponseProduct) => {
  return (
    <div>
      <h2>{props.fields.name}</h2>
      <p>{props.fields.description}</p>
    </div>
  );
};
