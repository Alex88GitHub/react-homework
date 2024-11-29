import './index.css';
import Message from '../Message';
import Response from '../Response';
import Typing from '../Typing';

const MessageHistory = ({list = []}) => {

    if (list.length === 0) return null;

    return (
        <ul>
            {list.map((listItem) => {
                let content;

                switch (listItem.type) {
                    case 'message':
                        content = <Message {...listItem} />;
                        break;
                    case 'response':
                        content = <Response {...listItem} />;
                        break;
                    case 'typing':
                        content = <Typing {...listItem} />;
                        break;
                    default:
                        content = null;
                }
             
                return (
                    <li className='clearfix' key={listItem.id}>{content}</li>
                );
            })}
        </ul>
    );

};

export default MessageHistory;