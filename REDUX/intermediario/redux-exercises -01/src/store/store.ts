import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { type CounterState } from './counterSlice'

type PersistedState = {
  counter: CounterState
}

const PERSIST_KEY = 'counter-state'

const loadState = (): PersistedState | undefined => {
  if (typeof localStorage === 'undefined') return undefined

  try {
    const serialized = localStorage.getItem(PERSIST_KEY)
    if (!serialized) return undefined
    return JSON.parse(serialized) as PersistedState
  } catch (error) {
    console.warn('Falha ao carregar estado do localStorage', error)
    return undefined
  }
}

const saveState = (state: PersistedState) => {
  if (typeof localStorage === 'undefined') return

  try {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(state))
  } catch (error) {
    console.warn('Falha ao salvar estado no localStorage', error)
  }
}

const persistedState = loadState()

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
