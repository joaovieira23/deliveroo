import { configureStore } from '@redux/toolkit'

export const store = configureStore({
	reduces: {},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch