import PropTypes from 'prop-types';
import Button from '../ui/button/button';
import Task from './task';

const TaskList = (props) => {
  const { tasks, onDelete } = props;

  return (
    <div className="container">
      <div className="row">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              className="col-4 border border-dark"
            ></Task>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
