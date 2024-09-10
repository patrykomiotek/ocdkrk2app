import { api } from "../../config/api";
import { CreateProductDto } from "../../types/dtos/CreateProductDto";

// export const fetchProducts = async () => {
//   return await api.get("/products");
// }

export type ProductDto = {
  id: string;
  fields: {
    title: string;
    description: string;
    price: number;
    created_at: Date;
  };
};

type ProductsResponse = {
  records: ProductDto[];
};

export const fetchProducts = async () => {
  try {
    const response = await api.get<ProductsResponse>("/products");
    return response.data.records;
  } catch {
    return [];
  }
};

export const fetchProduct = async (id: ProductDto["id"] | undefined) => {
  if (!id) {
    return {} as ProductDto;
  }

  try {
    const response = await api.get<ProductDto>(`/products/${id}`);
    return response.data;
  } catch {
    return {} as ProductDto;
  }
};

export const createProduct = async (data: CreateProductDto) => {
  return api.post<ProductsResponse>("/products", {
    records: [{ fields: { ...data } }],
  });
};
