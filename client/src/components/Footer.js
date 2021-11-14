import { Facebook, Instagram, MailOutline, PaymentOutlined, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Description = styled.p`
    margin: 20px, 0px;
`

const SocialMediaContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })};
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

const Footer = () => {
    return (
        <Container>
           <Left>
               <Logo>R.H</Logo>
               <Description>
                    This is a website wroted by Ricky Huang as a side projects. This website implented using MERN with e-commerce feature.
               </Description>
               <SocialMediaContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
               </SocialMediaContainer>
           </Left> 
           <Center>
               <Title>Useful Links</Title>
               <List>
                   <ListItem>Home</ListItem>
                   <ListItem>Cart</ListItem>
                   <ListItem>Man Fashion</ListItem>
                   <ListItem>Accessories</ListItem>
                   <ListItem>My Account</ListItem>
                   <ListItem>Order Tracking</ListItem>
                   <ListItem>Wishlist</ListItem>
                   <ListItem>Terms</ListItem>
               </List>
           </Center>
           <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>6560 Mountain Spirit Ct, Las Vegas, 89139</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+1 702-343-2891</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>rickyhuang0824@gmail.com</ContactItem>
                <PaymentOutlined/>
           </Right>
        </Container>
    )
}

export default Footer
