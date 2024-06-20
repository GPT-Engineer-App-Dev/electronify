import { Box, Flex, Link, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/products?search=${searchQuery}`;
  };

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Electronics Store</Link>
        </Box>
        <Flex alignItems="center">
          <form onSubmit={handleSearchSubmit}>
            <InputGroup size="md" mr={4}>
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Search products"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <InputRightElement width="4.5rem">
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </form>
          <Button as={RouterLink} to="/products" colorScheme="teal" variant="outline" mr={4}>Products</Button>
          <Button as={RouterLink} to="/contact" colorScheme="teal" variant="outline">Contact</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;