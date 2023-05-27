import ARBI from "../portfolio_items/ARBI/ARBI";
import Wallet from "../portfolio_items/Wallet/Wallet";
import LNTU from "../portfolio_items/LNTU/LNTU";
import Braveheart from "../portfolio_items/Braveheart/Braveheart";
import React from "react";
import {Link} from "react-router-dom";

const Portfolio = ({lang}) => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio_header">
                <div className="portfolio_header_wrapper">
                    <p className="portfolio_header_title">{lang.portfolio}</p>
                </div>
            </div>
            <div className="portfolio_content">
                <ARBI data={lang.ARBI}/>
                <Wallet data={lang.Wallet}/>
                <LNTU data={lang.LNTU}/>
                <Braveheart data={lang.Braveheart}/>
            </div>
        </section>
    )
}

const ProjectsPage = ({langProvider}) => {
    document.title = langProvider.lang.projectsPageTitle
    return (
        <div className="projectsPage">
            <header className="header" style={{borderBottomWidth: 0}}>
                <div className="languageSelector_wrapper">
                    {langProvider.language === "UA" && <p onClick={() => langProvider.selectLanguage("EN")} className="languageSelector">EN</p>}
                    {langProvider.language === "EN" && <p onClick={() => langProvider.selectLanguage("UA")} className="languageSelector">UA</p>}
                </div>
                <nav className="header_buttons" id="goBackBTN">
                    <Link to="/">
                        <p>{langProvider.lang.goBack}</p>
                    </Link>
                </nav>
            </header>
            <Portfolio lang={langProvider.lang}/>
        </div>
    )
}

export {Portfolio, ProjectsPage}