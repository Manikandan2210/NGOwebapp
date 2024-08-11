
import { Table,TableContainer,TableHead,TableBody,TableRow,TableCell, Paper, Box, Typography,  Button } from '@mui/material';

function Projectresponse() {
  return (
    <div className="App">
      <br/>
     
      <Typography  sx={{
        fontFamily: '-moz-initial',
        fontSize: '20px',
       color: 'primary',
       backgroundColor:'#B2E9F9',
       }} align='center'>PROPOSED PROJECTS</Typography>
       
      <br/>
      <Box mx={17}>
     <TableContainer component={Paper} sx={{maxHeight: '500px'}}>
      <Table aria-label='simple table' stickyHeader> 
        <TableHead>
          <TableRow sx={{border: '1px solid'}}>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width:'500px', align:'center',  fontFamily:'-moz-initial',}}> Project id</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> Title</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> Budget</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> Documentation</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> RESPONSE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row)=>(
          <TableRow
            key = {row.id}
            sx= {{ '&:last-child td, &:last-child th':{border:0 }}}>

            <TableCell sx={{align: 'center'}}>{row.Projectid}</TableCell>
            <TableCell>{row.Title}</TableCell>
            <TableCell>{row.Budget}</TableCell>
            <TableCell>{row.Documentation}</TableCell>
            <TableCell><Button sx={{ backgroundColor:'#D8EFFC', fontFamily:'lowercase'}}>{row.action}</Button> <Button sx={{ backgroundColor:'#D8EFFC', marginleft:'40px', fontFamily:'lowercase'}}>{row.response}</Button></TableCell>
           
            </TableRow>
            ))}
        </TableBody>
      </Table>
     </TableContainer>
     </Box>
    </div>
  );
}

const tableData = [
  {
    Projectid: '1',
    Title: 'Smart vehicle tracking',
    Budget: '30000',
    Documentation:"View Document",
    action:'ACCEPT',
   response:'reject'
  },
  {
    Projectid: '2',
    Title: 'Email Scam detection',
    Budget: '250005',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: '3',
    Title: 'Vehicle Emergency assist',
    Budget: '40000',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: '4',
    Title: 'Online Voting System',
    Budget: '35000',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: '5',
    Title: 'IOT based Farming',
    Budget: '60000',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: '6',
    Title: 'Parking assistant system',
    Budget: '25000',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
  {
    Projectid: 'id',
    Title: 'NAME n',
    Budget: '12345',
    Documentation:"View Document",
    action:'ACCEPT',
    response:'reject'
  },
]

export default Projectresponse;


