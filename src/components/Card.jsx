import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    let navigate = useNavigate();
    // console.log(props);
    const card = {
        display: 'flex',
        flexDirection: 'column',
        width: '360px',
        height: '192px',
        borderRadius: '4px',
        border: '1px  solid  #D7DFE9',
        padding: '24px 24px 0px',
        margin: '16px',
        backgroundColor: 'white',
    };
    const inner = {
        display: 'flex',
        justifyContent: 'flex-start',
    };

    //to view  resource item full details
    const handleNav = () => {
        const path = `/${props.data.tag}/${props.data.id}`;
        navigate(path);
    };
    return (
        <div style={card} onClick={handleNav}>
            <div style={inner}>
                <img
                    style={{
                        width: '44px',
                        height: '44px',
                        border: '2px solid #D7DFE9',
                        borderRadius: '4px',
                    }}
                    src={props.data.icon_url}
                    alt=""
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: '16px',
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'HK Grotesk',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            color: '#171F46',
                            margin: '0',
                        }}
                    >
                        {props.data.title}
                    </p>
                    <p
                        style={{
                            fontFamily: 'HK Grotesk',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '12px',
                            color: '#7E858E',
                            margin: '0',
                        }}
                    >
                        {props.data.category}
                    </p>
                </div>
            </div>
            <a
                style={{ paddingTop: '20px', fontSize: '14px' }}
                href={props.data.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.data.link}
            </a>
            <p style={{ paddingTop: '8px' }}>{props.data.description}</p>
        </div>
    );
};

export default Card;
