import PropTypes from 'prop-types';

const Button = (props) => {
  const { type, className = '' } = props;
  return (
    <button type={type} className={className}>
      Sign Up
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};
export default Button;
