import { ApiResponseProduct } from '@services/products';

type Props = {
  products: ApiResponseProduct[];
};

const ProductTableRow = ({ product }: { product: ApiResponseProduct }) => (
  <tr className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="py-2 px-4">
      <button className="text-blue-500 hover:underline focus:outline-none">
        {product.fields.name}
      </button>
    </td>
    <td className="py-2 px-4">${product.fields.price}</td>
    <td className="py-2 px-4">{product.fields.description}</td>
    <td className="py-2 px-4">{product.fields.dimensions}</td>
  </tr>
);

export const ProductsList = ({ products }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Dimensions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductTableRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
