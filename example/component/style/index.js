import React, { useContext } from 'react';
import deepmerge from 'deepmerge';
import defaultTheme from './themes';

export const ThemeContext = React.createContext(defaultTheme);


export const ThemeProvider = (props) => {
  const { value, children } = props;
  const theme = { ...defaultTheme, ...value };
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (props) => {
  const theme = useContext(ThemeContext);
  return { ...theme, ...props.theme };
};

export class WithTheme extends React.Component {
  static defaultProps = {
    themeStyles: () => {},
  };

  getStyles = (theme) => {
    const { themeStyles, styles } = this.props;
    const defaultThemeStyles = themeStyles(theme);
    if (styles) {
      return deepmerge(defaultTheme, styles);
    }
    return defaultThemeStyles;
  };

  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => children(this.getStyles(theme), theme)}
      </ThemeContext.Consumer>
    );
  }
}
