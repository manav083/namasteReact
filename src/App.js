import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";



// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

// We are importing grocery using lazy not in traditional way.
// because we want to lazy load our grocery component or we want split the 
// grocery component from our main application. Using only this one line we have 
// accomplished chunking or code splitting or dynamic bundling.
// using this we will get a seprate js file for all our grocery components
// in our bundle which we will enhance our app performance.

const Grocery = lazy(() => import("./components/Grocery"));

// only using lazy will throw an error because when we try to render grocery 
// because react is very fast and when it try to render our component code was not available in our
// browser because it takes some time to load the code of our component in our browser and
// react put the render process in "Suspense State".
// To rectify it, react provides a component called "Suspense".
// All we need to do is wrap our component inside this "Suspense Component" to resolve this error
// and give a fallback means the piece of jsx which we want to show to the user until our component
// gets lendered like "loader" or "shimmer ui".


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/* If path is "/"
            <Body />
            If path is "/about"
            <About />
            If path is "/contact"
            <Contact /> */}
            <Outlet />

        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <ResturantMenu />
            }
        ],
        errorElement: <Error />
    },

])


// children use to load the components according to the
// path of the route



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);