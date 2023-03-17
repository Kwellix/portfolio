import Popup from "reactjs-popup"

const Wallet = () => {
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem">
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../assets/img/portfolio/Wallet.png")}/>
                        <div className="portfolioItem_titles">
                            <p className="textTitle">Гаманець</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2022 - 2023</p>
                        </div>
                    </div>
                    <p className="portfolioItem_description">Гаманець - це мобільний Android додаток для ведення журналу власних витрат та доходів, з можливістю бекапу та візуалізації даних, створений за допомогою React Native.</p>
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
                                    <p className="textTitle">Гаманець</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>2022 - 2023</p>
                                </div>
                            </div>
                            <img src={require("./Wallet/pincode.gif")}/>
                            <img src={require("./Wallet/plot.gif")}/>
                            <img src={require("./Wallet/settings.gif")}/>
                            <img src={require("./Wallet/stats.gif")}/>
                            <img src={require("./Wallet/transactions.gif")}/>
                        </div>
                    </div>
                </div>
            }
        </Popup>
    )
}

export default Wallet