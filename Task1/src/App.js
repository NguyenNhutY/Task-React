import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends Component {
  state = {
    isDarkMode: false
  };

  toggleTheme = () => {
    this.setState(prev => ({ isDarkMode: !prev.isDarkMode }));
  };

  render() {
    const { isDarkMode } = this.state;
    const appliedTheme = getMuiTheme(isDarkMode ? darkBaseTheme : lightBaseTheme);
    const backgroundColor = isDarkMode ? '#303030' : '#fff';
    const textColor = isDarkMode ? '#fff' : '#000';

    return (
      <MuiThemeProvider muiTheme={appliedTheme}>
        <div
          style={{
            minHeight: '100vh',
            backgroundColor,
            color: textColor,
            transition: 'all 0.3s ease'
          }}
        >
          <NavBar onToggleTheme={this.toggleTheme} isDarkMode={isDarkMode} />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
