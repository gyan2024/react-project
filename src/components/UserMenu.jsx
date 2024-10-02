import userCss from './UserMenu.module.css'; // Assuming the CSS file is named UserMenu.css

export default function UserMenu({onUpdateOrder, onUpdateGroup, group, order}) {
    return (
        <div className={userCss.user_menu}>
            {/* <button onClick={()=>onUpdateGroup('priority')}>click</button> */}
            <ul className={userCss.menu_list}>
                <li className={userCss.label}>Grouping</li>
                <li>
                    <select className={userCss.dropdown} onChange={(obj)=>onUpdateGroup(obj.target.value)}>
                        <option value="status" selected={group==='status'}>Status</option>
                        <option value="user" selected={group==='user'}>User</option>
                        <option value="priority" selected={group==='priority'}>Priority</option>
                    </select>
                </li>
            </ul>
            <ul className={userCss.menu_list}>
                <li className={userCss.label}>Ordering</li>
                <li>
                    <select className={userCss.dropdown} onChange={(obj)=>onUpdateOrder(obj.target.value)}>
                        <option value="priority" selected={order==='priority'} onClick={()=>onUpdateOrder('priority')}>Priority</option>
                        <option value="title" selected={order==='title'} onClick={()=>onUpdateOrder('title')}>Title</option>
                    </select>
                </li>
            </ul>
        </div>
    );
}
