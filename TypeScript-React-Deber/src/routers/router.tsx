import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Module1Page } from "../pages/Module1Page";
import { Module2Page } from "../pages/Module2Page";

export function MyRoutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/modulo1" element={<Module1Page/>}/>
            <Route path="/modulo2" element={<Module2Page/>}/>
        </Routes>
        </BrowserRouter>
    )
}