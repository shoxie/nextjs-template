import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function CalculatorPage() {
  const [numbers, setNumbers] = useState({
    a: 0,
    b: 0,
  });
  const [result, setResult] = useState(0);

  return (
    <Box h="100vh">
      <VStack h="full" align="center" justify="center">
        <FormControl>
          <FormLabel>Number A</FormLabel>
          <Input
            data-testid="number-a"
            value={numbers.a}
            onChange={(e) =>
              setNumbers({ ...numbers, a: parseInt(e.target.value) })
            }
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Number B</FormLabel>
          <Input
            data-testid="number-b"
            value={numbers.b}
            onChange={(e) =>
              setNumbers({ ...numbers, b: parseInt(e.target.value) })
            }
          ></Input>
        </FormControl>
        <Text fontSize={"5xl"} data-testid="result">
          {result}
        </Text>
        <Button
          w="64"
          onClick={() => setResult(numbers.a + numbers.b)}
          data-testid="add"
        >
          Add
        </Button>
        <Button
          w="64"
          onClick={() => setResult(numbers.a - numbers.b)}
          data-testid="subtract"
        >
          subtract
        </Button>
        <Button
          w="64"
          onClick={() => setResult(numbers.a * numbers.b)}
          data-testid="multiply"
        >
          Multiply
        </Button>
        <Button
          w="64"
          onClick={() => setResult(numbers.a / numbers.b)}
          data-testid="divide"
        >
          Divide
        </Button>
      </VStack>
    </Box>
  );
}
