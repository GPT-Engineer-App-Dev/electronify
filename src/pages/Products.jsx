import { Box, SimpleGrid, Image, Text, Button, VStack, Heading, Select } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", category: "Electronics", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", category: "Electronics", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", category: "Wearables", image: "/images/smartwatch.jpg" },
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedCategory, setSelectedCategory] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    let products = sampleProducts;

    if (searchQuery) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      products = products.filter((product) => product.category === selectedCategory);
    }

    setFilteredProducts(products);
  }, [searchQuery, selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">Products</Heading>
      <Select placeholder="Select category" onChange={handleCategoryChange} mb={6}>
        <option value="Electronics">Electronics</option>
        <option value="Wearables">Wearables</option>
      </Select>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4} spacing={2} align="start">
              <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
              <Text>{product.price}</Text>
              <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;