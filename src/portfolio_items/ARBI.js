import Popup from "reactjs-popup"
import React from "react";
import TechItem from "../components/TechItem";

const ARBI = () => {
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem" style={{marginTop: 0}}>
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../assets/img/portfolio/ARBI.png")}/>
                        <div className="portfolioItem_titles">
                            <p className="textTitle">ARBI</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2022 - 2023</p>
                        </div>
                    </div>
                    <p className="portfolioItem_description">ARBI - це повноцінний веб-додаток для автоматизації процесу торгівлі на криптовалютних біржах, створений за допомогою стеку MERN. </p>
                </div>
            }
        >
            {close =>
                <div className="portfolioPopup">
                    <div className="portfolioPopup_bg">
                        <div className="portfolioPopup_content">
                            <img className="closeIcon" onClick={close} src={require("../assets/img/icons/close.png")}/>
                            <div className="portfolioItem_text_popup">
                                <img className="portfolioItem_icon_popup" src={require("../assets/img/portfolio/ARBI.png")}/>
                                <div className="portfolioItem_titles_popup">
                                    <p className="textTitle">ARBI</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>2022 - 2023</p>
                                </div>
                            </div>
                            <div className="portfolioPopup_description">
                                <p className="portfolioPopup_description_text">ARBI - це веб-додаток, який допомагає виявляти арбітражні зв'язки на криптобіржах, а також між ними.
                                    Він дозволяє швидко та ефективно
                                    знаходити можливості для заробітку у криптовалютній сфері. Одними з ключових функцій ARBI є пошук
                                    арбітражних зв'язків як між внутрішніми ринками централізованих та децентралізованих бірж, так і всередині кожного окремого ринку. Це дозволяє користувачам ARBI
                                    знайти
                                    потенційні можливості для заробітку на усіх ринках, що дозволяє максимізувати їх прибуток.</p>
                                <img className="portfolioPopup_description_imgCenter" src={require("./ARBI/ARBI_arbitrage.gif")}/>
                                <img style={{width: "min(100%, 500px)"}} className="portfolioPopup_description_imgRight" src={require("./ARBI/wbt.png")}/>
                                <p className="portfolioPopup_description_text">ARBI забезпечує високий рівень безпеки за допомогою того, що лише авторизовані користувачі мають доступ до
                                    функціоналу
                                    додатку. Дані користувачів добре захищені
                                    завдяки системі шифрування даних (CryptoJS), яка дозволяє зберігати інформацію в базі даних в зашифрованому вигляді. Для ARBI були створені скрипти, які дозволяють
                                    виконувати торгівельні операції з швидкістю, недосяжною для звичайної людини (див. скріншот з біржі).
                                    Це дозволяє користувачам ARBI реалізувати
                                    свій
                                    потенціал та максимізувати свій прибуток.
                                    ARBI заснований на стаку MERN (MongoDB, Express, React та Node.js), що забезпечує масштабованість, стабільність та продуктивність додатку.
                                </p>
                                <img style={{width: "min(100%, 690px)"}} className="portfolioPopup_description_imgLeft" src={require("./ARBI/ARBI_adaptive.gif")}/>
                                <p className="portfolioPopup_description_text" style={{marginTop: "1%"}}>
                                    Крім того, фронтенд складова ARBI має адаптивну верстку, що дозволяє користувачам зручно використовувати його з будь-якого пристрою.
                                    В цілому, ARBI є потужним та надійним інструментом для пошуку арбітражних зв'язків на криптовалютному ринку, який дозволяє користувачам ефективно
                                    використовувати
                                    можливості для заробітку на різних ринках. ARBI - це додаток, який стане незамінним помічником для будь-якого трейдера, який бажає максимізувати свій прибуток.</p>
                            </div>
                            <p className="portfolioPopup_description_technologies">Використані технології</p>
                            <div className="aboutMe_skillsGrid" style={{rowGap: "max(calc(100vw * 0.025), 20px)"}}>
                                {techSkills.map(skill => {
                                    return <TechItem data={skill}/>
                                })}
                            </div>
                            <p style={{fontStyle: "italic", fontWeight: "bold", marginTop: "4%"}} className="portfolioPopup_description_text">На даний момент фінальна версія ARBI
                                знаходиться в
                                розробці та
                                тестуванні.</p>
                        </div>
                    </div>
                </div>
            }
        </Popup>
    )
}

export default ARBI

const techSkills = [
    {
        title: "JavaScript",
        icon: require("../assets/img/tech/js.png")
    },
    {
        title: "HTML5",
        icon: require("../assets/img/tech/html5.png")
    },
    {
        title: "CSS",
        icon: require("../assets/img/tech/css.png")
    },
    {
        title: "React",
        icon: require("../assets/img/tech/react.png")
    },
    {
        title: "Express.js",
        icon: require("../assets/img/tech/express.js.png")
    },
    {
        title: "Axios",
        icon: require("../assets/img/tech/axios.png")
    },
    {
        title: "REST API",
        icon: require("../assets/img/tech/restAPI.png")
    }, ,
    {
        title: "npm",
        icon: require("../assets/img/tech/npm.png")
    },
    {
        title: "Git",
        icon: require("../assets/img/tech/git.png")
    },
    {
        title: "Redux",
        icon: require("../assets/img/tech/redux.png")
    },
    {
        title: "Redux Toolkit",
        icon: require("../assets/img/tech/reduxToolkit.png")
    },
    {
        title: "MongoDB",
        icon: require("../assets/img/tech/mongoDB.png")
    },
    {
        title: "Figma",
        icon: require("../assets/img/tech/figma.png")
    },
    {
        title: "Photoshop",
        icon: require("../assets/img/tech/photoshop.png")
    }
]