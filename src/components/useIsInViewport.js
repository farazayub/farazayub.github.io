import { useState } from 'react'
import { useEffect } from 'react';

export default function useIsInViewport(ref) {

    const [isInViewport,setIsInViewport]=useState(false);

    useEffect(()=>{
        function handleScroll(){
            const {bottom}= ref.current.getBoundingClientRect();
            return setIsInViewport((window.innerHeight - bottom)>20);
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll);
    },[ref,isInViewport]);
    
    return isInViewport;
}
