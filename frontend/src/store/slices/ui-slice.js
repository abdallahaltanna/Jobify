import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showAlert: false,
  alertText: '',
  alertType: '',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    displayAlert: (state) => {
      state.showAlert = true
      state.alertText = 'Please provide all values'
      state.alertType = 'danger'
    },
    clearAlert: (state) => {
      state.showAlert = false
      state.alertText = ''
      state.alertType = ''
    },
  },
})

export const { displayAlert, clearAlert } = uiSlice.actions

export default uiSlice.reducer
