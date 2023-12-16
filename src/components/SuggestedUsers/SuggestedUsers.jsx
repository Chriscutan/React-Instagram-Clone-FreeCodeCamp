import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"


function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>

            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser name="Jacob Tennyson" followers={1203} avatar="https://bit.ly/jacob-tennyson" />
        <SuggestedUser name="Joyson Neelkumar" followers={1203} avatar="https://bit.ly/joyson-neelkumar" />
        <SuggestedUser name="Samuvel Raj" followers={1203} avatar="https://bit.ly/samuvel-raj" />

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            @ 2023 built By {" "}

            <Link href="https://www.youtube.com/channel/UCyOnw_eUZ-ebCBHAgLJHD0A" target="_blank" color={"blue.500"} fontSize={14}>
                CodeCrafting with Chris           
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers