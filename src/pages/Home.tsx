import "../res/style/pages/home.scss"
import {useNavigate} from "react-router-dom";

const Home = () =>{

    const nav = useNavigate();
    const pageMove = (pageName: any) => {
        nav(pageName);
    }
    return(
        <div id={"home"}>
            <div className={"home__left"}>
                <div className={"home__left-box"}>
                    <img src={require("../res/img/my_profile.JPG")} />
                </div>
            </div>

            <div className={"home__right"}>
                <div className={"home__right-box"} >
                    <div className={"home__right-name"}>
                        CHAEHO CHOE
                    </div>
                    <div className={"home__right-description"}>
                        <div onClick={() => {
                            pageMove("/portfolio")
                        }}>
                            DEVELOPER PORTFOLIO
                            <span className={"page_move"}>⇦</span>
                        </div>
                    </div>
                </div>
            </div>현
        </div>

    )
}
export default Home;
