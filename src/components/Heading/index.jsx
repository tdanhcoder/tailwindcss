import PropTypes from 'prop-types';
import './Heading.css';

function Heading(props) {
  const { variant = 'h1', children } = props;
  const Component = variant;

  return <Component className='Heading'>{children}</Component>;
}

Heading.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
