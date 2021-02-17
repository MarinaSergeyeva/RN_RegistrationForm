import React, { useContext } from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { PreferencesContext } from '../../PreferencesContext';

const CustomNavigationBar = props => {
  const { navigation, previous, scene } = props;
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      {previous ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={scene.route?.name} />
      {/* <TouchableRipple onPress={() => toggleTheme()}> */}
      <Switch
        style={[{ backgroundColor: 'transparent' }]}
        color={theme.colors.primary}
        value={isThemeDark}
        onValueChange={() => toggleTheme()}
      />
      {/* </TouchableRipple> */}
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
