import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  tableCell: {
    'border':'1px  solid #cebaba',
    '&.red':{
      color:'red'
    }
  },
  TableContainer:{
    overflow: 'visible'
  }
})

function createData(name, calories, ) {
  return { name, calories }
}

const rows = [
  createData('', ''),
  createData('', '')
]

export default function TableFormat({Variable='Variable'}) {
  const classes = useStyles()

  return (
    
    <TableContainer component={Paper} className={classes.TableContainer}>
      <Table >
        
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>Date</TableCell>
            <TableCell align="center" className={`${classes.tableCell} red`}>{Variable?Variable:'Variable'}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" className={classes.tableCell}></TableCell>
              <TableCell align="center" className={classes.tableCell}></TableCell>                            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
