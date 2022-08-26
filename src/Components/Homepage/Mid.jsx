import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {ArrowForwardIcon,ChevronDownIcon} from "@chakra-ui/icons"
import { Select } from '@chakra-ui/react'

export const Mid = () => {
  return (
   <>
   <Box display={"flex"} justifyContent="center" gap="10" mt="20" >
    <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
    <Box display={"flex"} height={"200px"} width={"450px"} borderBottom="1px solid darkgrey" >
        <Box p="5">
            <Box fontSize={"20px"} fontWeight="500">Do your friends like a weekend getaway?</Box>
            <Box mt="20px" fontSize="14px">
            You earn 1200 in Z-Points. Your friend gets 40% off on first booking
            </Box>
        </Box>
        
            <img src="https://zoomcar-assets.zoomcar.com/images/original/1e3becafed3e6151b17c104858b336bb7e076c11.jpeg?1658213048"   />
        
    </Box>
   
    <Box fontSize={"20"}>
    <ArrowForwardIcon/>
    REFER FRIENDS</Box>
    </Box>
    <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
    <Box display={"flex"} height={"200px"} width={"450px"} >
        <Box p="5">
           <Box fontSize={"24px"}>UP TO 50% OFF</Box>
            <Box mt="20px" fontSize="16px" fontWeight={"500"}>
            on your first booking from the app!
            </Box>
            <Box border="3px dashed grey" mt="3"  >
            Use Code: ZOOMAPP
            </Box>
            <Box fontSize="20" lineHeight={"100px"} color="red" fontWeight={"bold"} >
                Install ZoomCar App now!
            </Box>
        </Box>
        
            <img src="https://www.zoomcar.com/img/cellphone.png"   />
        
    </Box>
 
    </Box>
    
   
    
   </Box >

   <Box display="grid" gridTemplateColumns="repeat(2,1fr)" style={{marginLeft:"95px",paddingTop:"45px" }} gap="15px" >
   <Box width="476px" height="251px" >
    <img src="https://zoomcar-assets.zoomcar.com/pictures/original/418d6028cb695a1f4c51e31d190361c03493e257.jpeg?1655973605" />
   </Box>
   <Box width="476px" height="251px" >
    <img src="https://zoomcar-assets.zoomcar.com/pictures/original/d70e7f58da384df0f3ba169cf19e8e931879c66c.jpeg?1652354515"  />
   </Box>
   <Box width="476px" height="251px" >
    <img src="https://zoomcar-assets.zoomcar.com/pictures/original/e3dfe0ed91abc29facaf56a327b4498ce4e9b75e.jpeg?1652363808"  />
   </Box>
   <Box width="476px" height="251px" >
    <img src="https://zoomcar-assets.zoomcar.com/pictures/original/55c3970a33c8f4d10dd3c9ace39d20e32af5c8ba.jpg?1651758755"  />
   </Box>
   </Box>
   <Box>
    <img src="https://zoomcar-assets.zoomcar.com/pictures/original/1d8cdddd9d45435cbe1b4a5389a5879fc19dc179.jpeg?1652363899" style={{marginLeft:"133px"}} />
   </Box>

   <Box display={"flex"} justifyContent="space-evenly" mt="5">
   
    <Box>
        <img src="https://zoomcar-assets.zoomcar.com/pictures/original/1d8cdddd9d45435cbe1b4a5389a5879fc19dc179.jpeg?1652363899" height={"180px"} width="288px"/>
    </Box>
    <Box>
        <img src="https://zoomcar-assets.zoomcar.com/photos/original/1d96a8389f06beb050e83374b5e3ac9cb448e54c.jpg?1655705601" height={"180px"} width="288px"/>
    </Box>
    <Box>
        <img src="https://zoomcar-assets.zoomcar.com/photos/original/67aa017f464b45e52f7bc9a206245e5f15f5a316.jpg?1655478529" height={"180px"} width="288px"/>
    </Box>
    
   </Box>

   
<Select textAlign={"center"} color="grey" icon={<ChevronDownIcon mr="72rem"/>} borderBottomRadius="1px solid grey" placeholder="about Us" >
  <option value='option1'>Zoomcar Team</option>
  <option value='option2'>Zoomcar Subscription</option>
  <option value='option3'>Zoomcar Blog</option>
  <option value='option4'>Careers @ Zoomcar</option>
</Select>
<Box mt="33px" ml="60px" mr="60px" >
   <Box fontSize={"sm"} mt="5" >
    <h3 style={{fontWeight:"bold",marginBottom:"5px"}}>SELF DRIVE CARS IN MUMBAI</h3>
    The financial capital of India, Mumbai is a city which never sleeps. Buzzing with activity, it also holds the distinction of being the entertainment hub of the country. With a beach in its backyard and the picturesque Western Ghats a stone’s throw away, the city attracts visitors from all over the word. From the Gateway of India which opens the doors to India’s mysteries, to the ancient caves of Elephanta Island, and from the iconic Stock Exchange to the many studios where Bollywood movies are made, the city offers a multitude of sights and experiences.
    The downside of life in Mumbai is the difficulty commuting poses. Overloaded public transport and increasing distances add to the stress of living in Mumbai. Whether you are a visitor to this melting-pot of cultures, or a resident of the city, it is important to have a self-drive car at your disposal to make the most of your time. If you do not plan to buy a car of your own, Zoomcar offers the perfect solution by making the process of self- drive car booking in Mumbai convenient and affordable. The Zoomcar app allows you the freedom of booking a car at your fingertips.
   </Box>
   <Box fontSize={"sm"} mt="5">
    <h3 style={{fontWeight:"bold",marginBottom:"5px"}}>CAR ON RENT IN MUMBAI</h3>
    On many occasions, working professionals and business persons want to commute to different parts of the city in the same day. Usually, they hire a chauffeur driven car and pay extra for the waiting charges. This option, while popular, is also more expensive. It is more economical to opt for a self-drive car rental in Mumbai. You can spend any amount of time at a meeting without having to worry about the waiting charges, and use the car to explore Mumbai after work at your leisure. Zoomcar also provides Mumbai airport taxi service, using which you can pick up one of our cars right at the airport when you land. We have a variety of cars in our fleet including luxury brands which makes it easier to book luxury cars on rent in Mumbai.
   </Box>
   <Box fontSize={"sm"} mt="5">
    <h3 style={{fontWeight:"bold",marginBottom:"5px"}}>CAR RENTAL IN MUMBAI</h3>
    An ideal way to relax after a stressful week at the office is to go on a long drive from Mumbai to Pune or from Mumbai to Nasik. Enjoy the drive on the wide 6-lane Mumbai – Pune expressway with your loved ones by taking a car on hire in Mumbai. There are many religious sites, parks, and museums in Nasik which makes it an ideal location to unwind.
   </Box>
   <Box fontSize={"sm"} mt="5">
    <h3 style={{fontWeight:"bold",marginBottom:"5px"}}>ABOUT ZOOMCAR</h3>
    No more worries about petrol mileage, insurance, and car breakdowns! Zoomcar has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri and Vizag.  
    Self-drive cars from Zoomcar have given customers more control, privacy, and freedom. Book a self-drive car in any city you visit with the Zoomcar app on your phone and feel at home wherever you go. 
   </Box>
   </Box>
   <Box >
    <img src="https://www.zoomcar.com/build/6b51f1464b17dbb1d002f16e26572662.png" style={{height:"275px"}} />
   </Box>
   </>
  )
}
