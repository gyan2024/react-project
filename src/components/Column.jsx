import { mapping } from "./Mapping.js";
import { UserNameMapping } from "./UserNameMapping.js";
import './Column.css';
import Card from "./Card.jsx";

export default function Column({ group }) {
  return (
    <div>
      <header className="column_header">
        <span>
          <img src={mapping[group.group]} alt="Wait..." />
          <p className="column_group_name">{UserNameMapping[group.group]} {group.tickets.length}</p>
          {/* <p className="column_count">{group.count}</p> */}
          
          <span className="rightSpan">
          <img src="add.svg" alt="Wait..." />
          <img src="3_dot_menu.svg" alt="Wait..." />
          </span>

        </span>
      </header>
      {console.log(group.tickets[0].id)}
      
      <ul>
        {
            group.tickets.map((ticket)=>{
                return <li className="li" key={ticket.id}>
                        <Card ticket={ticket}/>
                    </li>
            })
        }
      </ul>
    </div>
  );
}
