
import { Table,TableContainer,TableHead,TableBody,TableRow,TableCell, Paper, Box, Typography,   } from '@mui/material';

function Report() {

  
  return (
    <div className="App">
      <br/>
     
      <Typography  sx={{
        fontFamily: '-moz-initial',
        fontSize: '20px',
       color: 'primary',
       backgroundColor:'#B2E9F9',
       }} align='center'>REPORT</Typography>
       
      <br/>
      <Box mx={17}>
     <TableContainer component={Paper} sx={{maxHeight: '600px'}}>
      <Table aria-label='simple table' stickyHeader> 
        <TableHead>
          <TableRow sx={{border: '1px solid'}}>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width:'500px', align:'center',  fontFamily:'-moz-initial',}}> Grant Record</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> Expenditure</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> Grant Balance</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> Interest earned on grant funds</TableCell>
            
            </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row)=>(
          <TableRow
            key = {row.id}
            sx= {{ '&:last-child td, &:last-child th':{border:0 }}}>

            <TableCell sx={{align: 'center'}}>{row.Grantrecord}</TableCell>
            <TableCell>{row.Expenditure}</TableCell>
            <TableCell>{row.Balance}</TableCell>
            <TableCell>{row.interest}</TableCell>
           
           
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
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

   
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
  {
    Grantrecord: 'id',
    Expenditure: 'Expenditure amt',
    Balance: 'Blance amt',
    interest:"interst amt",

    
  },
]

export default Report;


