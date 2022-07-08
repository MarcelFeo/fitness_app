import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

export default function SearchExercises() {
  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box
        position="relative"
        mb="72px"
      >
        <TextField 
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff'
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button 
          sx={{
            bgColor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          variant="contained"
          color="error"
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}