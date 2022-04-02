import { Input } from "@chakra-ui/react";

interface InputProps {
  type: string;
  placeholder: string;
}

export function InputField({ type, placeholder }: InputProps) {
  return (
    <Input 
      type={type} 
      size="md"
      placeholder={placeholder}
      color="gray.800"
      _placeholder={{opacity: 0.6, color: 'gray.600'}}
      backgroundColor="gray.50"
      focusBorderColor="red.700"
    />
  )
}