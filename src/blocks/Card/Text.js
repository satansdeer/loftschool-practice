import styled from 'styled-components';

const Text = styled.p`
  color: #263238;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: #0097a7;
    text-decoration: underline;
  }
`;

export default Text;