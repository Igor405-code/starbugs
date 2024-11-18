import {BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { GlobalStyle } from "./Components/GlobalStyle";
export default function App() {
  return(
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route/>
        <Route/>
      </Routes>
       </BrowserRouter>
    </>
  )
}