import { createContext, useEffect } from "react"

export const RecaptchaContext = createContext();

export const RecaptchaContextProvider = (props) => {
    
  const siteKey = "6LdmxiUaAAAAAIYySt3c8XvwOMokTQ_SW2cYkvMw";
 
  // dynamically load the javascript api using the site key
    useEffect(() => {
      const loadScriptByURL = (id, url, callback) => {
        const isScriptExist = document.getElementById(id);
    
        if (!isScriptExist) {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = url;
          script.id = id;
          script.onload = function () {
            if (callback) callback();
          };
          document.body.appendChild(script);
        }
    
        if (isScriptExist && callback) callback();
      }
    
      // load the script by passing the URL
      loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${siteKey}`, () => {
        console.log("recaptcha script loaded!");
      });
    }, []);

    return (
        <RecaptchaContext.Provider 
            value={{
            siteKey
            }}>
            {props.children}
        </RecaptchaContext.Provider>
    )
}