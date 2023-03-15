import Popup from "reactjs-popup"

const Wallet = () => {
    return (
        <Popup
            trigger={
                <div className="portfolioItem" style={{marginTop: "5%"}}>
                    <div className="portfolioItem_text">
                        <img className="portfolioItem_icon" src={require("../assets/img/portfolio/Wallet.png")}/>
                        <div className="portfolioItem_titles">
                            <p className="textTitle">Гаманець</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2023</p>
                        </div>
                    </div>
                    <p className="portfolioItem_description">Гаманець - це мобільний Android додаток для ведення журналу власних витрат та доходів, з можливістю бекапу та візуалізації даних, створений за допомогою React Native.</p>
                </div>
            }
        >
        </Popup>
    )
}

export default Wallet