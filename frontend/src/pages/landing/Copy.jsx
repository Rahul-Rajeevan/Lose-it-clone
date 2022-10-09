import React, { useCallback, useEffect, useState } from 'react'
import {Box,Flex, Spacer, Text, Image, Button,Menu,MenuButton,MenuList,MenuItem, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Progress} from '@chakra-ui/react';
import styles from './LandingPage.module.css'
import LandingPageNav from '../../Components/LandingPageNav/LPN';
import { useSelector } from 'react-redux';
import axios from 'axios';

const LandingPage = () => {
  const {token}=useSelector((state)=>state.AuthReducer)||localStorage.getItem("token")
  const { isOpen, onOpen, onClose } = useDisclosure()
  // code for food search
  const [list, setList] = useState([])
  const [afternoon, setafternoon] = useState([])
  const [suggestions, setSuggestions] = useState([]);
  const [suggestions1, setSuggestions1] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);
  const [suggestions3, setSuggestions3] = useState([]);
  const [suggestions4, setSuggestions4] = useState([]);
  const [suggestions5, setSuggestions5] = useState([]);
  const [morning, setMorning] = useState([])
  const [dinner, setdinner] = useState([])
  const [snack, setSnack] = useState([])
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [query3, setQuery3] = useState("");
  const [query4, setQuery4] = useState("");
  const [query5, setQuery5] = useState("");
  const [date, setDate] = useState(10)
  const [total, setTotal] = useState(0)
const [exercise, setexercise] = useState([])
  var today = new Date();
  let date123 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const [show, setshow] = useState(date123)
const [number, setNumber] = useState(today.getDate()-1)

const changedate=(val)=>{
setNumber(number+val)
console.log(number)
let date12 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+number;
console.log(date12)
  setshow(date12)
toarray();
}



const toarray=async()=>{
 await axios.post("https://dry-plateau-25724.herokuapp.com/day/details",{date},{headers:{"Authorization":`Bearer ${token}`}}).then(r=>{
 console.log(r.data)   
 setMorning(r.data.morning); setafternoon(r.data.afternoon); setSnack(r.data.snack); setdinner(r.data.dinner);
 setTotal(r.data.cal); setexercise(r.data.exercise);
})
}

const getItem=(id,val)=>{
axios.get(`https://dry-plateau-25724.herokuapp.com/food?id=${id}`,{headers:{"content-type":"application/json","Authorization":`Bearer ${token}`}})
  .then(res=> {
    if(val===1)
    setMorning([...morning,res.data])
    else if(val===2)
    setafternoon([...afternoon,res.data])
    else if(val===3)
    setdinner([...dinner,res.data])
    else if(val===4)
    setSnack([...snack,res.data])
// console.log("data",morning,afternoon,dinner,snack,cal)
  }).then(async(r)=>{
    let y=[];
    y=[...morning,...afternoon,...dinner,...snack]
    let q=0;
    for(let i of y)
    {
      q+=i.cal;
    }
    for(let i of exercise)
    {
      q-=i.cal
    }
let cal=q;
   await axios.post("https://dry-plateau-25724.herokuapp.com/day",{morning,afternoon,dinner,snack,date,cal,exercise},{headers:{"Authorization":`Bearer ${token}`}}).then((r)=>console.log(r))
      
  })
  
}
const getexercise=(id,val)=>{
  axios.get(`https://dry-plateau-25724.herokuapp.com/exercise?id=${id}`,{headers:{"content-type":"application/json","Authorization":`Bearer ${token}`}})
.then(res=> {
  // console.log(res.data)
  setexercise([...exercise,res.data])
})
.then(async(r)=>{
      let y=[];
      y=[...morning,...afternoon,...dinner,...snack]
      let q=0;
      for(let i of y)
      {
        q+=i.cal;
      } 
      for(let i of exercise)
    {
      q-=i.cal
    }  
  let cal=q;
     await axios.post("https://dry-plateau-25724.herokuapp.com/day",{morning,afternoon,dinner,snack,date,cal,exercise},{headers:{"Authorization":`Bearer ${token}`}}).then((r)=>console.log(r))   
    })
    
  }


  useEffect(() => {
    toarray();
if(query1!=="")
getfoodData("query1");
if(query2!=="")
getfoodData("query2");
if(query3!=="")
getfoodData("query3");
if(query4!=="")
getfoodData("query4");
if(query5!=="")
getexerciseData();
if(query1.length===0)
setSuggestions1([])
if(query2.length===0)
setSuggestions2([])
if(query3.length===0)
setSuggestions3([])
if(query4.length===0)
setSuggestions4([])
if(query5.length===0)
setSuggestions5([])
  }, [query1,query2,query3,query4,query5,date])


   // code for food search
  return (
    <div className={styles.background} >
      
      <LandingPageNav/>
      {/* food exercice date section start */}
      <Flex mt={'3%'} mb={'5px'} className={styles.food_ex_date} >
        <Box>
          <Flex>
          {/* Add food button start */}
            <Box>
              <Menu>
                <MenuButton as={Button} m={0} p={0} >
                 <Image 
                  src='data:image/png;base64,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' 
                 alt='food'
                
                 />
                </MenuButton>
                <MenuList minWidth={'130px'} minH='30px' >
                  <MenuItem minH='30px' fontSize={'0.8rem'}>
                    <Image
                      boxSize='1.6rem'
                      borderRadius='20%'
                      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JJREFUeNp0lN+O21QQxr855ziJ7ewmq3SBbhcB2jt4hpZH4AaJCx6ivAEXiHvEDVc8B5X6ENxWqoSoWvXPsunuJpvEdmwffraBbi9wFNkez3wz8803xx5/qTydHTw8+mjxVTbLP3fBSzL1l3H3QY5/rGvFtpbirc9to6qsy/M/nv20vd7+Ekbp6NuzB/d/nJ99IcvmctmBlIyl/Z44k40z2WiiWG6xVYoAWTKSar4XN9zL6dHT33948ui3NNy5t3g4O7mnuC8Ub972zs774b2qZLEBslG7vRZlAEQi7xR3a7WbK8Aq5XdPtTg9/sbl0/CJdZ0RoAaA3TVAOyk4QGpZXWCvqKrEh/ckcCvUFoA3O5igdSdls8mZc0kTLZD9YEJLlFWvpO2FzAEeWoDXvC+xb7BBmG9IuJRVK4DBz1MZfs7XbTDfZadcAZbnffmxvOyB1PAvdnAHe90wHN+3VF8CNPaydNJXqeqS75WCBcD2S8X1XjY/kU0nateA3VDhGKJnSc+RGtopIXzTVYEtO8LG+80r4qk6qRX8GDBb99zETSU3nsk5JrWYyo4/lFKmS3uRgLi5kN7S4jrIym6a8Nu1C98+2UPzCLAAstFmfYGWcPj4M+nkjGx3ZD5HW3BHQmpSEwBxL+X/etPrrOdbTH1UDWBu1IGRvVgpHt6VFseQTWWBKpMjReTRKdWazi9TnCaKq+dyqxvZBL9YoO2SjhLIJZujOuev1R5SiRsRijTQjDEyM9oyNwDyi9ibrJEzWnZQFAq6aBiA36OZZS+ziFg1nRKDOB0OhuoFIA3KCjKzAfg7V6tNR2qNFjfn2CKFAPbyT+nydT3sGsMbl08p7FXPlfkUox8WMcIVIo3oLdJui/6qF1BT1v0K71BIWL6R5nN8sQTAqifPKblTf7fRrd5dNiw+7Ud2rkWDTWn938WoKxYiTDLkmg1hASGGPEMeySDS/7kiwW1VsxRbNbTcsTmuOrBUfpIPJ4sDzOdj7pN/qnj/sttgTM8zxdb1I1HWKQzYZTbVaeymN/JsTAeWqntn5roN2R9J/UOrliVoCY9hsFGowmatX0n0fX4Y+wEo7frVe0DvzsP4nyHiE/v+hgNldaXHgYefXzxTuvggfp0dVp8a+2dIo4v+F+TW4To8kZ1xwlulfRGLy3M94jz47m8BBgCLqaBGd6jUcwAAAABJRU5ErkJggg=='
                      alt='Fluffybuns the destroyer'
                      mr='5px'
                    />
                    <span>Breakfast</span>
                  </MenuItem>
                  <MenuItem minH='30px' fontSize={'0.8rem'}>
                    <Image
                      boxSize='1.6rem'
                      borderRadius='20%'
                      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9dJREFUeNp8VFuLHEUYPVVd3T3d2z2zt7hjNN4CuokJXhZvYUEUFOODkidfRBBB85R/oCD4F3zw2Qd9Cwo+iUJQULyAF9S4u6BRdrNm07s7s3Pr7rp4qndNgojF1FTN13ynz3e+8404+uLDSZYvnD26+Nyrs4eOLcZRBgGHQIKruXFLf+W35WEYd7AO3AJlufd5sbnypi56X6toauGFe5dee+OBk6ens1AiUoBibiCafLSDHqaCvkfGnpnG0OVN3FrAELDW9rEv9OjjnSg9o/Lu8suHb31oujIGfVMhIpCUAc8a96df4p7WL2irHnRdomcVfpwsY8Usk5wjmENtXHB88Sn8/Nu3ryvZumNOuxYmpQWJwUjBEh2W8gt4pPMdRNyFk3MI6h7m5e941L6L8cDgV/0ky6xhrC/XIopvelBaLe2kAsal3wLDMkRmNnAi/QZCteHCQxDRfHM3cgYxX3hCfgBR7WBUBphMBMbMryoB5XgpR2RDMXVAYSlzpjaRyQLazUDaMUvyr695asYUZsUaZFVgVM8yZtgSNoKgymoi8yIIogPb9KqKDfN6sNW2bxw7oZgzIF6P8QGBJ5SFVZCNsPs9LktJZrVoqDJCzZr+4w/Zxe7QYhqXKPwAQgR8PoYpd6D0Zfw57mJrMIeSb7Z+M62c0AWmkuj1JeqWRKwsbWGxVt6Oz9JTeP7I+2xGgZoNEq5EbLYwqSf4dOsc/hrONP7QRqIyAv096cEEtncFdpUgMwYCbw2Fd7ZfwpUdh6ePfITDU6u0gMBKfwHnL53DJ1fOQNO1dFMTr72kLFtBUxItqQnr9o6mSEJY7NoEbxdn8eHaadycblD4AOuD23B51EWjhqCYzjtb+A9ADOUDgn7xfg+EIbsaStTUfL+zV8dz2BwuNK5XfDYTbTdD5pxnFDfdtc5rqtmAqECVFBAyoutLJGEP7XDAiTT783TD+uen82PkQvSqNkqdo0bC+SugqrSP9ZPfw0UBMlSwHJ1Y7iEkS+GzriFcB3Wsa0xGV00HGybHSMZIiqGf6RhZnMHFCjkV6wSGww3E1K3xy7/pHayIzIZkNbA5QWJEofPNC1U7noZoKWQch5yRLGgh8szw38vrLjn0bZNhoDNaKuYM+26OVlc74dIxmcwjdSMChUhVisizEtfLczfqdgCWmQQdnSKOUtpkaz2YvSXaitPk2c5dx9O0lSNrtdCKEshwikOeXds42Pv3HCai8KoDpzJEX53HeO3iW+LuZx6nDZL7ou6dr8Qzp56YSjKRcEalxP8s/imQ+LByejgpfqh7P12oLsr3/hZgAI+twYXhJAISAAAAAElFTkSuQmCC'
                      alt='Simon the pensive'
                      mr='5px'
                    />
                    <span>Lunch</span>
                  </MenuItem>
                  <MenuItem minH='30px' fontSize={'0.8rem'}>
                    <Image
                      boxSize='1.6rem'
                      borderRadius='20%'
                      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BJREFUeNp0VMtuHEUUPfXo13hm5HHwxA4OJFhOIAYheccGESlLNlnzC6z4FBYsWbFFbPiFSFmwAQnxUCTLNmHkePyYGU+/qrqaUzVjbAtRmqvqnu4+99xz7i2x+sGGiqLkedrdfJ6sbOwJGQFoIeCXwPLi9mr9rw3PW5s3k9Pfv/zsQr/QQqinj3affbu9vdfrdVcglYKWElorSI8lRIirZRsH53Fa7rywzuGPP3/54cVPP36hho8//ub93adP4jiGtQ363RSx1ricF+FF21g0BKhqi8ebPdwbZDi/zDHNKxhrURuDbu+t9PR8vCZVevcjITXKyqCsDSSpK1IqDUEIpqTiBzbE4fgST95exSc7Q6zEit9YJjFM2CDrbT6TrROo/J8Max0OR6fYfz2GMQ0ipbE1XENdNajrBhfTEvOyRjcS2FlfQcNKqtKiLA3ZI9KuaduclLfvryNLY+wfvUEcR9TN4fTsEheTHHyHOjl4a4qqJkCFVDt4hHfvDTGZlSGhbi3IymF0PEESaZiawlInpQQNaOC1l0KCOUG3kOcliqKErUo0ZH9wNEZtmawBtHekJtWTegpNJ6NIUaeGISHltZM1Jdjd6pPVAux8mmM2rzGZzyGoq+Nz3RhSLwyBAKcRMkjh/gXzWWMt8eGDVbw3TAhQsKQKB8cFNTTB6YYSGFanLame0KVIi8AqZniGPrJUY+/ROna2etgYaAKVyIsCr/6a4eVvU8xIwtAEw4Q1WWqQiaFTHnnZ875Tw+578/xshtHDAe704yD+wWiGV6/nbCMXmjq8xDJBQO1vRMt/2xtz0y6Gxa834wJ/H8/p5mJ8vDGaKMpr2d4YL4aGsASrw3iEKbkBdLW8nrdGs10AiDC6noTkraUBWYXqfhXAEorejSIk1Essqv0PMJYJDbtgzlEq2GuOZeqTkszoVDsgbSfDTPY7CQHjhR7/szyYB7F5y3Fij7F0TKWHUjJBQqKeWczI2N3xQpNrSZYnURu09fq17PZEAolgXy7EYFO7Oo9VEqpOdIROnCGLEyiB67PM7+76PmjGAU8NTxNOkFISVquJygbperq59WnU6SNLYnQ7HaQJwQgsWXYIudzVIrwjjiNWMoElDd/p1f6vX+lmMvm6/PnlO8ndh5/n6Z21syxDzhkVwO1T9soJlh8MoGYlDZBldVZfHH4nRkff/yPAAEdy2hjdVTspAAAAAElFTkSuQmCC'
                      alt='Simon the pensive'
                      mr='5px'
                    />
                    <span>Dinner</span>
                  </MenuItem>
                  <MenuItem minH='30px' fontSize={'0.8rem'}>
                    <Image
                      boxSize='1.6rem'
                      borderRadius='20%'
                      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACfElEQVR42q2UzU8TURTF7wo37liwYe+SNXHLngR3snLjP8AWbZEKxoKCLWBiRRMJGIkVIyZEEz+DiZqgNigQMDTYIBShTOej7XRmjve+N21qwkbCJL+8vvPOOdM3b1pajlDTRi/FfvZSjsExyEleemjzEg3upS/AyszA2Xj530hO8tJD2cuUL34ah/Vt6thIPhuhPG1FCMUPQzBCiiHO6lO4Oxn4zj4Q+Gp0dzNKLy4O/Qv7t6IEyvURDl/01DHeRFHOvlYFR16sy7r4GnO5K1y2HSMUnnTXKa/Pq4xv51Fam4P5Ngp7KQXzXT9Kq3NKl0t8jbntfi7bvcpl0x0K631Ub8nagbU4gAOl9SFwLRzOdqq5zbqsi89kv+RE3x3gsr1B3ubdNhQm21BZS6u7lr7eQYE10e1XPQgqJoyHHShn7sN4cFatyyV+yYn3D/fQwXUum2hV+IV1ZTIfd2ptvBX2wkUEVRt+8Rcq36dgpM7ATHfqR8H+mk966DDOpzl6GgYD31UmI9Gs5qI7892AV1FjMdSMZLM+DPbXfMYQl1k3CGaIv7+iPM50O6xhrZWfnUOJMXkuXsGZaddd7DdDn+jk3CTYwgjBW04pk/sxBmdE6zLWPotH/FVel6vK/kYPVW7x3Uc17vMuPiUPgbEJd+F8XVeEvirrsi4+8dfXGHITXJJkEhp/Ka7fTQ74n2PwZtvhTpxClUeZqyLZIvtqmWo4kjfG2xOSevTvtSCQQr7z0b8A/uZf4vAmW1TGH9NIloJxnjBBA2q+0IXgBz/Dwoo+ZRl5rvQGn9+QJ0xQnsEJkJeywRMpu0382j6ipu1rNMz8ZnAMJDcs/7R/AdvSLa8NLenCAAAAAElFTkSuQmCC'
                      alt='Simon the pensive'
                      mr='5px'
                    />
                    <span>Snacks</span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>

            {/* Add food button end */}
            {/* Add Exercise button start */}
            <Box>
            
            </Box>
            {/* Add Exercise button end */}
          </Flex>
        </Box>
        <Spacer />
        <Flex gap="2rem" margin="auto" alignItems="center" mt="2%">
        <Button colorScheme='blue' onClick={()=>{setDate(date-1);
        changedate(-1)
        }}>{`<`}</Button>
        <Text>{show}</Text>
        <Button colorScheme='blue' onClick={()=>{setDate(date+1);
changedate(1)
        }}>{`>`}</Button>
        </Flex>
      </Flex>
      {/* food exercice date section end */}
      {/*  budget food section start  */}
      <Box className={styles.page_container} >
        <Flex>
          <Box className={styles.buget_main_box} >
            <table className={styles.table_top}>
              <thead>
                <tr>
                  <th className={styles.gray_heading} >Budget<Text color={'blackAlpha.900'}>2,200</Text></th>
                  <th className={styles.gray_heading}>Food<Text color={'blackAlpha.900'}>{total}</Text></th>
                  <th className={styles.gray_heading}>Exercise<Text color={'blackAlpha.900'}></Text></th>
                  <th className={styles.gray_heading}>Net<Text color={'blackAlpha.900'}></Text></th>
                  <th className={styles.gray_heading}>Under<Text color={'blackAlpha.900'}></Text></th>
                </tr>
              </thead>
            </table>
            {/* Breakfast start */}
            <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Hello</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>ADD</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
              {/* <table className={styles.table_top2}>
                <thead>
                  <tr>
                    <th className={styles.eating} colspan="4">Breakfast: <span>{morning.length}</span></th>
                    <th><input className={styles.input} onChange={handleInputTextChange1} type='text' placeholder='search & Add food' /></th>
                  </tr>
                  {
                    suggestions1.length > 0 ?
                    <Box className={styles.dropdown}>
                    {
                      suggestions1.map((food)=>(
                        <Box cursor="pointer" onClick={()=>{ getItem(food._id,1)}}>
                          <Flex className={styles.food} key={food._id} my={2} mx={5} gap={4}>
                            <Image height={'25px'} borderRadius='30px' src={food.url} alt="" />
                            <Text>{food.name}</Text>
                          </Flex>
                        </Box>
                      ))
                    }
                    </Box>
                    :""
                  }
                 
                </thead>
              </table> 
             <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                  <tbody>
                    
                      {morning.map(e=>
                      <tr key={e._id}>
                      <td>
                       <Flex>
                       <Spacer/>
                        <Image src={e.url} width="4%" />
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.name}</Text>
                        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
                        <Text>{e.unit}</Text>
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.cal}</Text>
                        <Spacer/><Spacer/>
                        </Flex> 
                        </td>
                      </tr>
                      )}
                  
                  </tbody>
                </table>
              </Box> */}
            </Box>
            {/* Breakfast end */}
            {/* lunch start */}
            <Box>
              <table className={styles.table_top2}>
                <thead>
                  <tr>
                    <th className={styles.eating} colspan="4">Lunch: <span>{afternoon.length}</span></th>
                    <th><input className={styles.input} onChange={handleInputTextChange2} type='text' placeholder='search & Add food' /></th>
                    {/* <th><input type='text' className={styles.input} placeholder='search & Add food' /></th> */}
                  </tr>
                  {
                    suggestions2.length > 0 ?
                    <Box className={styles.dropdown}>
                    {
                      suggestions2.map((food)=>(
                        <Box cursor="pointer" onClick={()=>{ getItem(food._id,2)}}>
                          <Flex className={styles.food} key={food._id} my={2} mx={5} gap={4}>
                            <Image height={'25px'} borderRadius='30px' src={food.url} alt="" />
                            <Text>{food.name}</Text>
                          </Flex>
                        </Box>
                      ))
                    }
                    </Box>
                    :""
                  }
                 
                </thead>
              </table>
              <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                  <tbody>
                  {afternoon.map(e=>
                      <tr key={e._id}>
                      <td>
                       <Flex>
                       <Spacer/>
                        <Image src={e.url} width="4%" />
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.name}</Text>
                        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
                        <Text>{e.unit}</Text>
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.cal}</Text>
                        <Spacer/><Spacer/>
                        </Flex> 
                        </td>
                      </tr>
                      )}
                  </tbody>
                </table>
              </Box>
            </Box>
            {/* lunch end */}
            {/* Dinner start */}

            <Box>
              <table className={styles.table_top2}>
                <thead>
                  <tr>
                    <th className={styles.eating} colspan="4">Dinner: <span>{dinner.length}</span></th>
                    <th><input className={styles.input} onChange={handleInputTextChange3} type='text' placeholder='search & Add food' /></th>
                  </tr>
                  {
                    suggestions3.length > 0 ?
                    <Box className={styles.dropdown}>
                    {
                      suggestions3.map((food)=>(
                        <Box cursor="pointer" onClick={()=>{ getItem(food._id,3)}}>
                          <Flex className={styles.food} key={food._id} my={2} mx={5} gap={4}>
                            <Image height={'25px'} borderRadius='30px' src={food.url} alt="" />
                            <Text>{food.name}</Text>
                          </Flex>
                        </Box>
                      ))
                    }
                    </Box>
                    :""
                  }
                </thead>
              </table>
              <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                  <tbody>
                  {dinner.map(e=>
                      <tr key={e._id}>
                      <td>
                       <Flex>
                       <Spacer/>
                        <Image src={e.url} width="4%" />
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.name}</Text>
                        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
                        <Text>{e.unit}</Text>
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.cal}</Text>
                        <Spacer/><Spacer/>
                        </Flex> 
                        </td>
                      </tr>
                      )}
                  </tbody>
                </table>
              </Box>
            </Box>

            {/* Dinner end*/}

            {/* Snacks start */}

            <Box>
              <table className={styles.table_top2}>
                <thead>
                  <tr>
                    <th className={styles.eating} colspan="4">Snacks: <span>{snack.length}</span></th>
                    <th><input className={styles.input} onChange={handleInputTextChange4} type='text' placeholder='search & Add food' /></th>
                  </tr>
                  {
                    suggestions4.length > 0 ?
                    <Box className={styles.dropdown}>
                    {
                      suggestions4.map((food)=>(
                        <Box cursor="pointer" onClick={()=>{ getItem(food._id,4)}}>
                          <Flex className={styles.food} key={food._id} my={2} mx={5} gap={4}>
                            <Image height={'25px'} borderRadius='30px' src={food.url} alt="" />
                            <Text>{food.name}</Text>
                          </Flex>
                        </Box>
                      ))
                    }
                    </Box>
                    :""
                  }
                </thead>
              </table>
              <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                  <tbody>
                  {snack.map(e=>
                      <tr key={e._id}>
                      <td>
                       <Flex>
                       <Spacer/>
                        <Image src={e.url} width="4%" />
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.name}</Text>
                        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
                        <Text>{e.unit}</Text>
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.cal}</Text>
                        <Spacer/><Spacer/>
                        </Flex> 
                        </td>
                      </tr>
                      )}
                  </tbody>
                </table>
              </Box>
            </Box>

            {/* Snacks end */}

            {/* Exercise start */}
            <Box>
              <table className={styles.table_top2}>
                <thead>
                  <tr>
                    <th className={styles.eating} colspan="4">Exercise: <span>{exercise.length}</span></th>
                    <th><input className={styles.input} onChange={handleInputTextChange5} type='text' placeholder='search & Add food' /></th>
                  </tr>
                  {
                    suggestions5.length > 0 ?
                    <Box className={styles.dropdown}>
                    {
                      suggestions5.map((food)=>(
                        <Box cursor="pointer" onClick={()=>{ getexercise(food._id,5)}}>
                          <Flex className={styles.food} key={food._id} my={2} mx={5} gap={4}>
                            <Image height={'25px'} borderRadius='30px' src={food.url} alt="" />
                            <Text>{food.name}</Text>
                          </Flex>
                        </Box>
                      ))
                    }
                    </Box>
                    :""
                  }
                </thead>
              </table>
              <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                <tbody>
                  {exercise.map(e=>
                      <tr key={e._id}>
                      <td>
                       <Flex>
                       <Spacer/>
                        <Image src={e.url} width="4%" />
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.name}</Text>
                        <Spacer/><Spacer/><Spacer/><Spacer/><Spacer/>
                        <Spacer/><Spacer/><Spacer/>
                        <Text>{e.cal}</Text>
                        <Spacer/><Spacer/>
                        </Flex> 
                        </td>
                      </tr>
                      )}
                  </tbody>
                </table>
              </Box>
            </Box>
            {/* Exercise end */}
          </Box>
          <Spacer />
          <Box className={styles.range_box}>
          <Progress colorScheme='green' height='32px' value={Math.ceil(total/22)} />
          <Flex width="90%" justifyContent="space-between"><Text fontSize='xs'>Daily calorie budget</Text><Text fontSize='xs'>2200</Text></Flex>
          <Flex width="90%" justifyContent="space-between"><Text fontSize='xs'>Food calories consumed</Text><Text fontSize='xs'>{total}</Text></Flex>
          <Flex width="90%" justifyContent="space-between"><Text fontSize='xs'>Exercise calories burned</Text><Text fontSize='xs'></Text></Flex>
          <Flex width="90%" justifyContent="space-between"><Text fontSize='xs'>Net calories so far today</Text><Text fontSize='xs'></Text></Flex>
          <br/>
          <Flex direction='column' boxShadow='lg' width="59%" height="50%" margin="auto" backgroundColor="#f4fcff">
          <Image src="data:image/png;base64,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"/>
         <Text fontSize='md' color="blue">Do more with Lose It ! Premium</Text>
          <Text fontSize='xs'>Plan meals, customize goals and more!</Text>
          </Flex>
           </Box>
        </Flex>
      </Box>
      {/*  budget food section start  */}
    </div>
  )
}

export default LandingPage