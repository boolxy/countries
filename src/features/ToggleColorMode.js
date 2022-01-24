import { Button, useColorMode } from "@chakra-ui/react"
import { IoMoon, IoSunny } from "react-icons/io5"

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      fontSize={["sm", "md", "lg"]}
      variant='ghost'
      leftIcon={colorMode === 'light' ? <IoMoon /> : <IoSunny />}
      onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  )
}
