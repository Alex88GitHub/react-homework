
const Message = (props) => {
    return(
        <>
            <div className="message-data align-right">
                <span className="message-data-time">{props.time}</span>
                <span className="message-data-name">{props.from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">{props.text}</div>
        </>
    );
};

export default Message;