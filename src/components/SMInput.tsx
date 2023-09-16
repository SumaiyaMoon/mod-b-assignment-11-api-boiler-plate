import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


type SMInputProps = {
    label : string;
    value: any; 
    onChange?: (...args: any[]) => any;
}


export default function SMInput(props: SMInputProps) {
    const {label, value, onChange} = props

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label={label} value={value} onChange={onChange} color="primary" focused  fullWidth  />
 
    </Box>
  );
}
