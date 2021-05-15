import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import ModelCard from '../ModelCard'
import { usePredefinedModelsState } from './state'
import { usePredefinedModelsStyles } from './styles'
import { Input } from '../../ui/Input'


const PredefinedModelsForm = ({ handleClickPredefinedModels, options=[] }) => {
  const classes = usePredefinedModelsStyles()
  const {
    setModelData,
    simulationName
  } = usePredefinedModelsState({ handleClickPredefinedModels })

  return (
    <Grid
      xs={12}
      container
      item
      direction='column'
      justify="center"
      alignItems="center"
      spacing={1}
    >

      <Grid item xs={6}>
        <Input
          disabled={false}
          required
          fullWidth
          variant="outlined"
          margin="normal"
          autoComplete="simulationName"
          {...simulationName}
        />
      </Grid>

      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p" className={classes.title}>
          Choose one of the predefined models
        </Typography>
      </Grid>

      {options && options.length>0 && <ModelCard
        justify="center"
        alignItems="center"
        direction="column"
        options={options}
        eventEmitted={(data) => { setModelData(data) }}
        disabled={simulationName && simulationName.value ? false : true}
      />}
  
    </Grid>
  )
}

export default PredefinedModelsForm