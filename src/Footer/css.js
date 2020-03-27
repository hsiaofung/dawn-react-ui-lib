import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  padding: 15px;
`;

export const Div = styled.div`
  display: flex;
  color: white;
  padding: 15px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-around;
  div {
    top: 0;
  }
  ul {
    list-style: none;
    li {
      color: white;
    }
  }
  p {
    font-size: 1em;
  }
  @media screen and (max-width: 769px) {
    flex-direction: column;
    p {
      font-size: 1.5em;
    }
    ul {
      list-style: none;
    }
  }
`;
export const CopyRight = styled.div`
  p {
    color: white;
    text-align: center;
  }
  @media screen and (max-width: 769px) {
    p {
      font-size: 1em;
      color: white;
      text-align: left;
      padding:30px
    }
  }
`;
