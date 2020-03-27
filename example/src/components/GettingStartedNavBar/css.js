import styled from "styled-components";

export const Div = styled.div`
  max-width: 220px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #ececec;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: calc(100% + 20px);
  height: 100%;
  overflow-y: scroll;
  padding: 15px;
  padding-right: 35px;
  padding-bottom: 35px;
`;
