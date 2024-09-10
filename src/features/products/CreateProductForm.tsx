import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input, Button } from "../../ui";

import {
  CreateProductDto,
  validationSchema,
} from "../../types/dtos/CreateProductDto";

type Props = {
  onSubmit: SubmitHandler<CreateProductDto>;
  data?: Partial<CreateProductDto>;
};

export const CreateProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <Input
        {...register("title")}
        label="Title"
        id="title"
        error={errors.title}
      />
      <Input
        {...register("description")}
        label="Description"
        id="description"
        error={errors.description}
      />
      <Input
        {...register("price", { valueAsNumber: true })}
        label="Price"
        id="price"
        type="number"
        error={errors.price}
      />

      <div>
        <Button type="submit" label="Submit" />
      </div>
    </form>
  );
};
