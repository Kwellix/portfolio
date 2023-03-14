import Popup from "reactjs-popup"

const ARBI = () => {
    return (
        <Popup
            trigger={
                <div className="portfolioItem">
                    <img className="portofolioItem_icon" src={require("../assets/img/portfolio/ARBI.png")}/>
                    <div className="portofolioItem_text">
                        <div className="portofolioItem_titles">
                            <p className="textTitle">ARBI</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2023</p>
                        </div>
                        <p className="portofolioItem_description">ARBI - це повноцінний веб-додаток для автоматизації процесу торгівлі на криптовалютних біржах, створений за допомогою стеку MERN. </p>
                    </div>
                </div>
            }
        >
        </Popup>
    )
}

export default ARBI