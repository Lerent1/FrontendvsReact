import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function UserManage() {
    const location = useLocation();
    useEffect(() => {
        // window.scrollTo();
        const element = document.getElementById("scroll");
        if(element){
            element.scrollIntoView({behavior: "smooth"});
        }
    })
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eveniet! Debitis atque praesentium maxime et molestiae provident soluta consectetur aut, repudiandae temporibus eveniet corrupti sint, doloremque eligendi possimus ut dignissimos.
    <p id='scroll'>scroll den element mong muno</p>
    </div>
  )
}
