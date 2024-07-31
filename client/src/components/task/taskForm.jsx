import Button from '../ui/button/button';
import Input from '../ui/input/input';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTaskFn } from '../../api/apiTask';

const TaskForm = () => {
  const {
    handleSubmit: onSubmitRHF,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const queryClient = useQueryClient();

  const { mutate: postTask } = useMutation({
    mutationFn: postTaskFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
    onError: () => {},
    onSettled: () => reset(),
  });

  const handleSubmit = (data) => {
    postTask(data);
  };

  return (
    <div className="container my-2">
      <form onSubmit={onSubmitRHF(handleSubmit)} className="">
        <h2>Formulario de Tareas</h2>
        <Input
          type="text"
          name="title"
          label="title"
          register={register}
          className="my-2"
          error={errors.title}
          options={{
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
            maxLength: {
              value: 20,
              message: 'Title must be less than 20 characters long',
            },
          }}
        />
        <Input
          type="text"
          name="description"
          label="description"
          register={register}
          className="my-2"
          error={errors.description}
          options={{
            required: 'Description is required',
            minLength: {
              value: 10,
              message: 'Description must be at least 10 characters long',
            },
            maxLength: {
              value: 500,
              message: 'Description must be less than 500 characters long',
            },
          }}
        />
        <Input
          type="text"
          name="content"
          label="content"
          register={register}
          className="my-2"
          error={errors.content}
          options={{
            required: 'Name is required',
            minLength: {
              value: 10,
              message: 'Name must be at least 10 characters long',
            },
            maxLength: {
              value: 120,
              message: 'Name must be less than 120 characters long',
            },
          }}
        />
        <div className="my-2 d-flex flex-end">
          <Button type="submit" className="btn btn-primary">
            Agregar Tarea
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
