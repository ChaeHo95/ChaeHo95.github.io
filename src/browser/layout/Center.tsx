
import {Route, Routes} from "react-router-dom";
import {NotFound,Home} from "../pages";
const Center = () => {

    return(
        <div id={"center"}>
            <Routes>
                <Route path={"*"} element={<NotFound/>}/>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </div>
    )
}
export default Center;
