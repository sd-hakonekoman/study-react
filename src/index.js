// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

// `createRoot` を使用してレンダリング
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const ch5 = ReactDOM.createRoot(document.getElementById('ch5'));
ch5.render(<CssModules />)

const ch5StyledJsx = ReactDOM.createRoot(document.getElementById('ch5-styledJsx'));
ch5StyledJsx.render(<StyledJsx />)

const ch5StyledComponents = ReactDOM.createRoot(document.getElementById('ch5-styledComponents'));
ch5StyledComponents.render(<StyledComponents />)

const emotion = ReactDOM.createRoot(document.getElementById('emotion'));
emotion.render(<Emotion />)
