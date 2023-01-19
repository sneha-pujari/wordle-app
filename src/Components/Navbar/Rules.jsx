import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box
  } from '@chakra-ui/react'
  import { InfoOutlineIcon } from '@chakra-ui/icons'
 export default function Rules() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}><InfoOutlineIcon/></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>RULES -</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                
                <Text fontSize='xl'>
                Wordle is a super simple game with rules:
                </Text>
                <Box p={4} justifyContent="space-between">   
                <ul>
                    <li>You have to guess the Wordle in six goes or less.</li>
                    <li>A correct letter turns green.</li>
                    <li>A correct letter in the wrong place turns yellow.</li>
                    <li>An incorrect letter turns gray.</li>
                </ul>
                </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
             </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }