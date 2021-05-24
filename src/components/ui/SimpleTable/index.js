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
  table: {
    minWidth: 650,
  },
})

const Simpletable = ({titles, rows, cellNames, param, handleComponent}) => {
  const classes = useStyles()

  const tableCell = (item, index) =>
    cellNames.map((nameItem) => (
      <TableCell key={nameItem}>{ nameItem === param ? handleComponent(item, index) : item[nameItem]}</TableCell>
    ))

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {titles.map((title) => (
              <TableCell key={title.name}>{ title }</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.process}>
              {tableCell(row, index)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Simpletable