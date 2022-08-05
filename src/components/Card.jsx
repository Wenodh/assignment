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

    const handleNav = () => {
        const path = `/${props.data.tag}/${props.data.id}`;
        navigate(path);
    };
    return (
        <div style={card} onClick={handleNav}>
            <div style={inner}>
                <img
                    style={{
                        width: '20px',
                        height: '20px',
                        padding: '12px',
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
                    <h4>{props.data.title}</h4>
                    <p>{props.data.category}</p>
                </div>
            </div>
            <a style={{ paddingTop: '20px' }} href={props.data.link}>
                {props.data.link}
            </a>
            <p style={{ paddingTop: '8px' }}>{props.data.description}</p>
        </div>
    );
};

export default Card;
