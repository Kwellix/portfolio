import {techSkills, expSkills, softSkills} from "./assets/skillsData";
import ARBI from "./portfolio_items/ARBI";
import Wallet from "./portfolio_items/Wallet";
import Braveheart from "./portfolio_items/Braveheart";
import LNTU from "./portfolio_items/LNTU"

const HeaderButtons = () => {
    return (
        <div className="header_buttons">
            <p style={{color: "black"}}>про мене</p>
            <p>портфоліо</p>
            <p>контакти</p>
        </div>
    )
}

const TechItem = (props) => {
    return (
        <div>
            <div className="techItem_photo">
                <img src={props.data.icon}/>
            </div>
            <div className="techItem_description">
                <p className="techItem_description_title">{props.data.title}</p>
            </div>
        </div>
    )
}

const SoftSkill = (props) => {
    return (
        <div className="softSkill">
            <img src={props.data.icon}/>
            <p className="softSkill_title">{props.data.title}</p>
            <p className="softSkill_description">{props.data.description}</p>
        </div>
    )
}

function App() {
    document.title = "Сергій Баранчук | Портфоліо"
    return (
        <div className="app">
            <div className="header">
                <div className="header_buttons_text">
                    <HeaderButtons/>
                </div>
                <div className="header_buttons_icon">
                    <div className="header_buttons">
                        <img style={{height: 35, padding: 10}} src={require("./assets/img/icons/arrow.png")}/>
                    </div>
                </div>
            </div>
            <div className="aboutMe">
                <div className="aboutMe_firstBlock">
                    <div className="aboutMe_firstBlock_name">
                        <div className="aboutMe_firstBlock_name_text">
                            <p className="aM_fB_n_myName" style={{color: "black"}}>Сергій Баранчук</p>
                            <p className="aM_fB_n_specialty" style={{color: "#4D4D4D", marginTop: "2%"}}>Frontend React Developer</p>
                        </div>
                        <img className="aboutMe_firstBlock_name_profilePhoto" src={require("./assets/img/profile.png")}/>
                    </div>
                    <p className="aboutMe_firstBlock_description">Привіт! Мене звати Сергій. Я - фронтенд розробник, який націлений на створення сучасних, зручних та привабливих сайтів та веб-додатків. Маю досвід адаптивної верстки під десктопні та мобільні пристрої різних розмірів, Pixel Perfect
                        верстки та створення власних дизайнів. Також, маю хороші навички аналізу та самонавчання, тому з легкістю вирішую проблеми, що виникають під час розробки, та швидко освоюю нові необхідні інструменти та засоби
                    </p>
                    <div className="aboutMe_firstBlock_englishLvlBlock">
                        <img src={require("./assets/img/icons/language.png")}/>
                        <p className="aboutMe_firstBlock_description" style={{marginTop: 0, marginLeft: "max(1%, 15px)", textAlign: "left"}}>Рівень англійської мови: В2 (Upper Intermediate)</p>
                    </div>
                </div>
                <div className="aboutMe_techSkills">
                    <p className="blockTitle">Технічні навички</p>
                    <div className="aboutMe_skillsGrid">
                        {techSkills.map(skill => {
                            return <TechItem data={skill}/>
                        })}
                    </div>
                </div>
                <div className="aboutMe_expSkills">
                    <p className="blockTitle">Досвід використання</p>
                    <div className="aboutMe_skillsGrid">
                        {expSkills.map(skill => {
                            return <TechItem data={skill}/>
                        })}
                    </div>

                </div>
                <div className="aboutMe_softSkills">
                    <p className="blockTitle">Soft Skills</p>
                    <div className="aboutMe_softSkills_grid">
                        {softSkills.map(skill => {
                            return <SoftSkill data={skill}/>
                        })}
                    </div>
                </div>
                <div className="aboutMe_edAndWork">
                    <div className="aboutMe_education_block">
                        <p className="edAndWork_block_blockTitle">Освіта</p>
                        <div className="aboutMe_edAndWork_block_content">
                            <img src={require("./assets/img/icons/education.png")}/>
                            <p className="edAndWork_block_title">Луцький національний технічний університет</p>
                            <p className="edAndWork_block_years">2019 - 2023</p>
                            <p className="edAndWork_block_description">Спеціальність: Комп’ютерна інженерія</p>
                            <p className="edAndWork_block_description" style={{marginTop: 0}}>Cтупінь: бакалавр</p>
                        </div>
                    </div>
                    <div className="aboutMe_work_block">
                        <p className="edAndWork_block_blockTitle">Робота</p>
                        <div className="aboutMe_edAndWork_block_content">
                            <img src={require("./assets/img/icons/freelance.png")}/>
                            <p className="edAndWork_block_title">Фріланс</p>
                            <p className="edAndWork_block_years">2022 - 2023</p>
                            <p className="edAndWork_block_description">Виконання індивідуальних замовленнь (верстка та створення дизайну сайтів, написання скриптів/додатків/Telegram-ботів засобами мови JavaScript та платформи Node.js).</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <div className="portfolio_header">
                    <div className="portfolio_header_wrapper">
                        <p className="portfolio_header_title">Портфоліо</p>
                    </div>
                </div>
                <div className="portfolio_content">
                    <ARBI/>
                    <Wallet/>
                    <Braveheart/>
                    <LNTU/>
                </div>
            </div>
            <div className="contacts">
                <div className="contacts_header">
                    <div className="contacts_header_wrapper">
                        <p className="contacts_header_title">Контакти</p>
                    </div>
                </div>
                <div className="contacts_content">
                    <div className="contacts_content_item" style={{marginTop: 0}}>
                        <div className="contacts_content_item_photo">
                            <img src={require("./assets/img/icons/email.png")}/>
                        </div>
                        <p className="contacts_content_item_title">s.b.tomor@gmail.com</p>
                    </div>
                    <a href="https://t.me/Kwellix" target="_blank" className="contacts_content_item">
                        <div className="contacts_content_item_photo">
                            <img src={require("./assets/img/icons/telegram.png")}/>
                        </div>
                        <p className="contacts_content_item_title">@Kwellix</p>
                    </a>
                    <div className="contacts_content_item">
                        <div className="contacts_content_item_photo">
                            <img src={require("./assets/img/icons/phone.png")}/>
                        </div>
                        <p className="contacts_content_item_title">+380 67 306 24 60</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
