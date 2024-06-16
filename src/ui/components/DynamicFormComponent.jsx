import React from 'react'
import { FormControl, FormLabel, Select, Input, Button } from '@chakra-ui/react'

const DynamicFormComponent = ({ formConfig }) => {
  return (
    <form>
      {formConfig.map((field, index) => {
        switch (field.type) {
          case 'select':
            return (
              <FormControl key={index}>
                <FormLabel>{field.label}</FormLabel>
                <Select placeholder={field.placeholder}>
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </FormControl>
            )
          case 'text':
            return (
              <FormControl key={index}>
                <FormLabel>{field.label}</FormLabel>
                <Input type="text" placeholder={field.placeholder} />
              </FormControl>
            )
          // Add more cases for other input types as needed
          default:
            return null
        }
      })}
      <Button type="submit" colorScheme="blue" mt={4}>
        Submit
      </Button>
    </form>
  )
}

export default DynamicFormComponent
