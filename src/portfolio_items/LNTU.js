import Popup from "reactjs-popup"

const LNTU = () => {
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem">
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" style={{marginLeft: 7, marginRight: 3}} src={require("../assets/img/portfolio/LNTU.png")}/>
                        <div className="portfolioItem_titles">
                            <p className="textTitle">Редизайн вебсайту ЛНТУ</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2022</p>
                        </div>
                    </div>
                    <p className="portfolioItem_description">Повноцінний редизайн сайту Луцького національного технічого університету та верстка макету.</p>
                </div>
            }
        >
            {close =>
                <div className="portfolioPopup">
                    <div className="portfolioPopup_bg">
                        <div className="portfolioPopup_content">
                            <img className="closeIcon" onClick={close} src={require("../assets/img/icons/close.png")}/>
                            <div className="portfolioItem_text_popup">
                                <img className="portfolioItem_icon_popup" src={require("../assets/img/portfolio/LNTU.png")}/>
                                <div className="portfolioItem_titles_popup">
                                    <p className="textTitle">Редизайн вебсайту ЛНТУ</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>2022</p>
                                </div>
                            </div>
                            <img style={{width: "100%"}} src={require("./LNTU.png")}/>
                        </div>
                    </div>
                </div>
            }
        </Popup>
    )
}

export default LNTU