import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {BrowserView, MobileView} from 'react-device-detect';
import {BrowserMain} from "./layout/browser";
import {MobileMain} from "./layout/mobile";

const App = () => {

    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {/** PC */}
                <BrowserView style={styles.container}>
                    <BrowserMain/>
                </BrowserView>

                {/** Mobile */}
                <MobileView style={styles.container}>
                    <MobileMain/>
                </MobileView>
            </BrowserRouter>
        </div>
    );
}


const styles : { [key: string]: React.CSSProperties } = {
    container: {
        width: "100%",
        height: "100%"
    }

}
export default App;
