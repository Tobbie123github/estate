import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom"
import Search from "./Search";

const Banner = () => {
    const location = useLocation();
  const { state } = location;
  const [message, setMessage] = useState(state?.message || '');
    
  useEffect(() => {
   
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, [message]);
  
  return (
        <section className="h-full max-h-[640px] mb-8 xl:mb-24">
            <div className="flex justify-around items-center ">
            {
            message && <p className="text-green-600 text-left">{message}</p>
            };
            </div>
            <Search/>
        </section>
        
        
    )
}

export default Banner;