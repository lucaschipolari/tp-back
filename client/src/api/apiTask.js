const BACK_URL = import.meta.env.VITE_BACKEND_URL;
export const postTaskFn = async (data) => {
  const res = await fetch(`${BACK_URL}/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(`${resData.message}`);
  }
};

export const getTasks = async () => {
  const tasks = await fetch(`${BACK_URL}/task`);
  const data = await tasks.json();
  if (!tasks.ok) {
    throw new Error(`Failed to fetch tasks: ${data.message}`);
  }

  return data;
};
export const deleteTask = async (idTask) => {
  const task = await fetch(`${BACK_URL}/task/${idTask}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isActive: false }),
  });
  if (!task.ok) {
    throw new Error(`Failed to delete task: ${task.message}`);
  }
};
