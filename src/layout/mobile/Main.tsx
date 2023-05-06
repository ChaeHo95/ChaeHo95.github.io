import "../../res/style/layout/main.scss"
import React from "react";

const Main = () => {
    const videoPlay = setInterval(() => {
        const video = document.getElementById("mobileBackground") as HTMLVideoElement;
        if (video instanceof HTMLVideoElement) {
            if (video.paused) {
                video.play();
            } else {
                clearInterval(videoPlay);
            }
        }
    }, 1000)
    return (
        <div style={styles.container}>
            <video id={"mobileBackground"} style={styles.mobileBackground}
                   muted={true} autoPlay={true} loop={true} playsInline={true}>
                <source src={require("../../res/mp4/mobile_background.mp4")} type="video/mp4"/>
            </video>
            <div style={styles.mobileDescription}>
                PC 버전으로만 접속이 가능합니다.<br/>
                모바일은 지원 하지 않습니다.
            </div>
        </div>
    )
}


const styles: { [key: string]: React.CSSProperties } = {
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden"
    },
    mobileBackground: {
        height: "100%",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    },
    mobileDescription: {
        width: "100%",
        position: "fixed",
        top: "55%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        fontSize: "16px",
        fontWeight: "700",
        textAlign: "center",
        color: "#FFFFFF"
    }
}
export default Main;
