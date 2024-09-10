import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '../../ui';
import { ProductDto, productSchema } from './types-schema';

export const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductDto>({
    resolver: zodResolver(productSchema),
  });

  // webpack: process.env.NAME;
  const AIRTABLE_API_URL = import.meta.env.VITE_API_BASE_URL;
  const AIRTABLE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

  const handleProductFormSubmit: SubmitHandler<ProductDto> = async (data) => {
    try {
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
      }

      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Product Information</h2>
      <form onSubmit={handleSubmit(handleProductFormSubmit)}>
        <Input
          {...register('name')}
          label="Name"
          type="text"
          error={errors.name}
        />

        <Input
          {...register('description')}
          label="Description"
          type="text"
          error={errors.description}
        />

        <Input
          {...register('price', { valueAsNumber: true })}
          label="Price"
          type="number"
          step="0.01"
          defaultValue="0"
          error={errors.price}
        />

        <Input
          {...register('dimensions', { valueAsNumber: true })}
          label="Dimensions"
          type="number"
          step="0.01"
          defaultValue="0"
          error={errors.dimensions}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
