import React from 'react'

// Import styles
import { BurgerBtn } from '../styles/burger.styled'

const Burger = ({open, setOpen}) => {

  return (

    <BurgerBtn open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
    </BurgerBtn>

  )
}

export default Burger