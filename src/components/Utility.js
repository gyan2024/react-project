export const getStatusAndPriority = (tickets) => {
    const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
    const prioritySet=['0', '4', '3', '2', '1'];
    return {
      STATUS: statusOrder,
      PRIORITY: prioritySet
    };
  };
  
export const groupAndSortTickets = (grouping, ordering, ticketsArray) => {
// Grouping the tickets
const groupedTickets = ticketsArray.reduce((groups, ticket) => {
    let groupKey;

    // Group by 'status', 'user', or 'priority'
    if (grouping === 'status') {
    groupKey = ticket.status;
    } else if (grouping === 'user') {
    groupKey = ticket.userId;
    } else if (grouping === 'priority') {
    groupKey = ticket.priority;
    }

    // If the group doesn't exist, initialize it
    if (!groups[groupKey]) {
    groups[groupKey] = [];
    }

    // Push the ticket to the appropriate group
    groups[groupKey].push(ticket);

    return groups;
}, {});

// Convert the object into an array of groups
const groupedArray = Object.keys(groupedTickets).map(key => {
    return {
    group: key,
    tickets: groupedTickets[key]
    };
});

// Sorting the tickets within each group based on 'priority' or 'title'
groupedArray.forEach(group => {
    group.tickets.sort((a, b) => {
    if (ordering === 'priority') {
        return b.priority-a.priority; // Sort by priority in descending order
    } else if (ordering === 'title') {
        return a.title.localeCompare(b.title); // Sort by title alphabetically
    }
    return 0; // Default to no sorting if the ordering is not recognized
    });
});

// Return the array containing each group with sorted tickets
return groupedArray;
};
  