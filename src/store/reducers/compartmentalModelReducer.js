
import {
  COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR,
  COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS,
  COMPARTMENTAL_MODEL_LOADING,
  COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_ERROR,
  COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_SUCCESS,
  COMPARTMENTAL_MODEL_STORE_PREDEFINED_MODEL_SELECTED,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR,
  COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS
} from '../../actions/types/compartmentalModelTypes'


export const initialState = {
  compartmentalModel: {
    configuredParameters: {
      data: null,
      error: null,
      errorData: null,
    },
    predefinedModels: {
      data: null,
      error: null,
      errorData: null,
    },
    predefinedModelSelected:{},
    currentSimulation:{
      data: null,
      error: null,
      errorData: null,
    },
    loading: false
  }
}

export const compartmentalModelReducer = (state, action) => {
  switch (action.type) { 
  case COMPARTMENTAL_MODEL_LOADING: 
    return { ...state, loading: true }

  case COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_ERROR:
    return {
      ...state, loading: false, sendEmailData: { error: true, errorData: action.payload }
    }

  case COMPARTMENTAL_MODEL_REGISTER_PARAMETERS_SUCCESS:
    return {
      ...state, loading: false, sendEmailData: { error: false, data: action.payload }
    }

  case COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_ERROR:
    return {
      ...state, loading: false, predefinedModels: { ...state.predefinedModels, error: true, errorData: action.payload }
    }

  case COMPARTMENTAL_MODEL_GET_PREDEFINED_MODELS_SUCCESS:
    return {
      ...state, loading: false, predefinedModels: { ...state.predefinedModels, error: false, data: action.payload }
    }

  case COMPARTMENTAL_MODEL_STORE_PREDEFINED_MODEL_SELECTED:
    return {
      ...state, loading: false, predefinedModelSelected: action.payload 
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_ERROR:
    return {
      ...state, loading: false, currentSimulation: { ...state.currentSimulation, error: true, errorData: action.payload }
    }

  case COMPARTMENTAL_MODEL_STORE_SIMULATION_SUCCESS:
    return {
      ...state, loading: false, currentSimulation: { ...state.currentSimulation, error: false, data: action.payload }
    }

    

  default:
    return state
  }
}