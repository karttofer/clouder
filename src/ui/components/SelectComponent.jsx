import React, { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  Flex,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Switch,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const CustomSelect = ({ placeholder, items, type }) => {
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {placeholder}
      </MenuButton>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index} as="div">
            {item.type === 'radio' && (
              <RadioGroup onChange={setValue} value={value}>
                <Flex gap="3" align="center" direction="row">
                  {item.icon}
                  <Radio size="md" value={item.value}>
                    {item.label}
                  </Radio>
                </Flex>
                <Text
                  color="text.hint"
                  maxWidth="253px"
                  paddingLeft="29px"
                  paddingRight="29px"
                  fontSize="xs"
                >
                  {item.hint}
                </Text>
              </RadioGroup>
            )}
            {item.type === 'divider' && <Divider />}
            {item.type === 'switch' && (
              <FormControl display="flex" alignItems="center" width="100%">
                <Flex
                  maxWidth="253px"
                  justify="space-between"
                  align="center"
                  width="100%"
                >
                  <Flex direction="column">
                    <FormLabel htmlFor={item.for} mb="0">
                      {item.label}
                    </FormLabel>
                    <Text color="text.hint" maxWidth="253px" fontSize="xs">
                      {item.hint}
                    </Text>
                  </Flex>
                  <Switch id={item.for} />
                </Flex>
              </FormControl>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default CustomSelect
