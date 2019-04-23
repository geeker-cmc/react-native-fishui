import { StyleSheet } from 'react-native';

export default theme => (
  StyleSheet.create({
    container: {

    },
    touchContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    hasLine: {
      borderBottomColor: theme.checkbox_line_color,
      borderBottomWidth: theme.checkbox_line_width,
    },
  })
);
