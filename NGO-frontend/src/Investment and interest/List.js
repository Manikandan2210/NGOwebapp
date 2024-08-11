import * as React from 'react';
//import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SummarizeIcon from '@mui/icons-material/Summarize';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TableChartIcon from '@mui/icons-material/TableChart';
 function List() {
  return (
    <div className="App"> 
            <div 
                className="head"
                style={{ 
                    margin: "auto", 
                    align:'center',
                    
                }} 
            > 
                <h1 
                    style={{ 
                        color: "#0C415F", 
                        align:"center",
                        marginLeft:"520px"
                    }} 
                > 
                  Investment 
                </h1> 
                </div>
                
            
                <strong style={{marginLeft:'510px', backgroundColor:'#D8EFFC'}}>Edit the investment details</strong>

            
    
    <Card sx={{ width: '100%', maxWidth: 300, margin:'auto', marginTop:'20px',  bgcolor: '#D8EFFC', padding:'40px' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Form of Investment" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SummarizeIcon />
              </ListItemIcon>
              <ListItemText primary="Generate the report" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Interest Receipt" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        
      </nav>
    </Card>
    </div>
  );
}
export default List;