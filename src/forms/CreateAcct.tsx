import { Button, Stack, TextInput, Title } from '@mantine/core'
import React from 'react'
import PaperCentered from '~/components/Surfaces/PaperCentered'

type Props = {}

function CreateAcct({}: Props) {
  return (
    <PaperCentered>
        <Stack>

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
      </Stack>
    </PaperCentered>
  )
}

export default CreateAcct