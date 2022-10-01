import React, { useCallback, useEffect, useState } from 'react'
import {Box,Flex, Spacer, Text, Image, Button,Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react';
import styles from './LandingPage.module.css'
import LandingPageNav from '../../Components/LandingPageNav/LPN';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const {token}=useSelector((state)=>state.AuthReducer)||localStorage.getItem("token")
  // code for food search
  const [suggestions, setSuggestions] = useState([]);
  const [food, setFood] = useState([]);
  const [query, setQuery] = useState("");
  const getfoodData = () => {
    fetch("https://dry-plateau-25724.herokuapp.com/food",{method:"GET",headers:{"Authorization":`Bearer ${token}`}})
  .then(r=>r.json()).then(res=> setFood(res))
  }
  const handleInputTextChange = (e) => {
    setQuery(e.target.value);
  }
  useEffect(() => {
    if (query === "") {
      setSuggestions([])
    } else {
      let newfoodSuggestions = food.filter(item => {
        return item.name.toLowerCase().indexOf(query) !== -1 ? true : false;
      }).map((item) => {
        return (item)
      });
      setSuggestions(newfoodSuggestions);
      console.log(newfoodSuggestions);
    }
  }, [query])

  useEffect(() => {
    getfoodData();
  }, [])
  console.log(suggestions);
  console.log(food);

   // code for food search
  return (
    <div className={styles.background} >
      <LandingPageNav/>
      {/* food exercice date section start */}
      <Flex mt={'50px'} mb={'5px'} className={styles.food_ex_date} >
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
        <Box>
          <Text>Calender</Text>
        </Box>
      </Flex>
      {/* food exercice date section end */}
      {/*  budget food section start  */}
      <Box className={styles.page_container} >
        <Flex>
          <Box className={styles.buget_main_box} >
            <table className={styles.table_top}>
              <thead>
                <tr>
                  <th className={styles.gray_heading} >Budget<Text color={'blackAlpha.900'}>2,160</Text></th>
                  <th className={styles.gray_heading}>Food<Text color={'blackAlpha.900'}>2,160</Text></th>
                  <th className={styles.gray_heading}>Exercise<Text color={'blackAlpha.900'}>2,160</Text></th>
                  <th className={styles.gray_heading}>Net<Text color={'blackAlpha.900'}>2,160</Text></th>
                  <th className={styles.gray_heading}>Under<Text color={'blackAlpha.900'}>2,160</Text></th>
                </tr>
              </thead>
            </table>
            {/* Breakfast start */}
            <Box>
              <table className={styles.table_top2}>
                <thead>
                  <tr>
                    <th className={styles.eating} colspan="4">Breakfast: <span>0</span></th>
                    <th><input className={styles.input} onChange={handleInputTextChange} type='text' placeholder='search & Add food' /></th>
                  </tr>
                  {
                    suggestions.length > 0 ?
                    <Box className={styles.dropdown}>
                    {
                      suggestions.map((food)=>(
                        <Box>
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
                    <tr>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>
            {/* Breakfast end */}
            {/* lunch start */}
            <Box>
              <table className={styles.table_top2}>
                <thead>
                  <tr>
                    <th className={styles.eating} colspan="4">Lunch: <span>0</span></th>
                    <th><input type='text' className={styles.input} placeholder='search & Add food' /></th>
                  </tr>
                </thead>
              </table>
              <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                  <tbody>
                    <tr>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                    </tr>
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
                    <th className={styles.eating} colspan="4">Dinner: <span>0</span></th>
                    <th><input type='text' className={styles.input} placeholder='search & Add food' /></th>
                  </tr>
                </thead>
              </table>
              <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                  <tbody>
                    <tr>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                    </tr>
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
                    <th className={styles.eating} colspan="4">Snacks: <span>0</span></th>
                    <th><input type='text' className={styles.input} placeholder='search & Add food' /></th>
                  </tr>
                </thead>
              </table>
              <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                  <tbody>
                    <tr>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                    </tr>
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
                    <th className={styles.eating} colspan="4">Exercise: <span>0</span></th>
                    <th><input type='text' className={styles.input} placeholder='search & Add food' /></th>
                  </tr>
                </thead>
              </table>
              <Box minHeight={'70px'} backgroundColor={'white'}>
                <table style={{ "width": "100%" }} >
                  <tbody>
                    <tr>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                      <td><Text></Text></td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>
            {/* Exercise end */}
          </Box>
          <Spacer />
          <Box className={styles.range_box}>
          </Box>
        </Flex>
      </Box>
      {/*  budget food section start  */}
    </div>
  )
}

export default LandingPage