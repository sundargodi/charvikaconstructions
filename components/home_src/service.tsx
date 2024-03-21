import styled from "styled-components";
import { GoNote } from "react-icons/go";
import { HiOutlineCode } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import {GiDrawbridge} from "react-icons/gi";
import{BiBuildingHouse}from"react-icons/bi";
import{BsFillGeoFill}from"react-icons/bs";
import {MdConstruction,MdOutlineManageSearch,MdOutlineDesignServices,MdOutlineArchitecture} from "react-icons/md";
import { keyframes } from "styled-components";
const hue = keyframes`
{
    from {
        -webkit-filter: hue-rotate(0deg);
      }
      to {
        -webkit-filter: hue-rotate(-180deg);
      }
     
`;
const PlanStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20vh;
  min-width:90vw;
  // gap: 3rem;
  & h2 {
    color: rgb(var(--dark-color));
    font-size: 3rem;
    letter-spacing: -0.1rem;
    text-align: center;
    font-weight: 700;
    & span {
      // color: rgb(var(--secondary-color), 0.75);
      color: #ffffff;
background-image: -webkit-linear-gradient(120deg,#ff1e64, #f48a39, #8c25e5, #106cbd);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-animation: ${hue} 5s infinite linear;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
  sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-feature-settings: "kern";
font-size: 60px;
font-weight: 700;
line-height: 30px;
overflow-wrap: break-word;
// text-align: left;
// align-items: left;
// justify-content: left;
text-rendering: optimizelegibility;
-moz-osx-font-smoothing: grayscale;
    }
  }
  & .wrapper {
    color: rgb(var(--dark-color))
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
    }
    & section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      padding: 2rem 0;
      & .image {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        padding: 2rem;
        border-radius: 50%;
        color: rgb(var(--img-bg-color));
      //   background: linear-gradient(
      //     45deg,
      //     // rgba(var(--dark-color)),
      //     // rgba(var(--dark-color)),
      //     // rgba(var(--dark-color))
      //     rgba(var(--secondary-color), 0),
      //     rgba(var(--secondary-color), 0.05),
      //     rgba(var(--secondary-color), 0.1)
      //   );
      background:rgba(var(--white-color))
      }
     
      .image2{display: flex;
        justify-content: left;
        align-items: left;
        font-size: 1rem;
       
      }
      & h3 {
        white-space: nowrap;
        color: rgb(var(--dark-color))

      }
      & p {
        text-align: center;
        color: rgb(var(--black-color))
      }
    }
  }
`;

const AnimatedGradientText = styled.h1`
color: #ffffff;
background-image: -webkit-linear-gradient(120deg,#023047,#219ebc, #000000, #fb8500);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-animation: ${hue} 5s infinite linear;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
  sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-feature-settings: "kern";
font-size: 30px;
font-weight: 700;
line-height: 30px;
overflow-wrap: break-word;
// text-align: left;
// align-items: left;
// justify-content: left;
text-rendering: optimizelegibility;
-moz-osx-font-smoothing: grayscale;
`;
const Plan = () => {
  return (
    <PlanStyle className="container">
     <div>
      <h2>
        What&apos;s Our <span>Services</span> ?
      </h2>
      </div>
      <div className="wrapper">
        <section>
          <span className="image">
            <GoNote />
          </span>
          <h3> Design and planing
          </h3>
          <p>
          Our team  can help you design and plan your project from start to finish. We use the latest software and tools to create accurate and detailed plans that meet all relevant standards and regulations.

          </p>
        </section>
        <section>
          <span className="image">
            <GiDrawbridge />
          </span>
          <h3>Structural Engineering</h3>
          <p>
          Our team has extensive experience in designing and analyzing various types of structures, including buildings, bridges, and tunnels. We use advanced analytical tools and techniques to ensure that our designs are safe, efficient, and cost-effective.
          </p>
        </section>
        <section>
          <span className="image">
            <MdConstruction />
            <MdOutlineManageSearch/>
          </span>
          <h3>Construction Management</h3>
          <p>
          We provide comprehensive construction management services to ensure that your project is completed on time and within budget. We work closely with contractors and subcontractors to ensure that all work is performed to the highest standards of quality and safety
          </p>
        </section>
        <section>
          <span className="image">
            <BiBuildingHouse />
            
            <span className="image2">
            <MdOutlineDesignServices/>
            </span>
            </span>
          <h3>Interior Desinging</h3>
          <p>
          We specialize in creating beautiful, functional, and personalized spaces that reflect your unique style and preferences. Our team of experienced designers works closely with you to understand your needs and goals, and we provide a full range of design services to bring your vision to life.


          </p>
        </section>
        <section>
          <span className="image">
            <BsFillGeoFill />
            <MdOutlineArchitecture/>
            
            </span>
          <h3> GeoTechnical engineering</h3>
          <p>
          We specialize in providing comprehensive solutions for geotechnical challenges, from site investigation to design and construction.  We consider factors such as soil and rock properties, seismic and wind loads, and environmental factors to ensure the stability and durability of your project
          </p>
        </section>
       
      </div>
    </PlanStyle>
  );
};

export default Plan;
