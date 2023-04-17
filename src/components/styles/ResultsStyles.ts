
import styled from 'styled-components';

const ResultsStyles = styled.div`
  /* background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column; */
  .results {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    grid-gap: 40px 20px;
    margin-top: 2rem;
  }

  .search-again-btn {
    margin-top: 2rem;
  }
`;

export default ResultsStyles;
