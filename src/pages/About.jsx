import { Box, Text, Image, Heading, VStack, Flex } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Us</Heading>
      <Text fontSize="lg" mb={6}>
        Welcome to our website! We are dedicated to providing the best service possible. Our team is passionate about what we do and we strive to exceed your expectations.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Our Mission</Heading>
      <VStack spacing={5}>
        <Text>
          Our mission is to deliver high-quality products that bring value to our customers. We believe in innovation, integrity, and excellence in everything we do.
        </Text>
        <Image src="/images/mission.jpg" alt="Our Mission" borderRadius="md" />
      </VStack>
    </Box>
  </Box>
);

export default About;