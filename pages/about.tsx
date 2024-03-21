import Head from "next/head";
import styled, { keyframes } from "styled-components";
import img1 from "../public/sreekumar1.jpg";
import img2 from "../public/manibabu.jpg";
import Image from "next/image";
const animateBefore = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(100vh);
    }
`;
const animateAfter = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100vh);
    }
`;

const About = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
  margin-block: 3rem;
  min-height:30vw;

  body {
    // background: linear-gradient(
    //   15deg,
    //   rgb(var(--white-color)) 50%,
    //   rgb(var(--body-gradient)) 60%,
    
    
    //   rgb(var(--white-color))
    // );
    rgb(var(--white-color));
    color: rgb(var(--white-color));
    overflow-x: hidden;
    transition: all 0.15s ease;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: -20rem;
    left: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background: radial-gradient(
      rgba(255, 183, 3, 0.175),
      transparent,
      transparent
    );
    animation: ${animateBefore} 15s infinite;
    z-index: -1;

  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20rem;
    right: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background: radial-gradient(
      rgb(33, 158, 188, 0.175),
      transparent,
      transparent
    );
    animation: ${animateAfter} 15s infinite;
    z-index: -1;
  }
  
  & .card {
    backdrop-filter: blur(5rem) brightness(0.5);
    min-height: 10rem;
    display: grid;
     place-content: center;
    border-radius: 2rem;
    // background-color: rgb(128, 128, 128, 0.075);
    background-color: rgb(var(--white-color));
    padding: 4rem;
    gap: 1.5rem;
    @media screen and (max-width: 50rem) {
      padding: 1.5rem;
      border-radius: 1rem;
      gap: 1rem;
     
    }
    & h2 {
        font-size: 1.5rem;
        white-space: nowrap;
        text-align: justify;
        color:rgb(var(--black-color));
      }
    & p {
      text-align: justify;
      color:rgb(var(--dark-color));
    }
  }
  & .categories {
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 2rem 0;
    @media screen and (max-width: 60rem) {
      grid-template-columns: repeat(2, 1fr);
      .premium {
        grid-column: 1 / 3;
      }
    }
    @media screen and (max-width: 40rem) {
      grid-template-columns: 1fr;
      .premium {
        grid-column: auto;
      }
    }
    & .card1 {
      width: 100%;
      position: relative;
      min-height: 20rem;
      border: 1px solid rgba(var(--dark-color), 0.15);
    //   border-radius: 1rem;
      box-shadow: rgb(var(--black-color), 0.15) 0 0.25rem 0.5rem;
      overflow: hidden;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      transition: 0.15s;
      gap: 1rem;
      &:hover {
        transform: translateY(-0.5rem);
        box-shadow: rgb(var(--black-color), 0.25) 0 0.25rem 1rem;
      }
      & h3 {
        color: rgb(var(--black-color));
        font-size: 1rem;
        font-weight: 400;
      }
      & p {
        color: rgb(var(--black-color));
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      & ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        & li {
          color: rgb(var(--white-color), 0.5);
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          & svg {
            font-size: 1.5rem;
            color: rgb(var(--white-color));
          }
        }
      }
      & a {
        display: flex;
        align-items: center;
        width: 100%;
        & button {
          width: 100%;
          padding: 0.5rem 1rem;
          background-color: rgb(var(--white-color));
          color: rgb(var(--dark-color));
          border: 2px solid transparent;
          border-radius: 2.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          cursor: pointer;
          transition: 0.15s;
          &:hover {
            background-color: transparent;
            color: rgb(var(--white-color));
            border: 2px solid rgb(var(--white-color));
            box-shadow: rgb(var(--white-color), 0.25) 0 0.25rem 1rem;
            padding: 0.5rem 1.5rem;
          }
        }
      }
      & .attr {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem 1rem;
        background-color: rgb(var(--primary-color));
        color: rgb(var(--white-color));
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        border-radius: 0 0 0 1rem;
      }
    }
  }
`;

const Index = () => {
  return (
    <About>
      <Head>
        <title>About | CharvikaDevelopers</title>
      </Head>
      <div className="card container">
   <h2>CharvikaDevelopers</h2>
        <p>
 We are dedicated to delivering exceptional design, detailing, and structural engineering service. Our team of experts is committed to excellence and works tirelessly to exceed your expectations.        </p>
        <p>
        Our team  is highly experienced and knowledgeable. We have worked on a wide range of projects, from small-scale residential developments to large-scale industrial complexes. We are passionate about our work and dedicated to providing the highest level of service to our clients.
        </p>
        
      
      
    
        <h2>Our Team:</h2>
      <div className="categories">
        <div className="Basic card1">
          <h3>Kolli Sreekumar BE(civil)
            M.tech(structures)</h3>
            <span className="image2">
                  <Image src={img1.src} width={240} height={240} alt="" />
                  </span>

      </div>
      <div className="Basic card1">
      <h3>Kolli manibabu
         m.tech(interior designer)</h3>
         <span className="image2">
                  <Image src={img2.src} width={240} height={240} alt="" />
                  </span>
            </div>
            {/* <div className="Basic card1">
      <h3>Manne manikanta
B.tech(civil)
M.E(structures)</h3>
            </div> */}
              <br></br>
      </div>
      </div>
    </About>
  );
};

export default Index;
