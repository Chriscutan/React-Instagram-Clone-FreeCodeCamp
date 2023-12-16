import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"lg"} src="/profilepic.png" />

        <Text fontSize={12} fontWeight={"bold"}>
          asaprogrammer
        </Text>
      </Flex>

      <Link as={RouterLink} to={"/auth"} style={{textDecoration: "none"}} fontSize={14} fontWeight={"medium"} color={"blue.400"} cursor={"pointer"}> 
        Log out
      </Link>
    </Flex>
  )
}

export default SuggestedHeader