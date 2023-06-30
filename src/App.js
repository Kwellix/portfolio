import React from "react";
import localisation from "./assets/localisation";
import {ProjectsPage} from "./pages/Projects";
import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import axios from "axios";
import {db} from "./firebase";
import {update, ref} from "firebase/database"

function App() {
    const [language, changeLanguage] = React.useState("UA")
    const langProvider = {
        lang: localisation[language],
        selectLanguage: changeLanguage,
        language: language
    }

    const getCurrentDate = () => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${day}_${month}_${year}`
    }

    const getCurrentTime = () => {
        const currentTime = new Date();
        return currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    }

    //creating function to load ip address from the API
    const saveIP = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        const time = getCurrentTime()
        const date = getCurrentDate()
        update(ref(db, `/visitors/${date}`), {
            [time]: {
                "IP": res.data.IPv4,
                "Geolocation": {
                    "City": res.data.city,
                    "Country": res.data.country_name,
                    "Latitude": res.data.latitude,
                    "Longitude": res.data.longitude,
                    "Postal": res.data.postal,
                    "State": res.data.state
                }
            }
        })
    }

    React.useEffect(() => {
        //passing getData method to the lifecycle method
        saveIP()
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Landing langProvider={langProvider}/>}/>
            <Route path="/projects" element={<ProjectsPage langProvider={langProvider}/>}/>
        </Routes>
    );
}

export default App;
