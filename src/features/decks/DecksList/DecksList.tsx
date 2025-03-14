import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'



export const DecksList = () => {
  useEffect(() => {
    const getDecksList = async () => {
      const res = await decksAPI.getDecks()
      console.log(res.data.items)
    }

    getDecksList()
  }, [])

  return <ul className={s.list}></ul>
}
