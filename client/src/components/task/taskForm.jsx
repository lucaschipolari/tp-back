import Button from '../ui/button/button';
import Input from '../ui/input/input';
import useForm from 'react-hook-form';

const TaskForm = () => {
  const {
    handleSubmit: onSubmitRHF,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: postTask } = useMutation({
    mutationFn: postTask,
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => reset(),
  });

  const handleSubmit = () => {};

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)} className="">
      <Input
        type="text"
        name="title"
        label="title"
        register={register}
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
        name="content"
        label="content"
        register={register}
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
      <Button type="submit" className="btn btn-danger" />
    </form>
  );
};

export default TaskForm;
