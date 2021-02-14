import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Box,
  VStack,
  StackDivider,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <IconButton
        onClick={() => handleClick()}
        aria-label="Search database"
        icon={<HamburgerIcon />}
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>App</DrawerHeader>
            <DrawerBody>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                <Box>
                  <Link to="/" onClick={onClose}>
                    Homepage
                  </Link>
                </Box>
                <Box>
                  <Link to="/projects" onClick={onClose}>
                    Projects
                  </Link>
                </Box>
                <Box>
                  <Link to="/incentives" onClick={onClose}>
                    Incentives
                  </Link>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
