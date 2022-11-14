import React, {Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Airlines from "./components/Airlines/Airlines";
import Airline from "./components/Airline/Airline";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import axios from "axios";





const App = () => {

    const [logged_in, setLogged_in] = useState({loggedInStatus: "NOT_LOGGED_IN", user:{}})

    const userEmail = logged_in.loggedInStatus !== "NOT_LOGGED_IN" ? logged_in.user.email : null


    const handleLogoutClick = () => {
      axios
        .delete("http://localhost:3000/api/v1/logout",{headers: {
          'Access-Control-Allow-Credentials':true
        }}, { withCredentials: true})
        .then(response => {
          if(response.data.logged_out) {
            setLogged_in({loggedInStatus: "NOT_LOGGED_IN",
            user: {}})
          }

        })
        .catch(error => {
          console.log("logout error", error);
        });
      }

    const checkLoginStatus = () => {

        axios
        .get("http://localhost:3000/api/v1/logged_in",{headers: {
          'Access-Control-Allow-Credentials':true
        }}, { withCredentials: true})
        .then(response => {
          console.log(response.data)
        if (
          response.data.logged_in &&
          logged_in.message === "NOT_LOGGED_IN"
        ) {
          setLogged_in({
            message: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (logged_in.message === "LOGGED_IN")
        ) {
          setLogged_in({
            message: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });

    }

    useEffect(() => {
        checkLoginStatus();
    })




    return(
            <Fragment>
            <Navbar logout={handleLogoutClick}/>
            <Routes>
                <Route exact path="/"
                 element={<Airlines userEmail={userEmail}/>}></Route>
                <Route exact path="/airlines/:slug" element={<Airline userEmail={userEmail}/>}></Route>
                <Route path="/login" element={<Login sendToChild={logged_in} sendToParent={setLogged_in} />}/>
                <Route exact path="/registration" element={<Registration sendToChild={logged_in} sendToParent={setLogged_in}/>} />
            </Routes>
            </Fragment>



    )
}

export default App
