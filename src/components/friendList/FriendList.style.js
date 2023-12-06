import styled from "styled-components";

export const FriendsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FriendContainer = styled.li`
  background-color: white;

  display: flex;
  align-items:center;
  gap: 10px;

  width: 300px;
  padding: 10px;
  box-shadow: 1px 2px 3px #B2B2B2;
`;

export const FriendStatus = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.$status? 'green' : 'red'};
`

