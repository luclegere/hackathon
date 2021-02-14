import { ChakraProvider, SimpleGrid, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Timeline from "./components/Timeline";
import Incentives from "./components/Incentives";
import Projects from "./components/Projects";
import Calendar from "./components/Calendar";

import theme from "./theme";
import Destress from "./components/Destress";
import StickyNotes from "./components/StickyNotes";

export function Main() {
  return (
    <>
      {" "}
      <Router>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <SimpleGrid columns={2} spacing={10}>
              <Box>
                {" "}
                <Timeline />
              </Box>
              <Box> </Box>
            </SimpleGrid>
          </Route>
          <Route path="/incentives" exact>
            <Incentives />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/calendar" exact>
            <Calendar />
          </Route>
          <Route path="/destress" exact>
            <Destress />
          </Route>
          <Route path="/stickynotes" exact>
            <StickyNotes />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}
