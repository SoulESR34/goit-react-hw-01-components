import styled from "styled-components";

export const StatiticsWrapper = styled.section`
  width: 400px;
  background-color: white;
  text-align: center;
`;

export const TitleStatics = styled.h2`
  margin: 30px 0;
`;

export const DataContainer = styled.ul`
  display: flex;
`;

export const Data = styled.li`
  width: 100%;
  padding: 10px;

  background-color: ${(props) => {
    if (props.$variant === "docx") return "#50C4F3";
    if (props.$variant === "pdf") return "#A43CF3";
    if (props.$variant === "mp3") return "#E64C66";
    return "#20B8C5";
  }};
  color: white;

  display: flex;
  flex-direction: column;
`;
