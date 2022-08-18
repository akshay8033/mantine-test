import React from "react";
import {
  MantineProvider,
  Container,
  Image,
  Center,
  createStyles,
  Group,
} from "@mantine/core";
import { AppShell, Navbar, Header } from "@mantine/core";

// Icons
import { ReactComponent as Logo } from "./assets/logo.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 200 }} height="100%" p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={70} sx p="xs">
          <Container fluid className={classes.inner}>
            <Logo />
          </Container>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Demo />
    </MantineProvider>
  );
}
