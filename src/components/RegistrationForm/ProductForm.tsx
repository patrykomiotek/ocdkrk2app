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

  const AIRTABLE_API_TOKEN =
    'pat7B5cvhvFKLqRT5.8e46a5eb968dac90f793dfd22dccd55e61676d5731242661e589ccac3f062b8d';

  const handleProductFormSubmit: SubmitHandler<ProductDto> = async (data) => {
    try {
      const response = await fetch(
        'https://api.airtable.com/v0/appZn629wc9P5ZP7M/products',
        {
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
        },
      );

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
