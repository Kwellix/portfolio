import Popup from "reactjs-popup"

const ARBI = () => {
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem">
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
                            <div className="portfolioItem_text">
                                <img className="portfolioItem_icon_popup" src={require("../assets/img/portfolio/ARBI.png")}/>
                                <div className="portfolioItem_titles_popup">
                                    <p className="textTitle">ARBI</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>2022 - 2023</p>
                                </div>
                            </div>
                            <img src={require("./ARBI/ARBI_login.gif")}/>
                            <img style={{width: "80%"}} src={require("./ARBI/ARBI_profile.gif")}/>
                        </div>
                    </div>
                </div>
            }
        </Popup>
    )
}

export default ARBI