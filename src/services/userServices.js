import request from '../httpClient/api.request'

export const registerUserService = async (userForm) => {
  const response = await request(
    `${process.env.REACT_APP_REGISTER_API_URL}/save_user`,
    'POST',
    userForm
  )
  return response
}

export const validateQrService = async (userQrValidation) => {
  const response = await request(
    `${process.env.REACT_APP_REGISTER_API_URL}/qr_validation`,
    'POST',
    userQrValidation
  )
}