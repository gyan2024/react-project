import './Card.css';
import { mapping } from './Mapping.js';
// import { UserNameMapping } from './UserNameMapping';

// const async function xyz() {
//     const response=await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
//     const data=await response.json();
//     return data.tickets;
// }
export default function Card({ticket}) {
    // const ticket=xyz();

    return (
        <div className="card-container">
            <div className="card-header">
                <p>{ticket.id}</p>
                <img src={mapping[ticket.userId]} alt="Profile" />
            </div>

            <div className="card-title">
                {ticket.title}
            </div>

            <div className="feature-section">
                <div className="feature-icon">!</div>
                <span className="feature-label">
                <img className="img" src='filled_circle.png'/>
                <p>{ticket.tag[0]}</p>
                </span>
                
            </div>
        </div>
    );
}
