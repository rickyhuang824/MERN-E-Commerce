import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
    ),url('/asset/register/register-3.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    width: 61%;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal dadta in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
