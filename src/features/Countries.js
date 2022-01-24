import { Container, SimpleGrid, GridItem, VStack, Stack, InputGroup, InputLeftElement, Input, useColorModeValue, Icon, Box } from '@chakra-ui/react'
import { HiSearch } from "react-icons/hi";
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useListQuery } from './../services/country'
import { CountryCard } from './CountryCard'
import { Regions } from './Regions';

export function Countries({ search, region }) {
  const { data, error, isLoading } = useListQuery(search)
  const navigate = useNavigate();
  const brandBgColor = useColorModeValue('white', 'brand.800');
  const searchInputPlaceholderColor = useColorModeValue('gray.400', 'gray.200');
  const searchInputIconColor = useColorModeValue('gray.400', 'gray.200');

  const handleSearchTerm = (ev) => {
    navigate({
      search: `?${ createSearchParams({
        q: ev.target.value,
        region
      }) }`
    })
  }

  return (!error && !isLoading
    ?
      <>
        <VStack py={7}>
          <Container maxW='container.xl'>
            <Stack justify='space-between' align='center' direction={['column', 'row']} gap={20}>
              <InputGroup w={['full', 'full', 'lg']} h={14}>
                <InputLeftElement pointerEvents='none' children={<Icon as={HiSearch} w={6} h={6} />} h='full' pl={8} color={searchInputIconColor} />
                <Input placeholder='Search for a country...' h='full' pl={16} bg={brandBgColor} _placeholder={{ color: searchInputPlaceholderColor }} border='none' fontSize='sm' onChange={handleSearchTerm} value={search} />
              </InputGroup>
              <Regions q={search} region={region} />
            </Stack>
          </Container>
        </VStack>
        <VStack py={7}>
          <Container maxW='container.xl'>
            { data && data.status !== 404 ?
              <SimpleGrid w='full' gap={[12, 18, 24]} minChildWidth={250}>
                {data.filter(c => region ? c.region === region : true).map((item) => (
                  <GridItem key={item.name}>
                    <CountryCard {...item} />
                  </GridItem>
                ))}
              </SimpleGrid>
            : <Box>No result</Box> }
          </Container>
        </VStack>
      </>
    :
      <></>
  )
}