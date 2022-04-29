import styled from "styled-components";
import backjeny from "../container/backjeny.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: black;

  h1,
  span {
    color: white;
    text-align: center;
    padding: 15px;
  }
`;

const GreenContainer = styled(Container)`
  background-color: green;
  height: 50em;
  width: 65%;
  display: flex;
  font-size: 11px;
`;

const RedContainer = styled(Container)`
  background-color: red;
`;
export { Container, GreenContainer, RedContainer };
