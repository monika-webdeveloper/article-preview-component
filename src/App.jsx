import "./App.css";
import styled from "styled-components";
import LeftSide from "./components/LeftSide";
import Content from "./components/Content";

function App() {
  return (
    <Wrapper className='card' role='main'>
      <LeftSide />
      <Content />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 32.7rem;
  height: 53.8rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  border-radius: var(--radius);
  box-shadow: var(--box-shadow);
  position: relative;
  /* tablet */
  @media (min-width: 765px) {
    width: 60.8rem;
    height: 34.6rem;
    display: grid;
    grid-template-columns: 22.9rem 1fr;
  }
  /* desktop */
  @media (min-width: 1300px) {
    width: 73rem;
    height: 28rem;
    grid-template-columns: 28.5rem 1fr;
  }
`;

export default App;
