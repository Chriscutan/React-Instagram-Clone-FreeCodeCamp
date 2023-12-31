import { Box, Grid, Skeleton, VStack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import ProfilePost from "./ProfilePost"

function ProfilePosts() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Grid templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }} gap={1} columnGap={1}
    >
      {
        isLoading && [0, 1, 2, 3, 4, 5].map((_, index) => (
          <VStack key={index} alignItems={"flex-start"} gap={2}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>
                Content Wrapped
              </Box>
            </Skeleton>
          </VStack>
        ))
      }

      {!isLoading && (
        <>
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img2.png" />
          <ProfilePost img="/img3.png" />
          <ProfilePost img="/img4.png" />
        </>
      )}
    </Grid>
  )
}

export default ProfilePosts