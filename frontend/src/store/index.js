import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './slices/ui-slice'

const store = configureStore({
  reducer: { ui: uiSlice },
})

export default store
