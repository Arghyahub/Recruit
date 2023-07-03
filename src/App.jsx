import { BrowserRouter , Routes , Route } from "react-router-dom";

import Home from "./components/home/Home"
import Hire from "./components/hire/Hire"
import Apply from "./components/apply/Apply";

import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/apply" element={<Apply/>}/>
            <Route path="/hire" element={<Hire/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
