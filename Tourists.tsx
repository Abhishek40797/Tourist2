import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./StyledComponents/GlobalStyle";
import { Header } from "./Pages/Header";
import Home from "./Pages/TouristHome";
import { Footer } from "./Pages/Footer";

export const Tourists = ()=>{
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}