import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Insights",
    description: "Latest trends and insights from the global markets.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Innovations",
    description: "The newest advancements in technology.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Business Strategies",
    description: "Effective strategies for modern businesses.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market hits all-time high",
  "New tech startups to watch",
  "Global economic outlook",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        <Box flex="3" mr={{ md: 4 }}>
          <Heading size="md" mb={4}>Latest News</Heading>
          <VStack spacing={4}>
            {articles.map((article, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="full">
                <HStack spacing={4}>
                  <Image boxSize="150px" src={article.image} alt={article.title} />
                  <VStack align="start">
                    <Heading size="sm">{article.title}</Heading>
                    <Text>{article.description}</Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Trending</Heading>
          <VStack spacing={2} align="start">
            {trendingArticles.map((title, index) => (
              <Text key={index}>{title}</Text>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;