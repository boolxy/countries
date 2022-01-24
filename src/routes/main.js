import { VStack } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { Countries } from '../features/Countries';
import { Navigation } from '../features/Navigation';

export default function Main() {
  const [search] = useSearchParams()

  const q = search.get('q');
  const region = search.get('region');
  return (
    <>
      <Navigation />
      <VStack align='stretch' py={7}>
        <Countries search={q || ''} region={region || ''} />
      </VStack>
    </>
  );
}