import { Avatar, Divider, Flex, Text } from '@chakra-ui/react';


const Comments = ({reply, lastReply}) => {

  return (
    <>
        <Flex gap={4} py={2} my={2} mb={8} w={"full"}>
            <Avatar name= {reply.name} src={reply.userProfilePic} size={"sm"}/>
            <Flex gap={1} w={"full"} flexDirection={"column"}>
                <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text fontSize={"sm"} fontWeight={"bold"}>{reply.username}</Text>
                </Flex>
                <Text>{reply.text}</Text>
            </Flex>
        </Flex>
        {!lastReply && <Divider/>}
        
    </>
  )
}

export default Comments