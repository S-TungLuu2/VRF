import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

type ExtraProps = {
  cDisplay: string;
  cWidth: string | number;
  cHeight: string | number;
  cAlignItems: string;
  cJustifyContent: string;
  size: number;
};

const Loading: React.FC<Omit<CircularProgressProps, 'size'> & Partial<ExtraProps>> = ({
  cDisplay = 'flex',
  cWidth = 'full',
  cHeight = '100%',
  cAlignItems = 'center',
  cJustifyContent = 'center',
  size = 24,
  thickness = 4,
  ...props
}) => {
  return (
    <Box
      display={cDisplay}
      width={cWidth}
      height={cHeight}
      alignItems={cAlignItems}
      justifyContent={cJustifyContent}
      position="relative"
    >
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: 'rgba(255, 255, 255, 0.5)',
          animationDuration: '1000ms',
          position: 'absolute',
          left: `calc(50%-${size / 2})`,
          zIndex: 11,
        }}
        size={size}
        thickness={thickness}
        value={50}
        {...props}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: 'rgba(62, 123, 250, 1)',
          position: 'absolute',
          left: `calc(50%-${size / 2})`,
          zIndex: 9,
        }}
        size={size}
        thickness={thickness}
        {...props}
        value={100}
      />
    </Box>
  );
};

export default Loading;
