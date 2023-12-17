import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import AuthForm from '../../components/AuthForm/AuthForm'

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex>        
                {/* Left hand-side */}
                <Box display={{base: "none", md: "block"}}>
                    <Image src='/auth.png' h={650} alt='Phone img'/>
                </Box>

                {/* Right hand-side */}
                <VStack spacing={4} align={"stretch"}>
                    <AuthForm />

                    <Box textAlign={"center"}>
                        Get the app.
                    </Box>

                    <Flex gap={5} justifyContent={"center"}>
                        <Image src='/playstore.png' alt='Playstore logo' h={10}/>
                        <Image src='/microsoft.png' alt='Microsoft logo' h={10}/>
                    </Flex>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage;