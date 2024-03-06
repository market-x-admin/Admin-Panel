import React from "react";
import { Routes, Route } from "react-router-dom";

import UserData from "../Pages/User catalog/UserData";
import Properties from "../Pages/Properties/Properties"
import Reviews from "../Pages/Reviews/Reviews"
import Login from "../container/Login/Login";
import AddProperties from "../container/Add Properties/AddProperties";
import EditProperties from "../Pages/Properties/EditProperties";
export default function MyRoutes(){
    return(
        <Routes>
            <Route path="/user_catalog" element={<UserData/>}/>
            <Route path="/properties" element={<Properties/>}/>
            <Route path="/reviews/:id" element={<Reviews/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/add_properties" element={<AddProperties/>}/>
            <Route path="/edit_properties/:index/:id" element={<EditProperties/>}/>
        </Routes>
    )
}