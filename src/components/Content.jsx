import styled from "styled-components";
// components
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

const Content = () => {
  return (
    <Wrapper>
      <div className='text-block' role='content info'>
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>
      <FooterMobile />
      <FooterDesktop />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* mobile */
  display: flex;
  flex-direction: column;
  padding: 0 3.2rem;
  gap: 4.8rem;
  .text-block {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    h1 {
      color: var(--color-grey-900);
      font-size: var(--large-text);
      line-height: var(--line-height-130);
      font-weight: var(--font-weight-bold);
    }
    p {
      color: var(--color-grey-500);
      font-size: var(--small-text);
      line-height: var(--line-height-140);
      letter-spacing: 0.12%;
    }
  }

  /* tablet */

  @media (min-width: 765px) {
    padding: 4.1rem 3.2rem 4.1rem 0rem;
    justify-content: center;
    gap: 1.2rem;
    .text-block {
      padding-right: 2rem;
    }
  }

  /* desktop */
  @media (min-width: 1300px) {
    padding: 3rem 3.2rem 3rem 0rem;
    justify-content: center;
    gap: 1.2rem;
    .text-block {
      padding-right: 2rem;
    }
  }
`;
export default Content;
