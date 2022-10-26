import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Fade, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './LandingPage.module.css'
const Component2 = ({name}) => {
const [list, setlist] = useState([])
const [food, setfood] = useState([])
const [item, setitem] = useState({})
const [morning,setmorning]=useState([])
const [query, setQuery] = useState("")
const [qty, setqty] = useState(1)
const {total,date}=useSelector((state)=>state.Reducer)
const handleInput = (e) => {
  setQuery(e.target.value);
}
const addFood=(item)=>{
  console.log(item)
  let flag=false;
for(let i=0;i<food.length;++i)
{
  if(food[i].name===item.name)
  flag=true;
}
console.log(flag)
if(!flag)
{let newitem={...item,qty}
console.log(newitem)
let y=[...food];
y.push(newitem)
getData(y)
}

setqty(1)
setlist([])
setitem({})
}

const getData=async(item)=>{
  const token=localStorage.getItem("token")||"";
  setfood(item)
  await axios.post("http://localhost:8080/day",{exercise:item,date},{headers:{"Authorization":`Bearer ${token}`}}).then((r)=>console.log(r))
 
 }

useEffect(() => {
  const token=localStorage.getItem("token")||"";
  if(query.length>0)
  {fetch(`http://localhost:8080/exercise?name=${query}`,{method:"GET",headers:{"Authorization":`Bearer ${token}`}})
  .then(r=>r.json()).then(res=> setlist(res))}
  else
  setlist([])

 axios.post("http://localhost:8080/day/details",{date},{headers:{"Authorization":`Bearer ${token}`}}).then(r=>{
 setfood(r.data.exercise)


 }
 
 )
}, [query,date])


  return (
<Box w='100%'>
    <Flex w='100%' m='auto' h="28px" justifyContent="space-between" bg='#edf0f3'>
        <Text fontWeight="bold" ml="1%">Exercise:{food.length}</Text>
        <Input w="25%" onChange={handleInput} h='90%' mr="1%" bg="white" placeholder='Search and add food'  _placeholder={{ opacity: 1, color: 'gray.500',fontSize:'xs' }}/>
        {list.length>0&&<Box className={styles.dropdown}>
        {!item.name&&list.map(e=>(
          <Flex h="35px" _hover={{bg:"#edf0f3"}} cursor="pointer" onClick={()=>setitem(e)} key="e._id">
            <Image w="12%" src={e.url} alt={e.name}/>
          <Text>{e.name}</Text>
          </Flex>
          
        ))}
        {item.name&&<Box>
          <Flex onClick={()=>setitem({})} alignItems="center" gap="2rem" h="30px" bg="#edf0f3">
          <i class="fa-solid fa-arrow-left-long"></i>
          <Text>Search Results</Text>
          </Flex>
          <br/>
          <Flex alignItems="center" gap="2rem">
          <Image w="12%" src={item.url} alt={item.name}/>
          <Text>{item.name}</Text>
          </Flex>
          <br/>
          <Flex>
            <Input value={qty}/>
            <Button onClick={()=>setqty(qty-1)} disabled={qty<=0}>{'-'}</Button>
            <Button onClick={()=>setqty(qty+1)}>{'+'}</Button>
          </Flex>
          <br/>
          <Button colorScheme='whatsapp' onClick={()=>{addFood(item);
          }}>Add Exercise</Button>
          </Box>}
       </Box>}
    </Flex> 
    <Box h="auto" minHeight="100px" bg="white" zIndex="0">
{food.length===0&&<Text pt="6%">No exercise logged</Text>}
{food.length>0&&food.map(e=>(
<Flex alignItems="center">
<Flex alignItems="center" gap="2rem">
<Image w="50px" src={e.url} alt={e.name}/>
<Text fontWeight="bold">{e.name}</Text>
</Flex>
<Spacer/><Spacer/>
<Flex alignItems="center" gap="1rem" fontWeight="bold"><Text>{e.qty}</Text><Text>{e.unit}</Text></Flex>
<Spacer/>
<Text fontWeight="bold" pr="10px">{e.cal*e.qty}</Text>
</Flex>
))

}
    </Box>
</Box>
  )
}

export default Component2