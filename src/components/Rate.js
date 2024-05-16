import {FaStar} from 'react-icons/fa';
import './Rate.css';

export default function Rate({rate, count}) {

    let stars = [];
    for (let i = 0; i < Math.round(rate); i ++) {
        stars.push(<FaStar key={i} className={'star'}/>);
    }

    return (
        <div className={'stars'}>
            {stars}
            <span key={'count'} className={'rate-count'}>({count})</span>
        </div>
    )
}