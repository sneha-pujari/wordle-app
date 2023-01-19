import React from 'react';
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     useDisclosure
//   } from '@chakra-ui/react'

export default function Modals({isRight, turn, answer}) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const finalRef = React.useRef(null)
  return (
    <div className='modal' >
        {isRight && (
          //   <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          //   <ModalOverlay />
          //   <ModalContent>
          //     <ModalHeader>Excellent! You won!</ModalHeader>
          //     <ModalCloseButton />
          //     <ModalBody>
          //      <p className='answer'>
          //            Answer: {answer}
          //        </p>
          //        <p>
          //            You found the answer in {turn} guess(es)!
          //        </p>
          //     </ModalBody>
    
          //     <ModalFooter>
          //       <Button colorScheme='blue' mr={3} onClick={onClose}>
          //         Close
          //       </Button>
          //       <Button variant='ghost'>Secondary Action</Button>
          //     </ModalFooter>
          //   </ModalContent>
          // </Modal>
            <div>
                <center>
                <h1>
                    Excellent! You won!
                </h1>
                <p className='answer'>
                    Answer: {answer}
                </p>
                <p>
                    You found the answer in {turn} guess(es)!
                </p>
                <h5>Refresh the page to play again.</h5>
                </center>
            </div>    
        )}
         {!isRight && (
        //   <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        //   <ModalOverlay />
        //   <ModalContent>
        //     <ModalHeader>Better luck next time!</ModalHeader>
        //     <ModalCloseButton />
        //     <ModalBody>
        //      <p className='answer'>
        //            Answer: {answer}
        //        </p>
        //        <p>
        //        You can refresh the page and play the game again.
        //        </p>
        //     </ModalBody>
  
        //     <ModalFooter>
        //       <Button colorScheme='blue' mr={3} onClick={onClose}>
        //         Close
        //       </Button>
        //       <Button variant='ghost'>Secondary Action</Button>
        //     </ModalFooter>
        //   </ModalContent>
        // </Modal>
            <div>
                <h1>
                    Better luck next time!
                </h1>
                <p className='answer'>
                   Answer: {answer}
                </p>
                <p>
                    You can refresh the page and play the game again. 
                </p>
                <h3>Refresh the page to play.</h3>
            </div>    
        )}
    </div>
  )
}
