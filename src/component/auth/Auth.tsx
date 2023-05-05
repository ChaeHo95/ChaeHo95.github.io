import React, {ReactElement} from "react";

interface props {
    component: ReactElement,
    isAllowed: boolean
}

/**관리자 페이지를 위한 접근권한 컴퍼넌트*/
/**Todo 설계 및 구현 필요*/
const Auth = ({component: Component,isAllowed}:props) => {
    if(isAllowed){
        // @ts-ignore
        return(<Component/>)
    }
    return (
        <>
        </>
    )


}
export default Auth
