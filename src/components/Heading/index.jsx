import PropTypes from 'prop-types';
import classes from './Heading.module.scss';

function Heading(props) {
  const { variant = 'h1', children } = props;
  const Component = variant;

  return <Component className={classes.Heading}>{children}</Component>;
}

Heading.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
