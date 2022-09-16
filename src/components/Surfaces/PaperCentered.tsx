import { Center, Paper } from '@mantine/core'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function PaperCentered({ children }: Props) {
  return (
    <Paper
      withBorder
      shadow="xl"
      sx={{
        width: '40rem',
      }}
    >
      <Center>{children}</Center>
    </Paper>
  )
}

export default PaperCentered
