import { Link } from "react-router-dom";
import { fetchProducts, type ProductDto } from "./services";
// import { useApi } from "./useApi";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { add } from "../products/basketSlice";
import { Header, Text } from "../../ui";

export const ProductsList = () => {
  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useApi<ProductDto[]>(fetchProducts);
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery("products", fetchProducts, {
    onSuccess: (_data) => {
      // dispatch(setProducts(data))
    },
  });
  const dispatch = useDispatch();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error!</Text>;
  }

  return (
    <div>
      <ul>
        {products &&
          products.map((elem) => (
            <li key={elem.id} className="dark:text-slate-300">
              <Link to={`/products/${elem.id}`}>
                {elem.fields.title} {elem.fields.price}zł
              </Link>
              <span
                onClick={() => dispatch(add(elem))}
                className="ml-4 cursor-pointer"
              >
                Add
              </span>
            </li>
          ))}
      </ul>
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  );
};
