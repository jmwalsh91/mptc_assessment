import { Button, Text, TextInput, Title } from '@mantine/core'
import React from 'react'
import PaperCentered from '~/components/Surfaces/PaperCentered'

type Props = {}

function Login({}: Props) {
  return (
    <PaperCentered>
        <Title>
            Log In</Title>
            <TextInput
      placeholder="Name"
      label="Name"
      withAsterisk
      />
        <TextInput
      placeholder="Pass Not Required"
      label="Password"
      />
      <Button color="dark" variant="filled">Log In</Button>
      <Text color="dimmed">Don't have an account? Register</Text>
                </PaperCentered>
  )
}

export default Login