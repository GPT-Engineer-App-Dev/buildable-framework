import { useState } from "react";
import { Container, Heading, VStack, Button, Input, Box, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEvents, useAddEvent, useUpdateEvent, useDeleteEvent } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, isLoading, isError } = useEvents();
  const addEvent = useAddEvent();
  const updateEvent = useUpdateEvent();
  const deleteEvent = useDeleteEvent();

  const [newEvent, setNewEvent] = useState({ name: "", date: "" });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleAddEvent = () => {
    addEvent.mutate(newEvent);
    setNewEvent({ name: "", date: "" });
  };

  const handleUpdateEvent = () => {
    updateEvent.mutate(editingEvent);
    setEditingEvent(null);
  };

  const handleDeleteEvent = (id) => {
    deleteEvent.mutate(id);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error loading events</Text>;

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={4}>Events</Heading>
      <VStack spacing={4} width="100%">
        {events.map((event) => (
          <Box key={event.id} p={4} borderWidth={1} borderRadius="md" width="100%">
            {editingEvent && editingEvent.id === event.id ? (
              <VStack spacing={2}>
                <Input
                  placeholder="Event Name"
                  value={editingEvent.name}
                  onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
                />
                <Input
                  placeholder="Event Date"
                  value={editingEvent.date}
                  onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                />
                <HStack spacing={2}>
                  <Button colorScheme="teal" onClick={handleUpdateEvent}>Update</Button>
                  <Button onClick={() => setEditingEvent(null)}>Cancel</Button>
                </HStack>
              </VStack>
            ) : (
              <VStack spacing={2} align="start">
                <Link to={`/events/${event.id}`}><Text fontSize="lg" fontWeight="bold">{event.name}</Text></Link>
                <Text>{event.date}</Text>
                <HStack spacing={2}>
                  <Button size="sm" onClick={() => setEditingEvent(event)}>Edit</Button>
                  <Button size="sm" colorScheme="red" onClick={() => handleDeleteEvent(event.id)}>Delete</Button>
                </HStack>
              </VStack>
            )}
          </Box>
        ))}
        <Box p={4} borderWidth={1} borderRadius="md" width="100%">
          <VStack spacing={2}>
            <Input
              placeholder="Event Name"
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            />
            <Input
              placeholder="Event Date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <Button colorScheme="teal" onClick={handleAddEvent}>Add Event</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Events;