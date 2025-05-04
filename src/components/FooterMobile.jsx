import { useState } from "react";
import styled from "styled-components";
import share from "../assets/icon-share.svg";
import avatar from "../assets/avatar-michelle.jpg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import shareWhite from "../assets/icon-share-white.png";

const FooterMobile = () => {
  const [isFooterDark, setIsFooterDark] = useState(false);
  const openFooterDark = () => {
    setIsFooterDark(true);
  };
  const closeFooterDark = () => {
    setIsFooterDark(false);
  };

  if (isFooterDark === true) {
    return (
      <Wrapper>
        <div className='footer-mobile-dark'>
          <div className='footer-mobile-dark__title-and-icon'>
            <p>share</p>
            <div className='footer-mobile-dark__icons-container'>
              <img src={facebook} alt='facebook icon' />
              <img src={twitter} alt='twitter icon' />
              <img src={pinterest} alt='pinterest icon' />
            </div>
          </div>
          <div className='arrow-dark' onClick={closeFooterDark}>
            <img src={shareWhite} alt='arrow' />
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='footer-mobile'>
        <figcaption className='footer-mobile__profile'>
          <img src={avatar} alt='michelle' />
          <div className='footer-mobile__name-and-date'>
            <p className='footer-mobile__name-and-date--name'>
              Michelle Appleton
            </p>
            <p className='footer-mobile__name-and-date--date'>28 June 2020</p>
          </div>
        </figcaption>
        <div className='footer-mobile__arrow-light' onClick={openFooterDark}>
          <img src={share} alt='arrow' />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* FOOTER MOBILE */
  .footer-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-mobile__profile {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
  .footer-mobile__name-and-date {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    font-size: var(--small-text);
    line-height: var(--line-height-140);
  }
  .footer-mobile__name-and-date--name {
    color: var(--color-grey-900);
    font-weight: var(--font-weight-bold);
  }
  .footer-mobile__name-and-date--date {
    color: var(--color-grey-400);
    font-weight: var(--font-weight-normal);
  }
  .footer-mobile__arrow-light {
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

  /* FOOTER MOBILE DARK */
  .footer-mobile-dark {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-900);
    padding: 1.6rem 3.2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .footer-mobile-dark__title-and-icon {
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
  .footer-mobile-dark__icons-container {
    display: flex;
    align-content: space-between;
    gap: 1.6rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }

  .arrow-dark {
    background-color: var(--color-grey-500);
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
      color: white;
    }
  }

  @media (min-width: 765px) {
    .footer-mobile {
      display: none;
    }
  }
`;
export default FooterMobile;
