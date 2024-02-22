import React from 'react'
import { MainInput } from './MainInput'
import { ButtonsContainer } from './ButtonsContainer'

export const HeaderBar = () => (
  <div style={{
    width: '100%'
  }}>
    <h1> Avi Akiva Berger Presents - My Dear Son</h1>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center'

    }}>
      <MainInput />
      <ButtonsContainer />
    </div>
  </div>
)
