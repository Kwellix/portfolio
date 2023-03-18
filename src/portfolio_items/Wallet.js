import Popup from "reactjs-popup"
import TechItem from "../components/TechItem";
import React from "react";

const Wallet = (props) => {
    let text = props.data
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem">
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../assets/img/portfolio/Wallet.png")}/>
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
                                <img className="portfolioItem_icon_popup" src={require("../assets/img/portfolio/Wallet.png")}/>
                                <div className="portfolioItem_titles_popup">
                                    <p className="textTitle">{text.title}</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>{text.year}</p>
                                </div>
                            </div>
                            <div className="portfolioPopup_description">
                                <img style={{width: "min(100%, 350px)"}} className="portfolioPopup_description_imgRight" src={require("./Wallet/stats.gif")}/>
                                <img style={{width: "min(100%, 350px)", marginLeft: "3%"}} className="portfolioPopup_description_imgRight" src={require("./Wallet/transactions.gif")}/>
                                <p className="portfolioPopup_description_text">{text.desc1}                                </p>
                                <p className="portfolioPopup_description_text">{text.desc2}                                </p>
                                <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                                    <img style={{width: "min(100%, 350px)"}} className="portfolioPopup_description_imgCenter" src={require("./Wallet/plot.gif")}/>
                                    <img style={{width: "min(100%, 350px)", marginLeft: "2%", marginRight: "2%"}} className="portfolioPopup_description_imgCenter"
                                         src={require("./Wallet/settings.gif")}/>
                                    <img style={{width: "min(100%, 350px)"}} className="portfolioPopup_description_imgCenter" src={require("./Wallet/pincode.gif")}/>
                                </div>
                            </div>
                            <p className="portfolioPopup_description_technologies">{text.skills}</p>
                            <div className="aboutMe_skillsGrid" style={{rowGap: "max(calc(100vw * 0.025), 20px)"}}>
                                {techSkills.map(skill => {
                                    return <TechItem data={skill}/>
                                })}
                            </div>
                            <a
                                href="https://mega.nz/file/GcZRnTAB#EDCSS7g-ZNH3xelh5nMY9pffUcc99hQ0DFfpXXea2eU"
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

export default Wallet

const techSkills = [
    {
        title: "JavaScript",
        icon: require("../assets/img/tech/js.png")
    },
    {
        title: "React Native",
        icon: require("../assets/img/tech/reactNative.png")
    },
    {
        title: "Firebase",
        icon: require("../assets/img/tech/firebase.png")
    },
    {
        title: "Axios",
        icon: require("../assets/img/tech/axios.png")
    },
    {
        title: "Expo",
        icon: require("../assets/img/tech/expo.png")
    },
    {
        title: "npm",
        icon: require("../assets/img/tech/npm.png")
    },
    {
        title: "Figma",
        icon: require("../assets/img/tech/figma.png")
    }
]