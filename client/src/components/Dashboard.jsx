import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import TableViewIcon from '@mui/icons-material/TableView';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const navList = [
        { id: 1, name: 'Form Page', icon: <TableViewIcon />,  route: '/' },
        { id: 2, name: 'Result List', icon: <TableViewIcon />, route: '/Result_list' },
    ]
    
    return (
        <List>
        {
            navList.map(list => (
                <ListItem button key={list.id}>
                    <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                    <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} style={{fontSize: 'bold'}}/>
                    </Link>
                </ListItem>
            ))
        }
        </List>
    )
}

export default Dashboard;
