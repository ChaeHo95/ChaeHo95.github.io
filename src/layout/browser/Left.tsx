import "../../res/style/layout/left.scss";
const Left = () => {

    return(
        <div id={"left"}>
            <div className={"left__img-box"}>
                <img src={require("../../res/img/my_profile.JPG")} />
            </div>
        </div>
    )
}

export default Left;
