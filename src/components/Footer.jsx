import React from "react";
import styled from "styled-components";
import { Button } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { IoPersonCircle } from "react-icons/io5";

const Footer = () => {
  return (
    <Wrapper id="footer">
      {/* Main Footer Section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 className="footer-heading">Codex Courses</h3>
            <p>
            Embark on a transformative journey of mastery with Codex & unparalleled online excellence.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3 className="footer-heading">
              Subscribe to get important updates
            </h3>
            <form action="https://formspree.io/f/mnqeanzy" method="POST">
              <input type="email" name="email" placeholder="E-mail" />
              <Button
                id="btn"
                variant="gradient"
                size="sm"
                className="p-4 mx-4 text-black text-base bg-[#FFFFFF] transform transition duration-500 hover:scale-110"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="footer-social">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://kshitijsinghbisht.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoPersonCircle className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/stoickshitij"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Hailex798"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3 className="footer-heading">Call Us</h3>
            <a href="tel:8090284072">
              <h3>+91 8090284072</h3>
            </a>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr color="black" />
          <div className="container grid grid-two-column ">
            <p className="footer-heading">
              @{new Date().getFullYear()} Codex. All Rights Reserved
            </p>
            <div>
              <p><a href="https://www.edx.org/edx-privacy-policy">PRIVACY POLICY</a></p>
              <p><a href="https://www.edx.org/edx-terms-service">TERMS & CONDITIONS</a></p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Work Sans", sans-serif;
  }

  h1 {
    color: rgb(24, 24, 29);
    font-weight: 900;
  }

  h2 {
    color: rgb(24, 24, 29);
    font-weight: 300;
    white-space: normal;
  }

  h3 {
    font-weight: 400;
    font-size: 1.3rem;
  }

  p,
  button {
    color: white;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  .container {
    max-width: 125rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
  .grid {
    display: grid;
    gap: 2rem;
  }

  .grid-four-column {
    grid-template-columns: 1fr 0.8fr 0.7fr 0.5fr;
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  form > #btn {
    max-width: 8rem;
    background-color: #00ffff;
    color: black;
    font-weight: 500;
    padding: 0.8rem 1rem;
    margin: 1rem 0;
    text-transform: none;
    font-size: 1rem;
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #161821;
    background-image: radial-gradient(
        at 47% 33%,
        hsl(150, 0%, 0%) 0,
        transparent 59%
      ),
      radial-gradient(at 82% 65%, hsl(240, 0%, 0%) 0, transparent 55%);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 4rem 0 2.5rem 0;
    background-color: #203150;
    border-top: 1px solid rgba(255, 255, 255, 0.125);
    h3 {
      color: #ffffff;
      margin-bottom: 2.4rem;
    }
    p {
      color: white;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #000000;
        background-color: black;
        transition: all 5 ease-in-out;

        .icons {
          color: white;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
      div: hover{
        transform: scale(1.1);
      }
    }
  }
  .footer-contact {
    a > h3 {
      color: white;
    }
  }
  .footer-heading {
    font-weight: bold;
    color: cyan;
  }

  .footer-bottom--section {
    padding-top: 9rem;
    color: white;

    hr {
      margin-bottom: 2rem;
      color: #ffffff;
      height: 0.1px;
    }
    p {
      color: white;
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
  @media (max-width: 998px) {
    .container {
      max-width: 130rem;
      padding: 0 1.2rem;
    }
  }

  @media (max-width: 830px) {
    html {
      font-size: 50%;
    }

    .grid {
      gap: 3.2rem;
    }
    .grid-two-column,
    .grid-three-column,
    .grid-four-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Footer;
