import React, { useRef } from 'react'
import { animate , useInView  , useIsomorphicLayoutEffect} from 'framer-motion';

const Counter = ({from , to}) => {
    const ref = useRef(null);
    const isInView = useInView(ref , { once: true });

    useIsomorphicLayoutEffect(()=>{
        const element = ref.current;

        if(!element) return;
        if(!isInView) return;
        element.textContent = from.toString();

        const controls = animate(from , to , {
            duration: 1.5,
            ease: 'easeOut' ,
            onUpdate(value){
                element.textContent = value.toFixed(0).toString();
            }
        })

        return ()=> controls.stop(); 

    }, [ref, isInView, from, to])
    

  return (
    <span ref={ref}>{from}</span>
  )
}

export default Counter