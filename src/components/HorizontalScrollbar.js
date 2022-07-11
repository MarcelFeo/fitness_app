import React from 'react';
import { Box } from '@mui/material';

import BodyParts from './BodyParts';

export default function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  )
}
