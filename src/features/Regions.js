import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useGetRegionsQuery } from "../services/country";

export function Regions({ q, region }) {
  const navigate = useNavigate();
  const brandBgColor = useColorModeValue('white', 'brand.800');
  const {data} = useGetRegionsQuery()
  const [regions, setRegions] = useState([])

  const handleClick = (ev) => {
    navigate({
      search: `?${ createSearchParams({
        region: ev.target.textContent,
        q
      }) }`
    })
  }

  useEffect(() => {
    if (data) {
      let _regions = []
      data.forEach(item => {
        if (!_regions.includes(item.region)) {
          _regions.push(item.region)
        }
      });
      setRegions(_regions);
    }
  }, [data]);

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button} bg={brandBgColor} rightIcon={<Icon as={HiChevronDown} />} w={['full', 'full', '200px']} h={14} fontSize='sm' fontWeight='normal' textAlign='left' px={6}>
            Filter by Region {region ? `(${region})` : ''}
          </MenuButton>
          <MenuList bg={brandBgColor} border='none' w={['full', 'full', '200px']}>
            {regions ? regions.map(r => <MenuItem key={r} px={6} onClick={handleClick}>{r}</MenuItem>) : <></>}
          </MenuList>
        </>
      )}
    </Menu>
  )
}
