import React from "react";
import {expSkills, techSkills} from "../assets/skillsData";
import TechItem from "../components/TechItem";
import {Portfolio} from "./Projects";
import {Link} from "react-router-dom";

const SoftSkill = (props) => {
    return (
        <div className="softSkill" key={props.data.title}>
            <img src={props.data.icon}/>
            <p className="softSkill_title">{props.data.title}</p>
            <p className="softSkill_description">{props.data.description}</p>
        </div>
    )
}

function Landing({langProvider}) {
    const lang = langProvider.lang
    const softSkills = [
        {
            title: lang.communication,
            description: lang.communicationDesc,
            icon: require("../assets/img/icons/communication.png")
        },
        {
            title: lang.creativity,
            description: lang.creativityDesc,
            icon: require("../assets/img/icons/creativity.png")
        },
        {
            title: lang.flexibility,
            description: lang.flexibilityDesc,
            icon: require("../assets/img/icons/flexibility.png")
        }
    ]

    const scrollToPortfolio = () => {
        const element = document.getElementById('portfolio');
        if (element) element.scrollIntoView({behavior: 'smooth'});
    };
    const scrollToContacts = () => {
        const element = document.getElementById('contacts');
        if (element) element.scrollIntoView({behavior: 'smooth'});
    };
    document.title = lang.landingTitle
    return (
        <div className="app">
            <header className="header">
                <div className="languageSelector_wrapper">
                    {langProvider.language === "UA" && <p onClick={() => langProvider.selectLanguage("EN")} className="languageSelector">EN</p>}
                    {langProvider.language === "EN" && <p onClick={() => langProvider.selectLanguage("UA")} className="languageSelector">UA</p>}
                </div>
                <div className="header_buttons_text">
                    <nav className="header_buttons">
                        <p style={{color: "black"}}>{lang.headerBTN1}</p>
                        <p onClick={scrollToPortfolio}>{lang.headerBTN2}</p>
                        <p onClick={scrollToContacts}>{lang.headerBTN3}</p>
                    </nav>
                </div>
            </header>
            <section className="aboutMe">
                <div className="aboutMe_firstBlock">
                    <div className="aboutMe_firstBlock_name">
                        <div className="aboutMe_firstBlock_name_text">
                            <p className="aM_fB_n_myName" style={{color: "black"}}>{lang.name}</p>
                            <p className="aM_fB_n_specialty" style={{color: "#4D4D4D", marginTop: "2%"}}>{lang.spec}</p>
                        </div>
                        <img className="aboutMe_firstBlock_name_profilePhoto" src={require("../assets/img/profile.png")}/>
                    </div>
                    <p className="aboutMe_firstBlock_description">{lang.aboutMe}                    </p>
                    <div className="aboutMe_firstBlock_englishLvlBlock">
                        <img src={require("../assets/img/icons/language.png")}/>
                        <p className="aboutMe_firstBlock_description" style={{marginTop: 0, marginLeft: "max(1%, 15px)", textAlign: "left"}}>{lang.englishLVL}</p>
                    </div>
                </div>
                <div className="aboutMe_techSkills">
                    <p className="blockTitle">{lang.techSkills}</p>
                    <div className="aboutMe_skillsGrid">
                        {techSkills.map(skill => {
                            return <TechItem data={skill} key={skill.title}/>
                        })}
                    </div>
                </div>
                <div className="aboutMe_expSkills">
                    <p className="blockTitle">{lang.expSkills}</p>
                    <div className="aboutMe_skillsGrid">
                        {expSkills.map(skill => {
                            return <TechItem data={skill} key={skill.title}/>
                        })}
                    </div>
                </div>
                <div className="aboutMe_softSkills">
                    <p className="blockTitle">{lang.softSkills}</p>
                    <div className="aboutMe_softSkills_grid">
                        {softSkills.map(skill => {
                            return <SoftSkill data={skill} key={skill.title}/>
                        })}
                    </div>
                </div>
                <div className="aboutMe_edAndWork">
                    <div className="aboutMe_education_block">
                        <p className="edAndWork_block_blockTitle">{lang.education}</p>
                        <div className="aboutMe_edAndWork_block_content">
                            <img src={require("../assets/img/icons/education.png")}/>
                            <p className="edAndWork_block_title">{lang.educationDescription.title}</p>
                            <p className="edAndWork_block_years">{lang.educationDescription.years}</p>
                            <p className="edAndWork_block_description">{lang.educationDescription.desc1}</p>
                            <p className="edAndWork_block_description" style={{marginTop: 0}}>{lang.educationDescription.desc2}</p>
                        </div>
                    </div>
                    <div className="aboutMe_work_block">
                        <p className="edAndWork_block_blockTitle">{lang.work}</p>
                        <div className="aboutMe_edAndWork_block_content">
                            <img src={require("../assets/img/icons/freelance.png")}/>
                            <p className="edAndWork_block_title">{lang.workDescription.title}</p>
                            <p className="edAndWork_block_years">{lang.workDescription.years}</p>
                            <p className="edAndWork_block_description">{lang.workDescription.desc}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Portfolio lang={lang}/>
            <footer className="contacts" id="contacts">
                <div className="contacts_header">
                    <div className="contacts_header_wrapper">
                        <p className="contacts_header_title">{lang.contacts}</p>
                    </div>
                </div>
                <div className="contacts_content">
                    <div className="contacts_content_item" style={{marginTop: 0}}>
                        <div className="contacts_content_item_photo">
                            <img src={require("../assets/img/icons/email.png")}/>
                        </div>
                        <p className="contacts_content_item_title">serhiibaranchuk.work@gmail.com</p>
                    </div>
                    <a href="https://t.me/Kwellix" target="_blank" className="contacts_content_item" id="contacts_telegram">
                        <div className="contacts_content_item_photo">
                            <img src={require("../assets/img/icons/telegram.png")}/>
                        </div>
                        <p className="contacts_content_item_title">@Kwellix</p>
                    </a>
                    {/*
                    <a href="https://www.linkedin.com/in/serhii-baranchuk-917a4926a" target="_blank" className="contacts_content_item">
                        <div className="contacts_content_item_photo">
                            <img src={require("../assets/img/icons/linkedin.png")}/>
                        </div>
                        <p className="contacts_content_item_title">{lang.linkedin}</p>
                    </a>
                    */}
                </div>
            </footer>
        </div>
    );
}

export default Landing;