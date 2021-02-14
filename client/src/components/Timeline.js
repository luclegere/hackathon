import React from "react";

import { Grid, Heading } from "@chakra-ui/react";

import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  HStack,
  Text,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

import Data from "../Data";
import PomSession from "./PomSession";

export default () => {
  let [preview, setPreview] = React.useState(false);
  let [previewTag, setPreviewTag] = React.useState(null);
  return (
    <>
      {" "}
      <Heading size="sm" fontSize="50px" m={2} p={2}>
        Timeline
      </Heading>{" "}
      <br />
      <Grid templateColumns="repeat(2, 1fr)" gap={700} m={2} p={2}>
        <Grid templateColumns="repeat(1, 1fr)" gap={4} m={2} p={2}>
          {Data.map((item) => {
            return (
              <PomPrompt
                title={item.title}
                desc={item.desc}
                progress={item.progress}
                priority={item.priority}
                setPreview={setPreview}
                setPreviewTag={setPreviewTag}
              />
            );
          })}
        </Grid>
        {preview ? previewTag : null}
      </Grid>
    </>
  );
};
function PomPrompt(props) {
  let [prev, setPrev] = React.useState(true);
  const handleClick = () => {
    props.setPreviewTag(<PomSession lol={props.title} />);
    props.setPreview(prev);
  };
  return (
    <>
      <Box
        w="300px"
        border="1px"
        borderColor="gray.200"
        borderRadius="lg"
        p={2}
        onClick={handleClick}
      >
        <Box>
          <Text fontSize="2xl">{props.title}</Text>
          <Box>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < props.priority ? "teal.500" : "gray.300"}
                />
              ))}{" "}
          </Box>
        </Box>{" "}
        <HStack spacing={20}>
          <Box>
            {" "}
            <Stat>
              {" "}
              <HStack spacing={20}>
                <Box>
                  <StatLabel>Hours Done</StatLabel>
                  <StatNumber>9.00</StatNumber>{" "}
                </Box>{" "}
                <Box>
                  <StatLabel>Hours Left</StatLabel>
                  <StatNumber>9.00</StatNumber>{" "}
                </Box>{" "}
              </HStack>{" "}
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
          </Box>{" "}
        </HStack>{" "}
      </Box>{" "}
    </>
  );
}
