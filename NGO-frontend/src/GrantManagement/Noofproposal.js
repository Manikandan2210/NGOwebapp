
import { Table,TableContainer,TableHead,TableBody,TableRow,TableCell, Paper, Box, Typography,  Button } from '@mui/material';

function Noofproposal() {

  
  return (
    <div className="App">
      <br/>
     
      <Typography  sx={{
        fontFamily: '-moz-initial',
        fontSize: '20px',
       color: 'primary',
       backgroundColor:'#B2E9F9',
       }} align='center'>Total Number of Proposal</Typography>
       
      <br/>
      <Box mx={17}>
     <TableContainer component={Paper} sx={{maxHeight: '500px'}}>
      <Table aria-label='simple table' stickyHeader> 
        <TableHead>
          <TableRow sx={{border: '1px solid'}}>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width:'500px', align:'center',  fontFamily:'-moz-initial',}}>S.No</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> Proposal Name</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> RESPONSE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row)=>(
          <TableRow
            key = {row.id}
            sx= {{ '&:last-child td, &:last-child th':{border:0 }}}>

            <TableCell sx={{align: 'center'}}>{row.sno}</TableCell>
            <TableCell>{row.name}</TableCell>
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
    sno: '1',
    name: 'Project name',
    action:'View',
   response:'reject'
  },
  {
    sno: '2',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '3',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '4',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '5',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '6',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '7',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '8',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '9',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '10',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '11',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '12',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '13',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '14',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '15',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '16',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '17',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
  {
    sno: '18',
    name: 'Project Name',
    action:'VIEW',
    response:'reject'
  },
]

export default Noofproposal;

