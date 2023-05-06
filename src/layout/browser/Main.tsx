import "../../res/style/layout/main.scss"
import {Header, Right,Left} from "./index";

const Main = () => {

    return(
        <div id={"main"}>
            <Header/>
            <div id={"container"}>
                <Left/>
                <Right/>
            </div>
        </div>
    )
}

export default Main;
