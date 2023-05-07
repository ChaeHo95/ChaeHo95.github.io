import "../../res/style/layout/main.scss"
import {Header, Right,Left} from "./index";
import React, {useEffect, useState} from "react";

const Main = () => {
    const [pageMode,setPageMode] = useState<boolean>(false);
    const [mainStyles,setMainStyles] = useState<React.CSSProperties>(styles.dark);
    const takePageMode = (modeValue : boolean) =>{
        setPageMode(modeValue);
    }

    useEffect(()=>{
        if(pageMode){
            setMainStyles(styles.white);
        }else {
            setMainStyles(styles.dark);
        }

    },[pageMode])

    return(
        <div id={"main"} style={mainStyles}>
            <Header pageMode={pageMode} takePageMode={takePageMode}/>
            <div id={"container"}>
                <Left/>
                <Right/>
            </div>
        </div>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    dark: {
        background:"#000000",
        color:"#FFFFFF"
    },
    white:{
        background:"#FFFFFF",
        color:"#000000"
    }
}
export default Main;
