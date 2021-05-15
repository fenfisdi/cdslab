import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import SnackbarComponent from '@components/ui/Snackbars'
import FixedParametersFormStateVariables from '../../../components/CompartmentalModels/FixedParameters/children/FixedParametersFormStateVariables'
import { useCompartmentalConfigureStateVariablesPageState } from './state'
import SupportComponent from '../../../components/SupportComponent'
import { HELP_INFORMATION_CONFIGURE_STATE_VARIANLES_SIMULATIONS } from '../../../constants/helpInformation'
import LoaderComponent from '../../../components/ui/Loader'

const CompartmentalConfigureStateVariablesPage = () => {
  const [showSnack, setShowSnack] = useState({ show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  const {     
    currentSimulation, 
    predefinedModelSelected:{modelData}, 
    executeRequestConfigureStateVariables }= useCompartmentalConfigureStateVariablesPageState({showSnack, setShowSnack })
  
  const handleCloseSnack = () => {
    setShowSnack({ ...showSnack, show: false, success: false, error: false, successMessage: '', errorMessage: '' })
  }

  return (
    <Grid container item xs={11} justify="center" alignItems="center" direction="column">  

      <Grid container item xs={12} 
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        <p></p>
        <SupportComponent text={HELP_INFORMATION_CONFIGURE_STATE_VARIANLES_SIMULATIONS}/>
      </Grid>


      <Grid container item xs={6} justify="center" alignItems="center" direction="column">
        <Typography variant="body2" component="p">
        Configure State Variables Initial Values
        </Typography>
      </Grid>    

      {modelData && modelData.state_variables && <FixedParametersFormStateVariables
        fieldsSchema={modelData.state_variables}
        executeRequestConfigureStateVariables={executeRequestConfigureStateVariables}
        valuesFieldParameters={currentSimulation && currentSimulation.state_variable_limits}
      />}

      {!modelData  && <LoaderComponent
        width={50}
        height={50}
        marginTop={5}
      />}

      {showSnack && showSnack.show && <SnackbarComponent
        snackDuration={3500}
        configData={showSnack}
        handleCloseSnack={handleCloseSnack}
        successMessage={showSnack.successMessage}
        errorMessage={showSnack.errorMessage} />}
      

    </Grid>

  )
}

export default CompartmentalConfigureStateVariablesPage