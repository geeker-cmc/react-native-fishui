import { StyleSheet } from 'react-native';
// import themes from '../../style/themes';


export default theme => (
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    wrapperStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: theme.radius_md,
    },
    largeRaw: {
      height: theme.button_height,
      paddingLeft: theme.h_spacing_lg,
      paddingRight: theme.h_spacing_lg,
    },
    smallRaw: {
      height: theme.button_height,
      paddingLeft: theme.h_spacing_sm,
      paddingRight: theme.h_spacing_sm,
    },
    defaultRaw: {
      backgroundColor: theme.fill_base,
      borderColor: theme.border_color_base,
    },
    primaryRaw: {
      backgroundColor: theme.primary_button_fill,
      borderColor: theme.border_color_base,
    },
    defaultDisabledRaw: {
      backgroundColor: theme.fill_disabled,
      borderColor: theme.fill_disabled,
    },
    primaryDisabledRaw: {
      opacity: 0.4,
    },
    ghostDisabledRaw: {
      backgroundColor: `${theme.color_text_base}40`,
    },
    warningDisabledRaw: {
      opacity: 0.4,
    },
    defaultHighlight: {
      backgroundColor: theme.fill_tap,
      borderColor: theme.border_color_base,
    },
    primaryHighlight: {
      backgroundColor: theme.primary_button_fill_tap,
      borderColor: theme.primary_button_fill,
    },
    ghostHighlight: {
      backgroundColor: 'transparent',
      borderColor: theme.ghost_button_fill_tap,
    },
    warningHighlight: {
      backgroundColor: theme.warning_button_fill_tap,
      borderColor: theme.warning_button_fill,
    },
    defaultHighlightText: {
      color: theme.color_text_base,
    },
    primaryHighlightText: {
      color: `${theme.color_text_base_inverse}30`, //
    },
    warningHighlightText: {
      color: `${theme.color_text_base_inverse}30`,
    },
    ghostHighlightText: {
      color: theme.ghost_button_fill_tap,
    },
    largeRawText: {
      fontSize: theme.botton_font_size,
    },
    smallRawText: {
      fontSize: theme.button_font_size_sm,
    },
    defaultRawText: {
      color: theme.color_text_base,
    },
    primaryRawText: {
      color: theme.color_text_base_inverse,
    },
    ghostRawText: {
      color: theme.ghost_button_color,
    },
    warningRawText: {
      color: theme.color_color_base_inverse,
    },
    defaultDisabledRawText: {
      color: `${theme.color_text_base}30`,
    },
    primaryDisabledRawText: {
      color: `${theme.color_text_base_inverse}30`,
    },
    ghostDisabledRawText: {
      color: `${theme.color_text_base}30`,
    },
    indicator: {
      marginRight: theme.h_spacing_md,
    },
  })
);
