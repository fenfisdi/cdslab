import { loginService } from '../services/sessionServices'
import {
  SESSION_ERROR,
  SESSION_LOADING,
  SESSION_LOGIN,
  SESSION_LOGOUT, SESSION_SET_CURRENT_NAVIGATION, SESSION_SET_CURRENT_SECTION_NAVIGATION
} from './types/sessionTypes'

export const useSessionActions = (dispatch) => {
  /**
 * @param {*} loginInfo {username, password}
 */
  const login = async (loginInfo) => {
    dispatch({ type: SESSION_LOADING })
    loginService(loginInfo)
      .then((response) => {
        dispatch({
          type: SESSION_LOGIN,
          payload: response.data
        })
        
      })
      .catch((error) => {
        const {response:{data}} = error
        dispatch({
          type: SESSION_ERROR,
          payload:data.detail
        })    
      })
    
  }

  const logout = async () => {
    dispatch({ type: SESSION_LOGOUT })
  }

  const setCurrenNavigation = (titleNavigation) => {
    dispatch({ type: SESSION_SET_CURRENT_NAVIGATION, payload: titleNavigation })
  }

  const setActiveSection = (sectionTitle) => {
    dispatch({ type: SESSION_SET_CURRENT_SECTION_NAVIGATION, payload: sectionTitle })
  }

  return { login, logout, setCurrenNavigation, setActiveSection }
}
