import React from "react";

const TechItem = (props) => {
    return (
        <div>
            <div className="techItem_photo">
                <img src={props.data.icon}/>
            </div>
            <div className="techItem_description">
                <p className="techItem_description_title">{props.data.title}</p>
            </div>
        </div>
    )
}

export default TechItem