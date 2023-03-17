import Popup from "reactjs-popup"

const LNTU = () => {
    return (
        <Popup
            trigger={
                <div className="portfolioItem" style={{marginTop: "5%"}}>
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
        </Popup>
    )
}

export default LNTU