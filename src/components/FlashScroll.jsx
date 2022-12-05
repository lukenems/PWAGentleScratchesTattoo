import { useEffect, useContext, useState } from "preact/hooks";
import { FlashContext } from "../context/FlashContext";
import useFlashUrls from "../hooks/useFlashUrls";


const FlashScroll = () => {
  const {urls, dispatch} = useContext(FlashContext);
  const [urlElems, setUrlElems] = useState([]);
  // going to use context here, then check for context on load
  // in useEffect before setting the onValue listener, that way
  // there's only 1 call each time app loads then thats it.
  // may be able to cache these links as well going forward

  useEffect(() => {
    //if empty, get urls -> parse, and save to context
    if (!urls.length){
      const urlList =  useFlashUrls();
      setUrlElems(urlList);
      dispatch({type: 'STORE_URLS', payload: urlList});
    } else {
      // otherwise retrieve from context
      console.log('supposidly context has values')
      setUrlElems(urls);
    }
  },[])

  return (
    // md:flex-col md:w-1/2 md:min-h-screen
    <div className="flex bg-green-600 sm:flex-row sm:w-screen flash-scroll pt-5">
      {urlElems.map((file) => 
        <img src={file} className="w-20 h-20" />
      )}
    </div>
  )
}

export default FlashScroll