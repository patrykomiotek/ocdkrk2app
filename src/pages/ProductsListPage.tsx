import { ProductsList } from '@components/ProductsList/ProductsList';
import useApi from '@hooks/useApi';
import { ApiResponseProduct, ApiResponseProducts, getProducts } from '@services/products';
import { Header } from '@ui';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ZodError } from 'zod';

export const ProductsListPage = () => {
  const [data, setData] = useState<ApiResponseProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<string | null>(null);

  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getProducts();
        setData(response.data.records);
      } catch (error) {
        // if (error instanceof AxiosError) {

        // }
        // if (error instanceof ZodError) {

        // }
        setError('Oh no!');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (isError) {
    return <div className="text-center text-red-500">Error: {isError}</div>;
  }

  return (
    <div>
      <Header>Products list</Header>
      <ProductsList products={data} />
    </div>
  );
};
