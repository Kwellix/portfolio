import Popup from "reactjs-popup"

const LNTU = () => {
    return (
        <Popup
            trigger={
                <div className="portfolioItem" style={{marginTop: "5%"}}>
                    <img className="portofolioItem_icon" style={{marginLeft: 7, marginRight: 3}} src={require("../assets/img/portfolio/LNTU.png")}/>
                    <div className="portofolioItem_text">
                        <div className="portofolioItem_titles">
                            <p className="textTitle">Редизайн вебсайту ЛНТУ</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2022</p>
                        </div>
                        <p className="portofolioItem_description">Повноцінний редизайн сайту Луцького націо-нального технічого університету та верстка макету.</p>
                    </div>
                </div>
            }
        >
        </Popup>
    )
}

export default LNTU