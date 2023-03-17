import Popup from "reactjs-popup"

const Braveheart = () => {
    return (
        <Popup
            modal
            arrow={false}
            trigger={
                <div className="portfolioItem">
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../assets/img/portfolio/Braveheart.png")}/>
                        <div className="portfolioItem_titles">
                            <p className="textTitle">Braveheart</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2023</p>
                        </div>
                    </div>
                    <p className="portfolioItem_description">Braveheart - це браузерна 2D гра у стилі pixel-art. Головне завдання гри - знайти вихід з лабіринту. Гра створена за допомогою “чистого” JavaScript та засобів HTML Canvas.</p>
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
                                    <p className="textTitle">Braveheart</p>
                                    <p className="edAndWork_block_years" style={{marginTop: 5}}>2023</p>
                                </div>
                            </div>
                            <img src={require("./Braveheart/bh1.gif")}/>
                            <img src={require("./Braveheart/bh2.gif")}/>
                            <img src={require("./Braveheart/bh3.gif")}/>
                        </div>
                    </div>
                </div>
            }
        </Popup>
    )
}

export default Braveheart