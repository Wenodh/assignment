import CircleImg from './CircleImg';
import './resourceCard.css';

const ResourceCard = ({ icon_url, title, link, description }) => {
    return (
        <div className="cardBody">
            <div className="cardIcon">
                <CircleImg src={icon_url} size="64px" br="2px" />
                <div className="cardSub">
                    <p className="title">{title}</p>
                    <p className="link">{link}</p>
                </div>
            </div>
            <p className="des">{description}</p>
        </div>
    );
};

export default ResourceCard;
