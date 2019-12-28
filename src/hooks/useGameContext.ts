import { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import { IGameContext } from '../contexts/IGameContext'

export function useGameContext() {
    return useContext<IGameContext>(GameContext)
}
