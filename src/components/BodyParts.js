import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png'

export default function BodyParts({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer', 
            gap: '47px',
            background: '#fff',
        }}
    >
        <img src={Icon} alt="dumbbel" style={{ width: '40px', height: '40px' }} />
        <Typography
            fontSize="24px"
            fontWeight="bold"
            color="#3A1212"
            textTransform="capitalize"
        >
            {item}        
        </Typography>
    </Stack>
  )
}

