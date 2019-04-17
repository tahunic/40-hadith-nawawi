import styled from 'styled-components';

const CountryFlag = styled.img`
  width: 3em;
  cursor: pointer;
  opacity: ${props => props.opacity};
`;

export default CountryFlag;
