import styled from 'styled-components';

import Header from './Header';
import Image from './Image';
import Text from './Text';
import Title from './Title';

const Card = styled.div`
  background: #ffffff;
  border-radius: 2px;
  margin: 5px 5px 10px;
  padding: 5px;
  position: relative;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

Card.Header = Header;
Card.Image = Image;
Card.Text = Text;
Card.Title = Title;

export default Card;