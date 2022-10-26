import { Box, Button, Flex, Image, Progress, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_DATE } from '../../Redux/Action.type'

const Right = () => {
  const dispatch=useDispatch()
  const [num, setnum] = useState(1)
  const {date,total}=useSelector(state=>state.Reducer)
var today = new Date();
let y=today.getMonth(); let b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
var date12 = b[y]+' '+today.getDate()+','+today.getFullYear();
  const [show, setshow] = useState(date12)
const handleDate=(val)=>{
  
  if(val===1)
  { 
    setnum(num+1)
    let g=num*24*60*60*1000;
    let t=new Date(new Date().getTime() - g);
    let y=t.getMonth(); let b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    let h=b[y]+' '+t.getDate()+','+t.getFullYear();
    dispatch({type:ADD_DATE,payload:h});
  }
  else if(val===2)
  {
    setnum(num-1)
  let g=num*24*60*60*1000;
  let t=new Date(new Date().getTime() - g);
  let y=t.getMonth(); let b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
  let h=b[y]+' '+t.getDate()+','+t.getFullYear();
  dispatch({type:ADD_DATE,payload:h});
}
}


  useEffect(() => {
 console.log(date)
  }, [date])
  
 
  // This arrangement can be altered based on how we want the date's format to appear.
 
  return (
    <Box w="35%" bg="white" >
      <Flex gap="1rem" alignItems="center">
      <Button bg="#f0f0f0" border="1px solid grey" onClick={()=>{handleDate(1)
    }}><i class="fa-sharp fa-solid fa-caret-left fa-lg"></i></Button>
      <Text fontWeight="bold">{date}</Text>
      <Button bg="#f0f0f0" border="1px solid grey" onClick={()=>{handleDate(2)
    }}><i class="fa-solid fa-caret-right fa-lg"></i></Button>
      </Flex>
      <br/>
      <Flex direction="column" border="1px solid #edf0f3" padding="10px">
      <Flex>
      <Progress colorScheme='green' height='32px' value={100} w="75%"/>
      <Progress colorScheme='red' height='32px' value={28} w="25%" />
        </Flex>
      <br/>
          <Flex width="90%" justifyContent="space-between"><Text fontSize='xs'>Daily calorie budget</Text><Text fontSize='xs'>2200</Text></Flex>
          <Flex width="90%" justifyContent="space-between"><Text fontSize='xs'>Food calories consumed</Text><Text fontSize='xs'>{total}</Text></Flex>
          <Flex width="90%" justifyContent="space-between"><Text fontSize='xs'>Exercise calories burned</Text><Text fontSize='xs'></Text></Flex>
          <hr/>
          <Flex width="90%" justifyContent="space-between"><Text fontSize='xs'>Net calories so far today</Text><Text fontSize='xs'></Text></Flex>
          <br/>
          <Flex direction='column' boxShadow='lg' width="59%" height="50%" margin="auto" backgroundColor="#f4fcff">
          <Image src="data:image/png;base64,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"/>
         <Text fontSize='md' color="blue">Do more with Lose It ! Premium</Text>
          <Text fontSize='xs'>Plan meals, customize goals and more!</Text>
          </Flex>
      </Flex>
          
           </Box>
  )
}

export default Right