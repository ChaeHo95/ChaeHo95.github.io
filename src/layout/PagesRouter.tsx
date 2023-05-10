import {Routes, Route} from "react-router-dom";
import {Contact, Portfolio,Home} from "../pages";

const PagesRouter = () => {

    return(
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/portfolio"} element={<Portfolio/>}/>
        </Routes>
    );
}

export default PagesRouter;
