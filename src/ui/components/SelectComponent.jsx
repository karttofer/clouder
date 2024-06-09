// Dependencies
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
  FormHelperText,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const CustomSelect = ({ placeholder, items }) => {
  const [value, setValue] = useState('')
  const [switchValues, setSwitchValues] = useState({})
  const [buttonLabel, setButtonLabel] = useState('')

  const handleSwitchChange = (e, itemFor) => {
    e.preventDefault()
    setSwitchValues({
      ...switchValues,
      [itemFor]: e.target.checked,
    })

    return switchValues
  }

  const handleRadioChange = (nextValue, labelSelected) => {
    setValue(nextValue)
    setButtonLabel(labelSelected)
  }

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        color="layout.white.white"
        bg="transparent"
        _hover="transparent"
        _active={{
          bgColor: 'layout.black.black900',
        }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {buttonLabel || placeholder}
      </MenuButton>
      <MenuList bg="layout.black.black900" color="layout.white.white">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            as="div"
            bg="layout.black.black900"
            color="layout.white.white"
          >
            {item.type === 'radio' && (
              <RadioGroup
                key={item.type}
                onChange={(event) => handleRadioChange(event, item.label)}
                value={value}
              >
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
              <FormControl
                display="flex"
                alignItems="center"
                width="100%"
                onChange={(e) => handleSwitchChange(e, item.for)}
              >
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
                    <FormHelperText
                      fontSize="xs"
                      maxWidth="253px"
                      color="text.hint"
                    >
                      {item.hint}
                    </FormHelperText>
                  </Flex>
                  <Switch
                    id={item.for}
                    isChecked={switchValues[item.for] || false}
                  />
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
