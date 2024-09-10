import { ProductDto } from '../types/types-schema';

// webpack: process.env.NAME;
const AIRTABLE_API_URL = import.meta.env.VITE_API_BASE_URL;
const AIRTABLE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface ProductFields {
  fields: {
    price: number;
    description: string;
    dimensions: number;
    name: string;
    created_at?: string;
    updated_at?: string;
  };
}

interface ApiResponseProduct {
  id: string;
  createdTime: string;
  fields: {
    price: number;
    description: string;
    dimensions: number;
    name: string;
    created_at?: string;
    updated_at?: string;
  };
}

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// const myResponse: Readonly<ApiResponseProduct> = {
const myResponse: DeepReadonly<ApiResponseProduct> = {
  // const myResponse: ApiResponseProduct = {
  id: 'abc',
  createdTime: '34324453',
  fields: {
    description: 'a',
    dimensions: 1,
    price: 2,
    name: 'b',
  },
};
// myResponse.id = 'sth';
// myResponse.createdTime = 'sth';
// myResponse.fields.description = 'sth';

interface ApiResponseProducts {
  records: ApiResponseProduct[];
}

interface ApiResponse<T> {
  records: T[];
}

declare const response: ApiResponse<ProductFields>;
// const response: ApiResponse<ProductFields> = {
//   records: [
//     {
//       fields: {
//         name: 'one',
//         description: 'two',
//         price: 123,
//         dimensions: 32,
//       },
//     },
//   ],
// };

export const saveProduct = async (data: ProductDto) => {
  const response = await fetch(`${AIRTABLE_API_URL}/products`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [
        {
          fields: data,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit the form');
    // throw new Mieso('Failed to submit the form');
  }

  // return response.json() as unknown as ApiResponse<ProductFields>; TAK NIE!!!
  return response.json() as Promise<ApiResponse<ProductFields>>;
};
