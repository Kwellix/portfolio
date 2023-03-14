import Popup from "reactjs-popup"

const Braveheart = () => {
    return (
        <Popup
            trigger={
                <div className="portfolioItem" style={{marginTop: "5%"}}>
                    <img className="portofolioItem_icon" src={require("../assets/img/portfolio/Braveheart.png")}/>
                    <div className="portofolioItem_text">
                        <div className="portofolioItem_titles">
                            <p className="textTitle">Braveheart</p>
                            <p className="edAndWork_block_years" style={{marginTop: 5}}>2023</p>
                        </div>
                        <p className="portofolioItem_description">Braveheart - це браузерна 2D гра у стилі pixel-art. Головне завдання гри - знайти вихід з лабіринту. Гра створена за допомогою “чистого” JavaScript та засобів HTML Canvas.</p>
                    </div>
                </div>
            }
        >
        </Popup>
    )
}

export default Braveheart