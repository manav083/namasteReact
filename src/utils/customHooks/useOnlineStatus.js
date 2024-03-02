import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  
    const [onlineStatus, setOnlineStatus] = useState(true);
    // check if online

    // we will use event listeners given to us by browser
    // and we only want to add this event listener only once
    // so, we will use useEffect hook

    useEffect(() => {

        // initially our onlineStatus is true and we only want to
        // track if the user is offline then we will update our status to false else true

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, []);


    // boolean value
    return onlineStatus;
}

export default useOnlineStatus