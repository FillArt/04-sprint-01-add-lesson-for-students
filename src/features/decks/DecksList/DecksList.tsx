import s from './DecksList.module.css'
import { useEffect } from 'react'
import { DeckItemType, decksAPI } from '../decks-api.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getDecksList = async () => {
      const res = await decksAPI.getDecks()
      dispatch(setDecksAC(res.data.items))
    }

    getDecksList()
  }, [])

  const decks: DeckItemType[] | [] = useAppSelector((state: AppRootState) => state.decksReducer.decks)
  console.log(decks, 'Что-то тут')

  return <ul className={s.list}>{decks?.map((item) => <DeckItem key={item.id} deck={item} />)}</ul>
}
