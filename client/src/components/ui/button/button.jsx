import PropTypes from 'prop-types';

const Button = (props) => {
  const { type, className = '', children } = props;
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Button;
