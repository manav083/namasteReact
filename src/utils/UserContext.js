// Holds the data of logged in user and can be accessed anywhere in our app. It is a global object.

import { createContext } from "react";


const UserContext = createContext({
    loggedInUser: "Default User",
})


export default UserContext;