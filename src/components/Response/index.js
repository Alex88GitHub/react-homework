const Response = (props) => {
    return(
        <>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{props.from.name}</span>
                <span className="message-data-time">{props.time}</span>
                
            </div>
            <div className="message my-message">{props.text}</div>
        </>
    );
};

export default Response;