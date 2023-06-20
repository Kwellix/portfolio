import Popup from "reactjs-popup"
import React from "react";
import TechItem from "../../components/TechItem";

const STSU = (props) => {
    let text = props.data
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem">
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../../assets/img/portfolio/STSU.png")}/>
                        <div className="portfolioItem_titles">
                            <p className="textTitle">{text.title}</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>{text.stack}</p>
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
                            <img className="closeIcon" onClick={close}
                                 src={require("../../assets/img/icons/close.png")}/>
                            <div className="portfolioItem_text_popup">
                                <img className="portfolioItem_icon_popup"
                                     src={require("../../assets/img/portfolio/STSU.png")}/>
                                <div className="portfolioItem_titles_popup">
                                    <p className="textTitle">{text.title}</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>{text.year}</p>
                                </div>
                            </div>
                            <div className="portfolioPopup_description">
                                <p className="portfolioPopup_description_text">{text.desc1}</p>
                                <img className="portfolioPopup_description_imgCenter" src={require("./stsu.gif")}/>
                            </div>
                            <p className="portfolioPopup_description_technologies">{text.skills}</p>
                            <div className="aboutMe_skillsGrid"
                                 style={{rowGap: "max(calc(100vw * 0.025), 20px)", justifyContent: "flex-start"}}>
                                {techSkills.map(skill => {
                                    return <TechItem data={skill} key={skill.title}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Popup>
    )
}

export default STSU

const techSkills = [
    {
        title: "TypeScript",
        icon: require("../../assets/img/tech/typescript.jpg")
    },
    {
        title: "HTML5",
        icon: require("../../assets/img/tech/html5.png")
    },
    {
        title: "CSS",
        icon: require("../../assets/img/tech/css.png")
    },
    {
        title: "React",
        icon: require("../../assets/img/tech/react.png")
    },
    {
        title: "Vite",
        icon: require("../../assets/img/tech/vite.png")
    }
]