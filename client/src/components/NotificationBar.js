import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  LinkOverlay,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

export default () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton aria-label="Search database" icon={<BellIcon />} m={2} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Notifications</PopoverHeader>
        <PopoverBody>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <LinkOverlay href="#">
              <Box> 1adfasfsfseff</Box>
            </LinkOverlay>
            <Box>2</Box>
            <Box>3</Box>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
