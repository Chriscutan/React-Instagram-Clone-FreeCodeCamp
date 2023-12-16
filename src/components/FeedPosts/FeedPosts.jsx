import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useEffect, useState } from "react";

function FeedPosts() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0, 1, 2, 3].map((_, index) => (
        <VStack key={index} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={10} />

            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height={'10px'} w={"200px"} />
              <Skeleton height={'10px'} w={"200px"} />
            </VStack>
          </Flex>

          <Skeleton w={"full"}>
            <Box height={"500px"}>
              Contents Wrapped
            </Box>
          </Skeleton>
          
        </VStack>
      ))}
      
      {
        !isLoading && (
          <>
            <FeedPost img='/img1.png' username="Chriscutan" avatar="/img1.png" />
            <FeedPost img='/img2.png' username="Joyson" avatar="/img2.png" />
            <FeedPost img='/img3.png' username="Jacob" avatar="/img3.png" />
            <FeedPost img='/img4.png' username="Samuvel" avatar="/img4.png" />
        </>
        )
      }
    </Container>
  )
}

export default FeedPosts