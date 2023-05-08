import {Home} from "../pages/index"
import {Routes, Route} from "react-router-dom";

const PagesRouter = () => {

    return(
        <Routes>
            <Route path={"/"} element={<Home/>}/>
        </Routes>
    );
}

export default PagesRouter;
