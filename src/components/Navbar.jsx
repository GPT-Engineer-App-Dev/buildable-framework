import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex as="nav" justify="space-between" align="center">
        <Link as={NavLink} to="/" color="white" fontWeight="bold" fontSize="lg">
          Home
        </Link>
        <Link as={NavLink} to="/events" color="white" fontWeight="bold" fontSize="lg">
          Events
        </Link>
        <Link as={NavLink} to="/about" color="white" fontWeight="bold" fontSize="lg">
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;