import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  FormControl,
  FormLabel,
  Box,
  Heading,
  Text,
  Button,
  Container,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function PomSession(props) {
  let [playing, setPlaying] = React.useState(false);
  let [data, setData] = React.useState([25, 5, 30, 4]);
  let [key, setKey] = React.useState([25, 5, 30, 4]);
  console.log(data[0]);
  console.log(props);
  return (
    <Container>
      <Heading>{props.lol}</Heading> <br />
      <CountdownCircleTimer
        isPlaying={playing}
        duration={data[0] * 60}
        key={data[0] * 60}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
        onComplete={() => {
          return [true, data[1] * 60 * 1000];
        }}
      >
        {({ remainingTime }) => {
          if (remainingTime >= 60) {
            return (
              <Text>
                {Math.round(remainingTime / 60)} <br />
                {Math.round(remainingTime / 60) == 1 ? "Minute" : "Minutes"}
              </Text>
            );
          } else {
            return (
              <Text>
                {remainingTime} <br />
                Seconds{" "}
              </Text>
            );
          }
        }}
      </CountdownCircleTimer>
      <FormControl>
        <FormLabel>Work (mins)</FormLabel>
        <NumberInput
          value={data[0]}
          onChange={(e) => {
            let arr = [...data];
            arr[0] = e;
            setData(arr);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel>Short Break (mins)</FormLabel>
        <NumberInput
          defaultValue={5}
          onChange={(e) => {
            let arr = [...data];
            arr[1] = e;
            setData(arr);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel>Long Break (mins)</FormLabel>
        <NumberInput
          defaultValue={30}
          onChange={(e) => {
            let arr = [...data];
            arr[2] = e;

            setData(arr);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel>Long Break Interval</FormLabel>
        <NumberInput
          defaultValue={2}
          onChange={(e) => {
            let arr = [...data];
            arr[3] = e;

            setData(arr);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Box p={2} m={2}>
          {" "}
          <Button
            colorScheme="blue"
            m={2}
            onClick={() => {
              setPlaying(!playing);
            }}
          >
            {playing ? "Pause" : "Start"}
          </Button>
          <Button colorScheme="red" m={2} onClick={() => {}}>
            Stop
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
}
