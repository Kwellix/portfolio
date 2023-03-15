import Popup from "reactjs-popup"

const ARBI = () => {
    return (
        <Popup
            trigger={
                <div className="portfolioItem">
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../assets/img/portfolio/ARBI.png")}/>
                        <div className="portfolioItem_titles">
                            <p className="textTitle">ARBI</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2023</p>
                        </div>
                    </div>
                    <p className="portfolioItem_description">ARBI - це повноцінний веб-додаток для автоматизації процесу торгівлі на криптовалютних біржах, створений за допомогою стеку MERN. </p>
                </div>
            }
        >
        </Popup>
    )
}

export default ARBI