import Popup from "reactjs-popup"
import React from "react";
import TechItem from "../components/TechItem";

const ARBI = (props) => {
    let text = props.data
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem" style={{marginTop: 0}}>
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../assets/img/portfolio/ARBI.png")}/>
                        <div className="portfolioItem_titles">
                            <p className="textTitle">{text.title}</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>{text.year}</p>
                        </div>
                    </div>
                    <p className="portfolioItem_description">{text.shortDesc}</p>
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
                                    <p className="textTitle">{text.title}</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>{text.year}</p>
                                </div>
                            </div>
                            <div className="portfolioPopup_description">
                                <p className="portfolioPopup_description_text">{text.desc1}</p>
                                <img className="portfolioPopup_description_imgCenter" src={require("./ARBI/ARBI_arbitrage.gif")}/>
                                <img style={{width: "min(100%, 500px)"}} className="portfolioPopup_description_imgRight" src={require("./ARBI/wbt.png")}/>
                                <p className="portfolioPopup_description_text">{text.desc2}                                </p>
                                <img style={{width: "min(100%, 690px)"}} className="portfolioPopup_description_imgLeft" src={require("./ARBI/ARBI_adaptive.gif")}/>
                                <p className="portfolioPopup_description_text" style={{marginTop: "1.5%"}}>                                    {text.desc3}</p>
                            </div>
                            <p className="portfolioPopup_description_technologies">{text.skills}</p>
                            <div className="aboutMe_skillsGrid" style={{rowGap: "max(calc(100vw * 0.025), 20px)"}}>
                                {techSkills.map(skill => {
                                    return <TechItem data={skill}/>
                                })}
                            </div>
                            <p style={{fontStyle: "italic", fontWeight: "bold", marginTop: "4%"}} className="portfolioPopup_description_text">{text.inDev}</p>
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