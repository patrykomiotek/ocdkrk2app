import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductsListPage } from './pages/ProductsListPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CreateProductPage } from './pages/CreateProductPage';

type Route = Record<
  string,
  {
    path: string;
    title: string;
    dynamicPath?: (id: string) => string;
  }
>;

export const Route: Route = {
  HOME: {
    path: '/',
    title: 'Home',
  },
  PRODUCTS_LIST: {
    path: '/products',
    title: 'Products',
  },
  PRODUCTS_DETAILS: {
    path: '/products/:id',
    title: 'Products details',
    // dynamicPath: (id: ProductDto["id"]) => `/products/${id}`,
  },
  CREATE_PRODUCT: {
    path: '/products/create',
    title: 'Create product',
  },
} as const;

export const router = createBrowserRouter([
  {
    path: Route.HOME.path,
    element: <Layout />,
    children: [
      {
        path: Route.HOME.path,
        element: <HomePage />,
      },
      {
        path: Route.PRODUCTS_LIST.path,
        element: <ProductsListPage />,
      },
      {
        path: Route.PRODUCTS_DETAILS.path,
        element: <ProductDetailsPage />,
      },
      {
        path: Route.CREATE_PRODUCT.path,
        element: <CreateProductPage />,
      },
    ],
  },
]);
