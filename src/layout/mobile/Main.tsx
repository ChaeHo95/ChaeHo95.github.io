import "../../res/style/layout/main.scss"

const Main = () => {
    const videoPlay = setInterval(() => {
        const video = document.querySelector(".mobile__background") as HTMLVideoElement;
        if (video instanceof HTMLVideoElement) {
            if(video.paused){
                video.play();
            }else {
                clearInterval(videoPlay);
            }
        }
    }, 1000)
    return (
        <div id={"main"}>
            <video className={"mobile__background"} muted={true} autoPlay={true} loop={true} playsInline={true} >
                <source src={require("../../res/mp4/mobile_background.mp4")} type="video/mp4"/>
            </video>
            <div className={"mobile__description"}>
                PC 버전으로만 접속이 가능합니다.<br/>
                모바일은 지원 하지 않습니다.
            </div>
        </div>
    )
}

export default Main;
