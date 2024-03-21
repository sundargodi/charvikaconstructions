// import styled, { css ,keyframes} from "styled-components";
// const PlanStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   min-height: 50vh;
//   gap: 3rem;
//   &.heading-landing {
//     width: 320px;
//     font-size: 40px;
//     line-height: 48px;
//     color: rgb(var(--sondary-color));
// }
// & section {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     gap: 2rem;
//     width: 100%;
//     font-size: 20px;
//     font-weight: 500;

//     padding: 2rem 0;
//     & .image {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 2.5rem;
//       padding: 2rem;
//       border-radius: 50%;
//       color: rgb(var(--dark-color));
//       background: linear-gradient(
//         45deg,
//         rgba(var(--secondary-color), 0),
//         rgba(var(--secondary-color), 0.05),
//         rgba(var(--secondary-color), 0.1)
//       );
//     }  & p {
//         text-align: center;
//         color: rgb(var(--black-color))
     
//       }
//       & h2 {
//         color: rgb(var(--dark-color));
//         font-size: 3rem;
//         letter-spacing: -0.1rem;
//         text-align: center;
//         font-weight: 700;
//         & span {
//           // color: rgb(var(--secondary-color), 0.75);
//           color: #ffffff;}
// }`
// const hue = keyframes`
// {
//     from {
//         -webkit-filter: hue-rotate(0deg);
//       }
//       to {
//         -webkit-filter: hue-rotate(-360deg);
//       }
     
// `;
// const AnimatedGradientText = styled.h1`
// color: #ffffff;
// background-image: -webkit-linear-gradient(120deg,#ff1e64, #f48a39, #8c25e5, #106cbd);

// -webkit-text-fill-color: transparent;
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// -webkit-animation: ${hue} 5s infinite linear;
// font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
//   sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
// font-feature-settings: "kern";
// font-size: 60px;
// font-weight: 700;
// line-height: 60px;
// overflow-wrap: break-word;
// text-align: center;
// align-items: center;
// justify-content: center;
// text-rendering: optimizelegibility;
// -moz-osx-font-smoothing: grayscale;
// & .wrapper {
//     color: rgb(var(--dark-color))
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     gap: 2rem;
//     @media screen and (max-width: 50rem) {
//       flex-direction: column;
//     }
//  & section {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-direction: column;
//       gap: 2rem;
//       width: 100%;
//       padding: 2rem 0;
//       & .image {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 2.5rem;
//         padding: 2rem;
//         border-radius: 50%;
//         color: rgb(var(--dark-color));
//         background: linear-gradient(
//           45deg,
//           rgba(var(--secondary-color), 0),
//           rgba(var(--secondary-color), 0.05),
//           rgba(var(--secondary-color), 0.1)
//         );
//       }
// `;
// const Body=()=>{
//     return (
//         <PlanStyle className="container">
//             {/* <AnimatedGradientText>
          
//             Building the <br></br>world's infrastructure
//             </AnimatedGradientText> */}
            
//             <div className="wrapper">
//                 <section>
//                     <h2>
//                     Building the <br></br>world's infrastructure
//                     </h2>
//             <p>
//             We are a team of experienced civil engineers postGraduates who specialize in designing, planning, and executing a wide range of Building constructions projects. Whether you are looking for assistance with a residential, commercial, or industrial project, we have the expertise and resources to meet your needs.

//           </p>
//           </section>
//           </div>
//         </PlanStyle>)
// }
// export default Body;
import styled from "styled-components";
import bg from "../../public/5138438.jpg";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AnimatedText from 'react-animated-text-content';
const HomeStyled = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 65vh;

  & .content {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: min(90%, 70rem);
    gap: 1rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column-reverse;
    }
    & span#panel {
      & h1 {
        @media screen and (max-width: 50rem) {
          font-size: 1.5rem;
          text-align: center;
          color:rgb(var(--dark-color))
        }
        text-align: center;
          color:rgb(var(--dark-color))  
    }
    & p {
        // @media screen and (max-width: 50rem) {
        //     font-size: 0.5rem;
        //     text-align: center;
        //     color:rgb(var(--dark-color))
        //   }
                text-align: left;
                color: rgb(var(--black-color))
            
              }
        & span {
          &.blue-text {
            background: linear-gradient(
              200deg,
              rgb(var(--secondary-color)) 30%,
              rgb(var(--secondary-gradient-1)) 60%,
              rgb(var(--white-color), 0.5)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: larger;
          }
          &.orange-text {
            background: linear-gradient(
              15deg,
              rgb(var(--primary-color)) 30%,
              rgb(var(--primary-gradient-1)) 60%,
              rgb(var(--white-color), 0.5)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: larger;
          }
        
      },
      & a {
        display: flex;
        align-items: center;
        @media screen and (max-width: 50rem) {
          justify-content: center;
        }
       
        }
      }
    }
    & span#image {
      display: grid;
      place-items: center;
      & img {
        max-width: 100%;
        height: auto;
        aspect-ratio: 3 / 2;
        border: 1px solid rgb(var(--white-color), 0.75);
        border-radius: 0%;
        // object-fit: cover;
      }
    }
  }
`;

const Hero = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const panel = document.querySelector("#panel") as HTMLElement;
//       if (panel) {
//         document.body.onpointermove = (event) => {
//           const { clientX, clientY } = event;
//           panel.style.transform = `translate(${clientX / 30}px, ${
//             clientY / 30
//           }px)`;
//         };
//       }
//     }
//   }, []);

  return (
    <HomeStyled>
      <div className="content container">
        <span id="panel">
          <h1>
            Building The <span className="blue-text">Worlds</span>
            <br />
            <span className="orange-text">infrastructure</span> 
          </h1>

        </span>
        <span id="image">
          <Image src={bg.src} width={500} height={500} alt="" />
        </span>

      </div>
  
      <div className="content container"> <span id="panel"><p>We are a team of experienced civil engineers postGraduates who specialize in designing, planning, and executing a wide range of Building constructions projects. Whether you are looking for assistance with a residential, commercial, or industrial project, we have the expertise and resources to meet your needs.
</p></span></div>

    </HomeStyled>
  );
};

export default Hero;
