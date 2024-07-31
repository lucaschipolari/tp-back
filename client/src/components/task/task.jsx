import PropTypes from 'prop-types';
import Button from '../ui/button/button';

const Task = (props) => {
  const { task, onDelete } = props;
  console.log(task);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title text-bold">{task.title}</h4>
        <p>Descripción: {task.description}</p>
        <p>Contenido: {task.content}</p>
        <div className="d-flex justify-content-end my-2">
          <Button className="btn btn-danger" onClick={() => onDelete(task.id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
Task.protoType = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    content: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
};
export default Task;
