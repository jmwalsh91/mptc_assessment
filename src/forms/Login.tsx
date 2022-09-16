import { Button, Checkbox, Stack, Text, TextInput, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserDispatcher, UserRole } from "~/components/contexts/UserProvider";
import PaperCentered from "~/components/Surfaces/PaperCentered";
import { login } from "~/services/sb";

type Props = {};

function Login({}: Props) {
  const [checked, setChecked] = React.useState(false);
  const [name, setName] = React.useState("");
  const dispatcher = React.useContext(UserDispatcher);
  const navigate = useNavigate();
  function dispatch(name: string, role: UserRole) {
    dispatcher.setName(name);
    dispatcher.setRole(role);
  }
  async function handleLogin() {
    const user = await login(name, checked);
    if (user && user.name) {
      dispatch(user.name, user.role);
      navigate("/dash");
    } else {
      throw new Error("User not found");
    }
  }
  return (
    <PaperCentered>
      <Stack>
        <Title>Log In</Title>
        <TextInput
          placeholder={name}
          label="Name"
          withAsterisk
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <TextInput placeholder="Pass Not Required" label="Password" />
        <Checkbox
          label="Staff?"
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
        />
        <Button color="dark" variant="filled" onClick={() => handleLogin()}>
          Log In
        </Button>
        <Text color="dimmed">Don't have an account? Register</Text>
      </Stack>
    </PaperCentered>
  );
}

export default Login;
