import Popup from "reactjs-popup"
import TechItem from "../../components/TechItem";
import React from "react";

const LNTU = (props) => {
    let text = props.data
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem">
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../../assets/img/portfolio/LNTU.png")}/>
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
                            <img className="closeIcon" onClick={close} src={require("../../assets/img/icons/close.png")}/>
                            <div className="portfolioItem_text_popup">
                                <img className="portfolioItem_icon_popup"
                                     src={require("../../assets/img/portfolio/LNTU.png")}/>
                                <div className="portfolioItem_titles_popup">
                                    <p className="textTitle">{text.title}</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>{text.year}</p>
                                </div>
                            </div>
                            <p className="portfolioPopup_description_text">{text.desc1}</p>
                            <img style={{width: "100%", marginTop: "1%", marginBottom: "2%"}} src={require("./LNTU.png")}/>
                            <p className="portfolioPopup_description_technologies">{text.skills}</p>
                            <div className="aboutMe_skillsGrid" style={{rowGap: "max(calc(100vw * 0.025), 20px)", justifyContent: "flex-start"}}>
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

export default LNTU

const techSkills = [
    {
        title: "JavaScript",
        icon: require("../../assets/img/tech/js.png")
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
        title: "Figma",
        icon: require("../../assets/img/tech/figma.png")
    },
    {
        title: "Photoshop",
        icon: require("../../assets/img/tech/photoshop.png")
    }
]