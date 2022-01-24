import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Container,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ToggleColorMode } from './ToggleColorMode';

export function Navigation() {
  return (
    <VStack bg={useColorModeValue('white', 'brand.800')} shadow='lg' position='sticky' top={0} zIndex={10}>
      <Container maxW='container.xl'>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Link to='/'>
            <Box fontWeight='bold' fontSize={["sm", "md", "lg", "xl", "2xl"]} userSelect='none' color={useColorModeValue('black', 'white')}>
              Where in the world?
            </Box>
          </Link>

          <Flex align='center'>
            <Stack direction='row' spacing={7}>
              <ToggleColorMode />
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </VStack>
  );
}