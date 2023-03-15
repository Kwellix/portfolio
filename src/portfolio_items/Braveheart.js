import Popup from "reactjs-popup"

const Braveheart = () => {
    return (
        <Popup
            trigger={
                <div className="portfolioItem" style={{marginTop: "5%"}}>
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
        </Popup>
    )
}

export default Braveheart