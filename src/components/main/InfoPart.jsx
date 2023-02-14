function InfoPart(props) {
    return (
        <div className="infoPart">
            <div className={props
            .className}>
                <p className="infoTitle">{props.title}</p>
                <p className="infoContent">{props.content}</p>
            </div>
        </div>
    );
}

export default InfoPart;