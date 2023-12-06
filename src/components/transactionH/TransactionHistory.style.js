import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;

  th,
  td {
    padding: 20px;
    border: 1px solid #ECECEC;
    border-top: 0;
    border-left: 0;
  }
`;

export const TableHeader = styled.thead`
  background-color: #01bcd5;
`;

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #fff;
  }

  tr:nth-child(even) {
    background-color: #ecf1f3;
  }
`;
