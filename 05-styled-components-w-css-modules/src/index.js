/**
 * For a blogpost that explains this solution, please see
 *
 * https://medium.com/@baphemot/using-styled-components-alongside-css-modules-4d83b378bc17
 */

import React from 'react';
import { render } from 'react-dom';
import styled from "styled-components";
import Button from "./Button/Button";

const DangerButton = styled(Button)`
	background: red;
	font-weight: bolder;
	cursor: not-allowed;

	span.icon {
		color: red;
		background: black;
	}
`;

const ButtonWithOtherIcon = styled(Button)`
	span.icon {
		background: black;
		color: white;
	}
`


const App = () => (
  <div>
    <Button>Click for some info</Button>
    {" "}
    <ButtonWithOtherIcon>Only different icon</ButtonWithOtherIcon>    
    {" "}
    <DangerButton>Not allowed!</DangerButton>

  </div>
);

render(<App />, document.getElementById('root'));
