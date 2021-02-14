import {
  IconButton,
  Flex,
  Heading,
  Spacer,
  Box,
  Input,
} from "@chakra-ui/react";
import { SearchIcon, EmailIcon, SettingsIcon } from "@chakra-ui/icons";

import Drawer from "./Drawer";
import NotificationBar from "./NotificationBar";
export default () => {
  return (
    <>
      <Flex>
        <Box p="2">
          <Drawer />
        </Box>
        <Box p="2">
          <Heading m={2} size="md">
            App
          </Heading>
        </Box>
        <Spacer />
        <Box>
          {" "}
          <Input placeholder="Basic usage" size="md" width="400px" m={2} />{" "}
        </Box>
        <IconButton aria-label="Search database" icon={<SearchIcon />} m={2} />{" "}
        <Spacer />
        <NotificationBar />
        <IconButton aria-label="Search database" icon={<EmailIcon />} m={2} />
        <IconButton
          aria-label="Search database"
          icon={<SettingsIcon />}
          m={2}
        />
      </Flex>
      <Flex></Flex>
    </>
  );
};
