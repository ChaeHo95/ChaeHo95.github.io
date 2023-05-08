import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Main} from "./layout";

const App = () => {

    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Main/>
            </BrowserRouter>
        </div>
    );
}


const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: "100%",
        height: "100%"
    }

}
export default App;
