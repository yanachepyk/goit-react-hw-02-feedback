import PropTypes from 'prop-types';
import { Container } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
