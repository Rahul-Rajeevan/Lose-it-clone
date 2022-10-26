import React, { useCallback, useEffect, useState } from 'react'
import {Box,Flex, Spacer, Text, Image, Button,Menu,MenuButton,MenuList,MenuItem, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Progress, Input} from '@chakra-ui/react';
import styles from './LandingPage.module.css'
import LandingPageNav from '../../Components/LandingPageNav/LPN';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Right from './Right';
import Component from './Component';
import Component2 from './Component2';
import { fetchDay } from '../../Redux/Action';

const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [box, setbox] = useState(1)
  const {bre,isLoading,total,isError,date}=useSelector(state=>state.Reducer)
const dispatch=useDispatch();
  // const [bre, setBre] = useState({morning:[],afternoon:[],dinner:[],snack:[]})
// const [after,setAfter]=useState([])
// const [dinn, setDinn] = useState([])
// const [snack, setSnack] = useState([])
// const [exer, setExer] = useState([])

    


  useEffect(() => {
    // console.log(date)
   dispatch(fetchDay(date));
  }, [date])



  return (
    <div className={styles.background} >
      <LandingPageNav/>
<Flex w="65%" m='auto' mt='50px' gap="80px">
  <Box w="65%" >
    <Flex>
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Add Food
  </MenuButton>
  <MenuList>
    <MenuItem>
    <Flex>
    <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JJREFUeNp0lN+O21QQxr855ziJ7ewmq3SBbhcB2jt4hpZH4AaJCx6ivAEXiHvEDVc8B5X6ENxWqoSoWvXPsunuJpvEdmwffraBbi9wFNkez3wz8803xx5/qTydHTw8+mjxVTbLP3fBSzL1l3H3QY5/rGvFtpbirc9to6qsy/M/nv20vd7+Ekbp6NuzB/d/nJ99IcvmctmBlIyl/Z44k40z2WiiWG6xVYoAWTKSar4XN9zL6dHT33948ui3NNy5t3g4O7mnuC8Ub972zs774b2qZLEBslG7vRZlAEQi7xR3a7WbK8Aq5XdPtTg9/sbl0/CJdZ0RoAaA3TVAOyk4QGpZXWCvqKrEh/ckcCvUFoA3O5igdSdls8mZc0kTLZD9YEJLlFWvpO2FzAEeWoDXvC+xb7BBmG9IuJRVK4DBz1MZfs7XbTDfZadcAZbnffmxvOyB1PAvdnAHe90wHN+3VF8CNPaydNJXqeqS75WCBcD2S8X1XjY/kU0nateA3VDhGKJnSc+RGtopIXzTVYEtO8LG+80r4qk6qRX8GDBb99zETSU3nsk5JrWYyo4/lFKmS3uRgLi5kN7S4jrIym6a8Nu1C98+2UPzCLAAstFmfYGWcPj4M+nkjGx3ZD5HW3BHQmpSEwBxL+X/etPrrOdbTH1UDWBu1IGRvVgpHt6VFseQTWWBKpMjReTRKdWazi9TnCaKq+dyqxvZBL9YoO2SjhLIJZujOuev1R5SiRsRijTQjDEyM9oyNwDyi9ibrJEzWnZQFAq6aBiA36OZZS+ziFg1nRKDOB0OhuoFIA3KCjKzAfg7V6tNR2qNFjfn2CKFAPbyT+nydT3sGsMbl08p7FXPlfkUox8WMcIVIo3oLdJui/6qF1BT1v0K71BIWL6R5nN8sQTAqifPKblTf7fRrd5dNiw+7Ud2rkWDTWn938WoKxYiTDLkmg1hASGGPEMeySDS/7kiwW1VsxRbNbTcsTmuOrBUfpIPJ4sDzOdj7pN/qnj/sttgTM8zxdb1I1HWKQzYZTbVaeymN/JsTAeWqntn5roN2R9J/UOrliVoCY9hsFGowmatX0n0fX4Y+wEo7frVe0DvzsP4nyHiE/v+hgNldaXHgYefXzxTuvggfp0dVp8a+2dIo4v+F+TW4To8kZ1xwlulfRGLy3M94jz47m8BBgCLqaBGd6jUcwAAAABJRU5ErkJggg=="/>
    <Text>Breakfast</Text>
    </Flex>
    </MenuItem>
    <MenuItem>
    <Flex>
    <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9dJREFUeNp8VFuLHEUYPVVd3T3d2z2zt7hjNN4CuokJXhZvYUEUFOODkidfRBBB85R/oCD4F3zw2Qd9Cwo+iUJQULyAF9S4u6BRdrNm07s7s3Pr7rp4qndNgojF1FTN13ynz3e+8404+uLDSZYvnD26+Nyrs4eOLcZRBgGHQIKruXFLf+W35WEYd7AO3AJlufd5sbnypi56X6toauGFe5dee+OBk6ens1AiUoBibiCafLSDHqaCvkfGnpnG0OVN3FrAELDW9rEv9OjjnSg9o/Lu8suHb31oujIGfVMhIpCUAc8a96df4p7WL2irHnRdomcVfpwsY8Usk5wjmENtXHB88Sn8/Nu3ryvZumNOuxYmpQWJwUjBEh2W8gt4pPMdRNyFk3MI6h7m5e941L6L8cDgV/0ky6xhrC/XIopvelBaLe2kAsal3wLDMkRmNnAi/QZCteHCQxDRfHM3cgYxX3hCfgBR7WBUBphMBMbMryoB5XgpR2RDMXVAYSlzpjaRyQLazUDaMUvyr695asYUZsUaZFVgVM8yZtgSNoKgymoi8yIIogPb9KqKDfN6sNW2bxw7oZgzIF6P8QGBJ5SFVZCNsPs9LktJZrVoqDJCzZr+4w/Zxe7QYhqXKPwAQgR8PoYpd6D0Zfw57mJrMIeSb7Z+M62c0AWmkuj1JeqWRKwsbWGxVt6Oz9JTeP7I+2xGgZoNEq5EbLYwqSf4dOsc/hrONP7QRqIyAv096cEEtncFdpUgMwYCbw2Fd7ZfwpUdh6ePfITDU6u0gMBKfwHnL53DJ1fOQNO1dFMTr72kLFtBUxItqQnr9o6mSEJY7NoEbxdn8eHaadycblD4AOuD23B51EWjhqCYzjtb+A9ADOUDgn7xfg+EIbsaStTUfL+zV8dz2BwuNK5XfDYTbTdD5pxnFDfdtc5rqtmAqECVFBAyoutLJGEP7XDAiTT783TD+uen82PkQvSqNkqdo0bC+SugqrSP9ZPfw0UBMlSwHJ1Y7iEkS+GzriFcB3Wsa0xGV00HGybHSMZIiqGf6RhZnMHFCjkV6wSGww3E1K3xy7/pHayIzIZkNbA5QWJEofPNC1U7noZoKWQch5yRLGgh8szw38vrLjn0bZNhoDNaKuYM+26OVlc74dIxmcwjdSMChUhVisizEtfLczfqdgCWmQQdnSKOUtpkaz2YvSXaitPk2c5dx9O0lSNrtdCKEshwikOeXds42Pv3HCai8KoDpzJEX53HeO3iW+LuZx6nDZL7ou6dr8Qzp56YSjKRcEalxP8s/imQ+LByejgpfqh7P12oLsr3/hZgAI+twYXhJAISAAAAAElFTkSuQmCC"/>
    <Text>Lunch</Text>
    </Flex>
    </MenuItem>
    <MenuItem>
    <Flex>
    <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BJREFUeNp0VMtuHEUUPfXo13hm5HHwxA4OJFhOIAYheccGESlLNlnzC6z4FBYsWbFFbPiFSFmwAQnxUCTLNmHkePyYGU+/qrqaUzVjbAtRmqvqnu4+99xz7i2x+sGGiqLkedrdfJ6sbOwJGQFoIeCXwPLi9mr9rw3PW5s3k9Pfv/zsQr/QQqinj3affbu9vdfrdVcglYKWElorSI8lRIirZRsH53Fa7rywzuGPP3/54cVPP36hho8//ub93adP4jiGtQ363RSx1ricF+FF21g0BKhqi8ebPdwbZDi/zDHNKxhrURuDbu+t9PR8vCZVevcjITXKyqCsDSSpK1IqDUEIpqTiBzbE4fgST95exSc7Q6zEit9YJjFM2CDrbT6TrROo/J8Max0OR6fYfz2GMQ0ipbE1XENdNajrBhfTEvOyRjcS2FlfQcNKqtKiLA3ZI9KuaduclLfvryNLY+wfvUEcR9TN4fTsEheTHHyHOjl4a4qqJkCFVDt4hHfvDTGZlSGhbi3IymF0PEESaZiawlInpQQNaOC1l0KCOUG3kOcliqKErUo0ZH9wNEZtmawBtHekJtWTegpNJ6NIUaeGISHltZM1Jdjd6pPVAux8mmM2rzGZzyGoq+Nz3RhSLwyBAKcRMkjh/gXzWWMt8eGDVbw3TAhQsKQKB8cFNTTB6YYSGFanLame0KVIi8AqZniGPrJUY+/ROna2etgYaAKVyIsCr/6a4eVvU8xIwtAEw4Q1WWqQiaFTHnnZ875Tw+578/xshtHDAe704yD+wWiGV6/nbCMXmjq8xDJBQO1vRMt/2xtz0y6Gxa834wJ/H8/p5mJ8vDGaKMpr2d4YL4aGsASrw3iEKbkBdLW8nrdGs10AiDC6noTkraUBWYXqfhXAEorejSIk1Essqv0PMJYJDbtgzlEq2GuOZeqTkszoVDsgbSfDTPY7CQHjhR7/szyYB7F5y3Fij7F0TKWHUjJBQqKeWczI2N3xQpNrSZYnURu09fq17PZEAolgXy7EYFO7Oo9VEqpOdIROnCGLEyiB67PM7+76PmjGAU8NTxNOkFISVquJygbperq59WnU6SNLYnQ7HaQJwQgsWXYIudzVIrwjjiNWMoElDd/p1f6vX+lmMvm6/PnlO8ndh5/n6Z21syxDzhkVwO1T9soJlh8MoGYlDZBldVZfHH4nRkff/yPAAEdy2hjdVTspAAAAAElFTkSuQmCC"/>
    <Text>Dinner</Text>
    </Flex>
    </MenuItem>
    <MenuItem>
    <Flex>
    <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACfElEQVR42q2UzU8TURTF7wo37liwYe+SNXHLngR3snLjP8AWbZEKxoKCLWBiRRMJGIkVIyZEEz+DiZqgNigQMDTYIBShTOej7XRmjve+N21qwkbCJL+8vvPOOdM3b1pajlDTRi/FfvZSjsExyEleemjzEg3upS/AyszA2Xj530hO8tJD2cuUL34ah/Vt6thIPhuhPG1FCMUPQzBCiiHO6lO4Oxn4zj4Q+Gp0dzNKLy4O/Qv7t6IEyvURDl/01DHeRFHOvlYFR16sy7r4GnO5K1y2HSMUnnTXKa/Pq4xv51Fam4P5Ngp7KQXzXT9Kq3NKl0t8jbntfi7bvcpl0x0K631Ub8nagbU4gAOl9SFwLRzOdqq5zbqsi89kv+RE3x3gsr1B3ubdNhQm21BZS6u7lr7eQYE10e1XPQgqJoyHHShn7sN4cFatyyV+yYn3D/fQwXUum2hV+IV1ZTIfd2ptvBX2wkUEVRt+8Rcq36dgpM7ATHfqR8H+mk966DDOpzl6GgYD31UmI9Gs5qI7892AV1FjMdSMZLM+DPbXfMYQl1k3CGaIv7+iPM50O6xhrZWfnUOJMXkuXsGZaddd7DdDn+jk3CTYwgjBW04pk/sxBmdE6zLWPotH/FVel6vK/kYPVW7x3Uc17vMuPiUPgbEJd+F8XVeEvirrsi4+8dfXGHITXJJkEhp/Ka7fTQ74n2PwZtvhTpxClUeZqyLZIvtqmWo4kjfG2xOSevTvtSCQQr7z0b8A/uZf4vAmW1TGH9NIloJxnjBBA2q+0IXgBz/Dwoo+ZRl5rvQGn9+QJ0xQnsEJkJeywRMpu0382j6ipu1rNMz8ZnAMJDcs/7R/AdvSLa8NLenCAAAAAElFTkSuQmCC"/>
    <Text>Snacks</Text>
    </Flex>
    </MenuItem>
  </MenuList>
</Menu>
      
      <Button onClick={onOpen}>Add Exercise</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Exercise</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="1rem">
            <Image onClick={()=>setbox(1)} src="data:image/png;base64,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" alt="img"/>
            <Image onClick={()=>setbox(2)} src="data:image/png;base64,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" alt="img"/>
            </Flex>
            <Flex w="100%" justifyContent="flex-end">
            <Input h="30px" w="40%" placeholder='Enter search item' border="1px solid black"/>
            </Flex>
            
            {box===1&&<Flex h="400px" w="95%"  m='auto' mt="20px" border="1px solid orange">

            </Flex>}
            {box===2&&<Flex h="400px" w="95%"  m='auto' mt="20px" border="1px solid orange">

            </Flex>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
    <Flex w="100%" mt="10px">
    <Flex w="100%" bg="#edf0f3" h="35px">
    <Flex  w="20%" justify="center" alignItems="center">
      <Text>Budget</Text>
      <Text></Text>
    </Flex>
    <Flex w="20%" justify="center" alignItems="center"> 
      <Text>Food</Text>
      <Text></Text>
    </Flex>
    <Flex w="20%" justify="center" alignItems="center">
      <Text>Exercise</Text>
      <Text></Text>
    </Flex>
    <Flex w="20%" justify="center" alignItems="center">
      <Text>Net</Text>
      <Text></Text>
    </Flex>
    <Flex w="20%" justify="center" alignItems="center">
      <Text>Under</Text>
      <Text></Text>
    </Flex>
  </Flex>
  
    </Flex>
    {/* {isLoading&&<h1>Loading...</h1>} */}
    {isError&&<h1>Something went wrong</h1>}
    {!isLoading&&
    <Box>
    <Component name={"breakfast"} foodList={bre.morning}/>
    <Component name={"lunch"} foodList={bre.afternoon}/>
    <Component name={"dinner"} foodList={bre.dinner}/>
    <Component name={"snack"} foodList={bre.snack}/>
    <Component2/>
    </Box>
    }
  </Box>
<Right/>
</Flex>
          
    </div>
  )
}

export default LandingPage