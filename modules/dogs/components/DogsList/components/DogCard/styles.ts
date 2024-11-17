import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;
