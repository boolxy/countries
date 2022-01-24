import { Box, VStack, Image, useColorModeValue, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function CountryCard(country) {
  return (
    <Link to={`/${country.alpha3Code}`}>
      <Box borderRadius='lg' overflow='hidden' boxShadow='sm' h='full' _hover={{ boxShadow: 'xl' }} userSelect='none' cursor='pointer' transition='all'>
        <Image src={country.flag} w='full' h={160} objectFit='cover' />
        <VStack align='start' p={8} pb={16} spacing={4} h='full' bg={useColorModeValue('white', 'brand.800')} color={useColorModeValue('black', 'white')}>
          <Box fontWeight='bold' fontSize='lg' textShadow='base'>
            {country.name}
          </Box>
          <VStack spacing={1} justify='start' align='start'>
            <HStack>
              <Box as='span' fontWeight='semibold' fontSize='sm'>
                Population:
              </Box>
              <Box as='span' fontSize='sm'>
                {country.population.toLocaleString()}
              </Box>
            </HStack>
            <HStack>
              <Box as='span' fontWeight='semibold' fontSize='sm'>
                Region:
              </Box>
              <Box as='span' fontSize='sm'>
                {country.region}
              </Box>
            </HStack>
            <HStack>
              <Box as='span' fontWeight='semibold' fontSize='sm'>
                Capital:
              </Box>
              <Box as='span' fontSize='sm'>
                {country.capital}
              </Box>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Link>
  );
}
