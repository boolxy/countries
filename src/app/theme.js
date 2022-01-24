import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme(
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles: {
      global: (props) => ({
        'html, body': {
          fontSize: 'sm',
          bg: props.colorMode === 'dark' ? 'brand.900' : 'gray.100',
          lineHeight: 'tall',
        },
        a: {
          color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
        },
      }),
    },
    colors: {
      brand: {
        100: '#FAFAFA',
        200: '#D9D9D9',
        300: '#C0C0C0',
        400: '#A9A9A9',
        500: '#8F8F8F',
        600: '#737373',
        700: '#595959',
        800: '#2b3743',
        900: '#202d36',
      }
    },
  }
)

export default theme
