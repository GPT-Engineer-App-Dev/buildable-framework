import { useParams } from "react-router-dom";
import { Container, Heading, VStack, Text, Box, Input, Button } from "@chakra-ui/react";
import { useEvent, useComments, useAddComment } from "../integrations/supabase/index.js";
import { useState } from "react";

const EventDetails = () => {
  const { id } = useParams();
  const { data: event, isLoading: eventLoading, isError: eventError } = useEvent(id);
  const { data: comments, isLoading: commentsLoading, isError: commentsError } = useComments();
  const addComment = useAddComment();

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    addComment.mutate({ content: newComment, event_id: id });
    setNewComment("");
  };

  if (eventLoading || commentsLoading) return <Text>Loading...</Text>;
  if (eventError || commentsError) return <Text>Error loading event details or comments</Text>;

  const eventComments = comments.filter(comment => comment.event_id === parseInt(id));

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={4}>{event.name}</Heading>
      <Text fontSize="lg" mb={4}>{event.date}</Text>
      <VStack spacing={4} width="100%">
        {eventComments.map((comment) => (
          <Box key={comment.id} p={4} borderWidth={1} borderRadius="md" width="100%">
            <Text>{comment.content}</Text>
          </Box>
        ))}
        <Box p={4} borderWidth={1} borderRadius="md" width="100%">
          <VStack spacing={2}>
            <Input
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button colorScheme="teal" onClick={handleAddComment}>Add Comment</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default EventDetails;