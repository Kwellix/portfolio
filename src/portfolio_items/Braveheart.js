import Popup from "reactjs-popup"
import React from "react";
import TechItem from "../components/TechItem";

const Braveheart = (props) => {
    let text = props.data
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem">
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../assets/img/portfolio/Braveheart.png")}/>
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
                                <img className="portfolioItem_icon_popup" src={require("../assets/img/portfolio/Braveheart.png")}/>
                                <div className="portfolioItem_titles_popup">
                                    <p className="textTitle">{text.title}</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>{text.year}</p>
                                </div>
                            </div>
                            <div style={{overflow: "hidden"}}>
                                <img style={{width: "min(100%, 680px)"}} className="portfolioPopup_description_imgRight" src={require("./Braveheart/bh1.gif")}/>
                                <p className="portfolioPopup_description_text">{text.desc1}</p>
                            </div>
                            <div style={{overflow: "hidden"}}>
                                <img style={{width: "min(100%, 665px)"}} className="portfolioPopup_description_imgLeft" src={require("./Braveheart/bh2.gif")}/>
                                <p style={{marginTop: "1.5%"}} className="portfolioPopup_description_text">{text.desc2} </p>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", marginTop: "2%"}}>
                                <img style={{width: "min(100%, 690px)", marginBottom: "2%"}} src={require("./Braveheart/bh3.gif")}/>
                            </div>
                            <p className="portfolioPopup_description_technologies">{text.skills}</p>
                            <div className="aboutMe_skillsGrid" style={{rowGap: "max(calc(100vw * 0.025), 20px)", justifyContent: "flex-start"}}>
                                {techSkills.map(skill => {
                                    return <TechItem data={skill}/>
                                })}
                            </div>
                            <a
                                href="http://breaveheart.infinityfreeapp.com/?i=3"
                                className="portfolioPopup_description_link"
                                target="_blank">
                                {text.download}
                            </a>
                        </div>
                    </div>
                </div>
            }
        </Popup>
    )
}

export default Braveheart


const techSkills = [
    {
        title: "JavaScript",
        icon: require("../assets/img/tech/js.png")
    },
    {
        title: "HTML Canvas",
        icon: require("../assets/img/tech/htmlCanvas.png")
    },
    {
        title: "CSS",
        icon: require("../assets/img/tech/css.png")
    },
    {
        title: "Photoshop",
        icon: require("../assets/img/tech/photoshop.png")
    }
]