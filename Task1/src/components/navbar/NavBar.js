import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Brightness4 from 'material-ui/svg-icons/image/brightness-6';

const NavBar = ({ onToggleTheme, isDarkMode }) => (
  <AppBar
    title={`PixaBay Image Finder (${isDarkMode ? 'Dark' : 'Light'} Mode)`}
    iconElementRight={
      <IconButton onClick={onToggleTheme}>
        <Brightness4 color="white" />
      </IconButton>
    }
  />
);

export default NavBar;
