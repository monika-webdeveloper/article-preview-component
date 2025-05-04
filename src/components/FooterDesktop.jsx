import styled from "styled-components";
import avatar from "../assets/avatar-michelle.jpg";
import share from "../assets/icon-share.svg";
import Modal from "./Modal";
import { useState } from "react";

const FooterDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className='footer-tablet' role='footer'>
        <figcaption className='footer-tablet__profile'>
          <img src={avatar} alt='' />
          <div className='footer-tablet__name-and-date'>
            <p className='footer-tablet__name-and-date--name'>
              Michelle Appleton
            </p>
            <p className='footer-tablet__name-and-date--date'>28 June 2020</p>
          </div>
        </figcaption>
        <div className='footer-tablet__arrow-light' onClick={toggleModal}>
          <img src={share} alt='arrow' />
        </div>
      </div>
      {isOpen ? <Modal /> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .footer-tablet {
    display: none;
    justify-content: space-between;
    align-items: center;
  }
  .footer-tablet__profile {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
  .footer-tablet__name-and-date {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    font-size: var(--small-text);
    line-height: var(--line-height-140);
  }
  .footer-tablet__name-and-date--name {
    color: var(--color-grey-900);
    font-weight: var(--font-weight-bold);
  }
  .footer-tablet__name-and-date--date {
    color: var(--color-grey-400);
    font-weight: var(--font-weight-normal);
  }
  .footer-tablet__arrow-light {
    background-color: var(--color-grey-200);
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 1.5rem;
      height: 1.3rem;
    }
  }

  @media (min-width: 765px) {
    .footer-tablet {
      display: flex;
    }
  }
`;
export default FooterDesktop;
