import { groupAndSortTickets } from "./Utility.js";
import { tickets } from "../Tickets.js";
import Column from "./Column.jsx";
import bodyCss from './Body.module.css';
import { mapping } from "./Mapping.js";

export default function Body({ group, order }) {
  //   const TICKETS = tickets.tickets;
  //   const USERS = tickets.users;
  //   const { STATUS, PRIORITY } = getStatusAndPriority(TICKETS);
  const orderedAndGroups = groupAndSortTickets(group, order, tickets.tickets);

  return (
    <div className={bodyCss.container}>
      {orderedAndGroups.map((grp) => {
        console.log(grp);
        return <Column group={grp} key={grp.group} />
      })}
    </div>
  );
}
