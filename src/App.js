import React from "react";
import localisation from "./assets/localisation";
import {ProjectsPage} from "./pages/Projects";
import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
    const [language, changeLanguage] = React.useState("UA")
    const langProvider = {
        lang: localisation[language],
        selectLanguage: changeLanguage,
        language: language
    }
    return (
        <Routes>
            <Route path="/" element={<Landing langProvider={langProvider}/>}/>
            <Route path="/projects" element={<ProjectsPage langProvider={langProvider}/>}/>
        </Routes>
    );
}

export default App;
