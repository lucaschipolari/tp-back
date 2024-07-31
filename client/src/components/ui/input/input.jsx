import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    name,
    type,
    placeholder = 'insert a text',
    error,
    className = '',
    options,
    register,
    label,
  } = props;
  return (
    <fieldset className={`form-floating ${className}`}>
      <input
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={`${name}-input`}
        placeholder={placeholder}
        type={type}
        {...register(name, options)}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
      <div className="invalid-feedback">
        <span className="badge text-bg-danger">{error?.message}</span>
      </div>
    </fieldset>
  );
};
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  className: PropTypes.string,
  options: PropTypes.object,
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
