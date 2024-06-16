// Dependencies
import React, { useState, useEffect } from 'react'
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
// Themes
import { SelectTheme } from '../../assets/chakra/appStyle'
import { t } from 'i18next'

const MenuComponent = ({ placeholder, items, initialValue }) => {
  const [value, setValue] = useState(initialValue?.value || '')
  const [switchValues, setSwitchValues] = useState({})
  const [buttonLabel, setButtonLabel] = useState(initialValue?.label || '')

  useEffect(() => {
    if (initialValue) {
      setValue(t(initialValue.value))
      setButtonLabel(t(initialValue.label))
    }
  }, [initialValue])

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
    setButtonLabel(t(labelSelected))
  }

  return (
    <Menu closeOnSelect={false}>
      <MenuButton {...SelectTheme} as={Button} rightIcon={<ChevronDownIcon />}>
        {buttonLabel || placeholder}
      </MenuButton>
      <MenuList bg="layout.black.black900" color="layout.white.white0">
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
                    {t(item.label)}
                  </Radio>
                </Flex>
                <Text
                  color="text.hint"
                  maxWidth="253px"
                  paddingLeft="29px"
                  paddingRight="29px"
                  fontSize="xs"
                >
                  {t(item.hint)}
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
                      {t(item.label)}
                    </FormLabel>
                    <FormHelperText
                      fontSize="xs"
                      maxWidth="253px"
                      color="text.hint"
                    >
                      {t(item.hint)}
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
export default MenuComponent
