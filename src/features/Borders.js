import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGetBordersQuery } from "../services/country";

export function Borders(borders) {
  const textColor = useColorModeValue('black', 'white');

  const query = Object.values(borders).join(',')
  const {data} = useGetBordersQuery(query);

  return (data && query.length
    ?
      <Stack direction={[ 'column', 'row' ]} wrap='wrap' align={[ 'start', 'center' ]} justify={[ 'start', 'center' ]} gap={3}>
        {data.map(border => 
          <Box margin={0} marginInlineStart={0} key={border.name}>
            <Link to={`/${border.alpha3Code}`}>
              <Box as='span' shadow='base' px={5} py={2} fontSize='xs' color={textColor}>
                {border.name}
              </Box>
            </Link>
          </Box>
        )}
      </Stack>
    :
      <></>
  )
}
