import React from 'react';
import './App.scss';
import {BrowserView, MobileView} from 'react-device-detect';
import {BrowserRouter} from "react-router-dom";
import Browser from "./browser/Browser";
import Mobile from "./mobile/Mobile";

const App = () => {

    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {/** 브라우저 */}
                <BrowserView>
                    <Browser/>
                </BrowserView>

                {/** 모바일 */}
                <MobileView>
                    <Mobile/>
                </MobileView>
            </BrowserRouter>
        </div>
    );
}

export default App;
