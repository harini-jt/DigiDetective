import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import { green } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faSortNumericDown } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPencilAlt, faEdit);

const Sidebar = ({ onMobileClose, openMobile }) => {
  const theme = useTheme();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, []);
  
  return (
    <>
      <Drawer
        anchor='left'
        onClose={onMobileClose}
        open={!lgUp && openMobile}
        variant='temporary'
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: 256
          }
        }}
      >
        <Box
          sx={{
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            p: 2
          }}
        >
          <Link to='/' style={{ textDecoration: 'none' }}>
            <IconButton size='large' disabled>
              <Avatar
                variant='rounded'
                sx={{
                  backgroundColor: green[600],
                  marginRight: '15px',
                  height: 52,
                  width: 52
                }}
              >
                <FontAwesomeIcon 
                  icon={faSortNumericDown} 
                  style={{ 
                    color: theme.palette.common.white, 
                    height: 30, 
                    width: 30 
                  }} 
                />
              </Avatar>
              <Typography 
                variant='h4' 
                component='div' 
                sx={{ 
                  flexGrow: 1,
                  color: theme.palette.common.white,
                  fontWeight: 'bold', 
                }}
              >
                DigiDetective
              </Typography>
            </IconButton>
          </Link>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;