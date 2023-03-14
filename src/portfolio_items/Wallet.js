import Popup from "reactjs-popup"

const Wallet = () => {
    return (
        <Popup
            trigger={
                <div className="portfolioItem" style={{marginTop: "5%"}}>
                    <img className="portofolioItem_icon" src={require("../assets/img/portfolio/Wallet.png")}/>
                    <div className="portofolioItem_text">
                        <div className="portofolioItem_titles">
                            <p className="textTitle">Гаманець</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2023</p>
                        </div>
                        <p className="portofolioItem_description">Гаманець - це мобільний Android додаток для ведення журналу власних витрат та доходів, з можливістю бекапу та візуалізації даних, створений за допомогою React Native.</p>
                    </div>
                </div>
            }
        >
        </Popup>
    )
}

export default Wallet