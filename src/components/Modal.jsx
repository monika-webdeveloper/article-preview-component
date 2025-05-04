import styled from "styled-components";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";

const Modal = () => {
  return (
    <Wrapper>
      <div className='modal-tablet'>
        <div className='title-and-icon'>
          <p>share</p>
          <div className='icons-container'>
            <img src={facebook} alt='facebook icon' />
            <img src={twitter} alt='twitter icon' />
            <img src={pinterest} alt='pinterest icon' />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal-tablet {
    position: absolute;
    right: -6.9rem;
    bottom: 10.5rem;
    width: 24.8rem;
    height: 5.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-900);
    padding: 1.8rem 3.8rem;
    border-radius: var(--radius);
    box-shadow: var(--box-shadow);
  }

  .modal-tablet::after {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--color-grey-900);
    position: absolute;
    bottom: -0.6rem;
    left: 47%;
    transform: rotate(45deg);
    box-shadow: var(--box-shadow);
  }

  .title-and-icon {
    display: flex;
    gap: 2.4rem;
    p {
      font-size: var(--small-text);
      line-height: var(--line-height-140);
      color: var(--color-grey-400);
      text-transform: uppercase;
      letter-spacing: 25%;
    }
  }
  .icons-container {
    display: flex;
    align-content: space-between;
    gap: 1.6rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (min-width: 1300px) {
    .modal-tablet {
      bottom: 9.5rem;
      right: -5.5rem;
    }
  }
`;

export default Modal;
