import s from './DecksList.module.css'
import { useEffect } from 'react'
import { DeckItemType, decksAPI } from '../decks-api.ts'
import { fetchDecksTC, setDecksAC } from '../decks-reducer.ts'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  const decks: DeckItemType[] | [] = useAppSelector((state: AppRootState) => state.decksReducer.decks)

  return <ul className={s.list}>{decks?.map((item) => <DeckItem key={item.id} deck={item} />)}</ul>
}
