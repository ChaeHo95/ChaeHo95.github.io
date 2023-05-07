import "../../res/style/layout/header.scss"
import {useEffect, useState} from "react";

interface headerType {
    pageMode: boolean,
    takePageMode: any
}

const Header = ({pageMode, takePageMode}: headerType) => {

    const [btnType, setBtnType] = useState<String>("off-button.png");
    useEffect(()=>{
        let type : String = "off-button.png";
        if(pageMode){
            type = "on-button.png";
        }
        setBtnType(type);
    },[pageMode])
    const modeChange = () => {

        takePageMode(!pageMode);

    }
    return (
        <div id={"header"}>
            <div className={"header__menus"}>
                <div className={"header__menu"}>
                    ABOUT ME
                </div>
                <div className={"header__menu"}>
                    CONTACT
                </div>
            </div>
            <div className={"header__mode-btn"}>
                <img src={require("../../res/img/"+btnType)}
                     onClick={() => {
                         modeChange();
                     }}/>
            </div>
        </div>
    )
}

export default Header;
