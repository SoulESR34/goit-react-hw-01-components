import styled from "styled-components";

export const ProfileContainer = styled.section`
  background-color: #fff;
  max-width: 300px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px #C3C9CF;
`;

export const ProfileImage = styled.img`
  margin-top: 40px;
  width: 40%;
  height: 40%;
  background: grey;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
`;

export const ProfileInfo = styled.p`
  margin-top: 10px;
  color: #a5aeb8;
`;

export const ProfileStats = styled.ul`
  margin-top: 40px;
  background-color: #e7ecf2;
  display: flex;
  border-radius: 0 0 10px 10px;
`;

export const ProfileValuesContainer = styled.li`
  width: 100%;
  height: 70px;
  border: 1px solid #DBE3EC;
  border-radius: ${(props) => {
    if (props.$customRadius === "left") return "0 0 0 10px";
    if (props.$customRadius === "right") return "0 0 10px 0";
  }};
  display: flex;
  flex-direction: column;
  place-content:center;
`;
