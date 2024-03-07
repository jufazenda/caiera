import React, { useState } from 'react'
import { PropsStanInput } from '../Props'
import { Button, Divider, InputBase, Paper } from '@mui/material'

const StanInput = ({
  placeholder,
  button,
  nameButton,
}: PropsStanInput) => {
  const [textValue, setTextValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = () => {
    console.log('Texto enviado:', textValue)
    setTextValue('')
  }

  return (
    <Paper
      component='form'
      className='flex items-center flex-col md:flex-row w-full md:w-600 px-2 py-2 '
    >
      <InputBase
        sx={{
          flex: 1,
          '.css-yz9k0d-MuiInputBase-input': {
            textAlign: 'center',
            width: '100%',
          },
          '@media (min-width: 900px)': {
            '.css-yz9k0d-MuiInputBase-input': {
              textAlign: 'start',
            },
          },
        }}
        className='py-3 text-md flex justify-center md:ml-3 '
        placeholder={placeholder}
        value={textValue}
        onChange={handleInputChange}
      />
      {button ? (
        <>
          <Divider
            className='h-6 m-1 hidden md:flex'
            orientation='vertical'
          />
          <Divider
            className='h-3 m-1 md:hidden'
            orientation='horizontal'
          />
          <Button
            color='primary'
            className='normal-case text-black max-w-52 h-12 font-bold rounded-md bg-white px-3'
            onClick={handleSubmit}
          >
            {nameButton}
          </Button>
        </>
      ) : null}
    </Paper>
  )
}

export default StanInput
