import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const Panel = styled.div`
  padding: 20px 20px 40px 20px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 10px 20px 0px;
  text-align: center;
  min-width: 300px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: stretch;
`;

export const StoryInput = styled.input`
  background-color: #2a2e35;
  padding: 15px 20px;
  border: none;
  color: white;
  font-weight: 800;
  font-size: 18px;
`;

export const Button = styled.button`
  font-weight: 800;
  border: none;
  color: white;
  background-color: #3e73ce;
  font-size: 22px;
  padding: 10px;
  border-radius: 4px;
`;