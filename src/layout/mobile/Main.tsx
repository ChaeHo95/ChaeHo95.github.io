import "../../res/style/layout/main.scss"
const Main = () => {

    return(
        <div id={"main"}>
            <video className={"mobile__background"} muted autoPlay loop>
                <source src={require("../../res/mp4/mobile_background.mp4")} type="video/mp4" />
            </video>
            <div className={"mobile__description"}>
                PC 버전으로만 접속이 가능합니다.<br/>
                모바일은 지원 하지 않습니다.
            </div>
        </div>
    )
}

export default Main;
