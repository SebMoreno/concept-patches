import { DevSupport } from "@react-buddy/ide-toolbox";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ComponentPreviews, useInitial } from "./dev";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
);
