import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTasks, deleteTask } from '../../api/apiTask';
import TaskList from './taskList';

const TaskManager = () => {
  const queryClient = useQueryClient();

  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  const mutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      // Invalida y refetch tasks
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching tasks</div>;

  return <TaskList tasks={tasks.data} onDelete={handleDelete} />;
};

export default TaskManager;
