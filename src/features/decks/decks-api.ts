import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export type DeckPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type DeckItemType = {
  "isFavorite": boolean,
  "author": {
    "id": string,
    "name": string
  },
  "id": string,
  "userId": string,
  "name": string,
  "isPrivate": true,
  "cover": string,
  "created": string,
  "updated": string,
  "cardsCount": number
}
export type DeckResponse = {
  items: DeckItemType[]
  pagination: DeckPagination
}

export const decksAPI = {
  getDecks() {
    return instance.get<DeckResponse>('/v2/decks')
  }
}