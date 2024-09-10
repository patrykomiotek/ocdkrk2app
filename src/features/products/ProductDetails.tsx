import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { fetchProduct, type ProductDto } from "./services";
import { useApi } from "./useApi";

type Params = {
  id: string;
};

export const ProductDetails = () => {
  const { id } = useParams<Params>();
  const {
    data: product,
    isLoading,
    isError,
  } = useApi<ProductDto>(() => fetchProduct(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  if (!product) {
    return <p>404</p>;
  }

  return (
    <div>
      <h3>Products</h3>
      <p>Description: {product.fields.description}</p>
      <p>Price: {product.fields.price}</p>
      <p>
        Created at: {format(product.fields.created_at, "dd.MM.yy HH:mm:ss")}
      </p>
    </div>
  );
};
