import { Button, TextInput, Title } from '@mantine/core'
import React from 'react'
import PaperCentered from '~/components/Surfaces/PaperCentered'

type Props = {}

function CreateAcct({}: Props) {
  return (
    <PaperCentered>
        <Title>Create Student Account</Title>
        <TextInput
      placeholder="Name"
      label="Name"
      withAsterisk
    />
        <TextInput
      placeholder="Pass Not Required"
      label="Password"
    />
    <Button variant="filled" color="dark">Create</Button>
    </PaperCentered>
  )
}

export default CreateAcct