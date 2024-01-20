import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`
export const TabButton = styled.button`
  border: none;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
  background: none;
`
export const TabButtonText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
  border: 1px solid #db1c48;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 18px;
  background-color: ${props => props.bgColor};
`
