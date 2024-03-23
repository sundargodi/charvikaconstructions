import styled from "styled-components";
import styles from "styled-components";
const Stylecard=styled.div`
postion:relative;
width: 100vw;
min-height:20vw;
overflow: hidden;
margin-block:2rem;

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
    & h4 {
        font-size: 1rem;
        
        white-space: nowrap;
        text-align: justify;
        color:rgb(var(--black-color));
      }
`
const Contactus=()=>{
return(
   <Stylecard>
    <div className="card conatiner">
<h2>Contact</h2>
<p>If you are looking for a reliable and experienced civil engineering team, please dont hesitate to contact us. We would be happy to discuss your project and provide a free consultation and quote. Thank you for considering our services, and we look forward to working with you!</p>
<h4>phno:+917207204553</h4>
    <h4>Gmail:constructionscharvika@gmail.com</h4>

    </div>
   
   </Stylecard> 
)
}
export default Contactus;