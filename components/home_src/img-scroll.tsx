import React, { useRef, useEffect, useState } from "react";

import Media from "react-media";

import MobileScrollSection from "./mobile-img-scroll";
import DeskScrollSection from "./desk-img-scroll";

function ScrollSection() {
 
  return (


    
<Media query="(max-width:50rem)">
  {matches=>{
      return matches? <MobileScrollSection></MobileScrollSection>  : <DeskScrollSection></DeskScrollSection>
  
  
  }
}
</Media>

  );

}

export default ScrollSection;