import { DeckItemType } from './decks-api.ts'

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


type setDecksType = ReturnType<typeof setDecksAC>


type DecksActions = setDecksType
