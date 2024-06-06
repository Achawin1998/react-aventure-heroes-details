import React from 'react'
import { HeroesList } from '../components/HerosList'
import { useTitle } from '../hooks/useTitle'

export const Heroes = () => {
    useTitle('Heroes')

    return <HeroesList />
}