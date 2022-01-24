import { Box, Button, Container, HStack, Icon, Image, Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation } from "../features/Navigation";
import { useGetCountryByCodeQuery } from "../services/country";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Borders } from "../features/Borders";

export default function Country() {
  const navigate = useNavigate();
  const params = useParams();

  const {data} = useGetCountryByCodeQuery(params.id);

  return (
    <VStack align='stretch'>
      <Navigation />
      <VStack align='stretch'>
        <Container maxW='container.xl'>
          <HStack py={10}>
            <Button bg={useColorModeValue('white', 'brand.800')} leftIcon={<Icon as={HiOutlineArrowNarrowLeft} />} w={32} h={10} onClick={() => navigate(-1)} shadow='lg'>
              Back
            </Button>
          </HStack>
          { data ?
            <Stack direction={[ 'column', 'column', 'column', 'row' ]} gap={20} py={10}>
              <Box flex='1'>
                <Image src={data.flag} w='full' />
              </Box>
              <Box flex='1' p={12}>
                <Box as='h1' fontSize='4xl' fontWeight='bold' mb={8}>{data.name}</Box>
                <Stack direction={[ 'column', 'row' ]} justify='space-between' fontSize='lg'>
                  <Stack>
                    <HStack>
                      <Box as='strong'>Native Name:</Box>
                      <Box as='span'>{data.nativeName}</Box>
                    </HStack>
                    <HStack>
                      <Box as='strong'>Population:</Box>
                      <Box as='span'>{data.population.toLocaleString()}</Box>
                    </HStack>
                    <HStack>
                      <Box as='strong'>Region:</Box>
                      <Box as='span'>{data.region}</Box>
                    </HStack>
                    <HStack>
                      <Box as='strong'>Sub Region:</Box>
                      <Box as='span'>{data.subregion}</Box>
                    </HStack>
                    <HStack>
                      <Box as='strong'>Capital:</Box>
                      <Box as='span'>{data.capital}</Box>
                    </HStack>
                  </Stack>
                  <Stack>
                    <HStack>
                      <Box as='strong'>Top Level Domain:</Box>
                      <Box as='span'>{data.topLevelDomain}</Box>
                    </HStack>
                    <HStack>
                      <Box as='strong'>Currencies:</Box>
                      <Box as='span'>{data.currencies.map(currency => currency.name).join(', ')}</Box>
                    </HStack>
                    <HStack>
                      <Box as='strong'>Languages:</Box>
                      <Box as='span'>{data.languages.map(language => language.name).join(', ')}</Box>
                    </HStack>
                  </Stack>
                </Stack>
                <Stack mt={20} fontSize='xl' align='start' gap={3} direction={[ 'column', 'row' ]}>
                  <Box as='strong' whiteSpace='nowrap'>Border Countries:</Box>
                  <Borders {...data.borders} />
                </Stack>
              </Box>
            </Stack>
          : <></>}
        </Container>
      </VStack>
    </VStack>
  );
}
