import { createContext, useState } from "react";
import { useEffect } from "react";



const Mycontext = createContext();

function NameContext({ children }) {

    const [xuv, updxuv] = useState(() => {
        const uv = localStorage.getItem('name543');
        return  {};
      })
    
      function addinxuv(v) {
        updxuv(v)
      }
    
      useEffect(() => {
        localStorage.setItem('name543', JSON.stringify(xuv));
      }, [xuv]);



    return (<>
        <Mycontext.Provider value={{xuv, addinxuv }}>
          {children}
        </Mycontext.Provider>
    
      </>)
    }
    
    export { NameContext, Mycontext }