
import styled from 'styled-components';

const BookStyles = styled.div`
  padding: 1.5rem;
  background: var(--tertiary-color);
  border-radius: 3px;
  min-height: 150px;
  overflow-wrap: anywhere;
  border: 3px solid var(--primary-color);
  line-height: 1.6;

  .book-source {
    margin-top: 1rem;
  }
`;

export default BookStyles;
