import styled from "styled-components";
import drawersImg from "../assets/drawers.jpg";

const LeftSide = () => {
  return (
    <Wrapper>
      <figure className='bitmap-container' role='content image'>
        <img src={drawersImg} alt='drawers picture' />
      </figure>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  width: 32.7rem;
  height: 20rem;
  img {
    display: block;
    height: 20rem;
    width: 100%;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    object-position: left;
  }
  /* tablet */
  @media (min-width: 765px) {
    width: 22.9rem;
    height: 34.6rem;
    img {
      width: 100%;
      height: 34.6rem;
      object-fit: cover;
      border-top-right-radius: 0;
      border-bottom-left-radius: var(--radius);
    }
  }
  /* desktop */
  @media (min-width: 1300px) {
    width: 28.5rem;
    height: 28rem;
    background-position: left;
    img {
      width: 100%;
      height: 28rem;
    }
  }
`;

export default LeftSide;
