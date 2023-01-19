import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Stack,
  useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Rules from "./Rules";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.200', 'gray.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <Center>
          </Center>  */}
          <Box><Text fontSize='4xl' color = 'blue.500'><b>WORDLE</b></Text></Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
             <Rules />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}