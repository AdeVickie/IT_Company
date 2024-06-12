import React from "react";

import img1 from "../assets/Images/shape-2-removebg-preview.png"
import img2 from "../assets/Images/shape1-removebg-preview.png"
import img3 from "../assets/Images/shape-3-removebg-preview.png"
import img4 from "../assets/Images/shape-4-removebg-preview.png"
import img5 from "../assets/Images/shape1-removebg-preview.png"
import img6 from "../assets/Images/shape-2-removebg-preview.png"
import img7 from "../assets/Images/shape-3-removebg-preview.png"
import img8 from "../assets/Images/shape-4-removebg-preview.png"
import img9 from "../assets/Images/shape1-removebg-preview.png"
import img10 from "../assets/Images/shape-2-removebg-preview.png"
import img11 from "../assets/Images/shape-3-removebg-preview.png"
import img12 from "../assets/Images/shape-4-removebg-preview.png"
import headerImg from "../assets/Images/header-image.jpg"



export default function HeaderNav (){
    return(
        <div className="grid grid-cols-2">
              <div className="flex items-center justify-center flex-col relative isolate mt-32"> 
                 <h1 className="text-5xl font-mono font-extrabold text-gray-600">
                    Creative Multipurpo<br/>Bootstrap <span className="text-red-500">Template </span>
                 </h1>
                 <p className="mt-10 text-gray-600 ml-12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br/>tempor invidunt ut labore et dolore magna.</p>
                 <button className="px-[38px] py-[16px] bg-gray-600 rounded-tl-full rounded-b-full text-white mt-10 self-start ml-32 hover:bg-gray-500 hover:transition-all">Get Started</button>
        <img className="absolute top-0 z-20 bg-transparent" src={img1} alt="shape1" width={45} height={45} />
        <img className="absolute bottom-0 z-20 bg-transparent" src={img2} alt="shape1" width={45} height={45}/>
        <img className="absolute left-32 -z-20 bg-transparent" src={img3} alt="shape1" width={45} height={45} />
        <img className="absolute  top-16 -z-20 bg-transparent" src={img4} alt="shape1" width={45} height={45}/>
        <img className="absolute top-16 -z-20 bg-transparent" src={img5} alt="shape1" width={45} height={45} />
        <img className="absolute bottom-32 -z-20 bg-transparent" src={img6} alt="shape1" width={45} height={45} />
        <img className="absolute right-64 -z-20 bg-transparent" src={img7} alt="shape1" width={45} height={45} />
        <img className="absolute top-8 right-36 -z-20 bg-transparent" src={img8} alt="shape1" width={45} height={45} />
        <img className="absolute bottom-8 right-6 -z-20 bg-transparent" src={img9} alt="shape1" width={45} height={45} />
        <img className="absolute top-0 left-0 -z-20 bg-transparent" src={img10} alt="shape1" width={45} height={45} />
        <img className="absolute right-0 -z-20 bg-transparent" src={img11} alt="shape1" width={45} height={45} />
        <img className="absolute left-0 -z-20 bg-transparent" src={img12} alt="shape1" width={45} height={45} />    
          
           </div>

            <div className="header-img mt-32">
                <img src={headerImg} alt="header"/>
        
            </div>
        </div>

    )
}