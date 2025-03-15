import { DeckItemType, decksAPI } from './decks-api.ts'
import { ThunkDispatch } from 'redux-thunk'
import { AppRootState } from '../../app/store.ts'
import { AnyAction } from 'redux'

const initialState = {
  decks: [] as DeckItemType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return {...state, decks: action.payload.decks}
    case 'ADD-DECK':
      return  {...state, decks: [...state.decks, action.payload.deck] }
    default:
      return state
  }
}


export const setDecksAC = (decks: DeckItemType[]) => ({
  type: 'SET-DECKS',
  payload: {
    decks,
  }
} as const)

export const addDeckAC = (deck: DeckItemType) => ({
  type: 'ADD-DECK',
  payload: {
    deck,
  }
})


export const fetchDecksTC = () => async (dispatch: ThunkDispatch<AppRootState, unknown, AnyAction>) => {
  try {
    const res = await decksAPI.getDecks()
    dispatch(setDecksAC(res.data.items))
  } catch (error) {
    console.error(error)
  }
}

export const createDecksTC = (name: string) => async (dispatch: ThunkDispatch<AppRootState, unknown, AnyAction>) => {
  try {
    const res = await decksAPI.createDeck(name)
    dispatch(addDeckAC(res.data))
  } catch (error) {
    console.error(error)
  }
}


type setDecksType = ReturnType<typeof setDecksAC>
type addDeckType = ReturnType<typeof addDeckAC>


type DecksActions = setDecksType | addDeckType
