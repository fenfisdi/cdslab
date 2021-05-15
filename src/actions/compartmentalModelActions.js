import { findCompartmentalSimulationService, findPredefinedModelService, getPredefinedModelsService, storeCompartmentalSimulationService, updateCompartmentalSimulationService } from '../services/compartmentalModelServices'
import {
  COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR,
  COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_PREDEFINED_MODEL_SELECTED,
  COMPARTMENTAL_MODEL_LOADING,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR
} from './types/compartmentalModelTypes'

export const useCompartmentalModelActions = (dispatch) => {
  /**
     * @param {*} userForm {username, name, lastname}
     * @param {*} userQrValidation {username, name, lastname}
     */
  const registerModelParameters = () => {
    dispatch({ type: COMPARTMENTAL_MODEL_LOADING })
  }

  const  registerCompartmentalModelStore = (response) => {
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS,
      payload: response.data.data
    })
  }

  const registerCompartmentalSimulation = (data) =>{
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS,
      payload: data
    })
  }

  const registerErrorCompartmentalSimulation =(error)=>{
    if(error.response) {          
      const {response:{data}}=error                    
      dispatch({
        type: COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR,
        payload: data 
      })
    }else if(error.request){
      dispatch({
        type: COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR,
        payload:{message:'The request was made but no response was received'}
      })
    }
  }

  const getPredefinedModels = () => {  
    
    getPredefinedModelsService()
      .then((response) => {        
        dispatch({
          type: COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        if(error.response) {          
          const {response:{data}}=error                    
          dispatch({
            type: COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR,
            payload: data 
          })
        }else if(error.request){
          dispatch({
            type: COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR,
            payload:{message:'The request was made but no response was received'}
          })
        }
      })
  }


  const storePredefinedModelSelected =(predefinedModel)=>{
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_PREDEFINED_MODEL_SELECTED,
      payload: predefinedModel
    })
  }

  const setDefinitionCompartmentalSimulation =(simulation)=>{
    dispatch({
      type: COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS,
      payload: simulation
    })
  }


  const storeCompartmentalSimulation =(simulation)=>{
    storeCompartmentalSimulationService(simulation).then((response)=>{      
      registerCompartmentalModelStore(response)
    }).catch((error) => {
      registerErrorCompartmentalSimulation(error)
    })
  }

  const findCompartmentalSimulation =(idSimulation)=>{
    
    findCompartmentalSimulationService(idSimulation).then((response)=>{      
      registerCompartmentalModelStore(response)
    })
  }
  

  const findPredefinedModel =({model_id:idModel,simulationName})=>{
    
    findPredefinedModelService(idModel).then((response)=>{            
      const modelData = response.data.data
      storePredefinedModelSelected({modelData,simulationName})
    })
    
  }

  const updateCompartmentalSimulation =(simulation,idSimulation)=>{
    
    updateCompartmentalSimulationService(simulation,idSimulation).then((response)=>{      
      registerCompartmentalSimulation(response.data.data)
    }).catch((error) => {
      registerErrorCompartmentalSimulation(error)
    })
  }
  




  return { 
    registerModelParameters, 
    getPredefinedModels, 
    storePredefinedModelSelected,
    storeCompartmentalSimulation,
    findCompartmentalSimulation,
    findPredefinedModel,
    setDefinitionCompartmentalSimulation,
    updateCompartmentalSimulation }


}