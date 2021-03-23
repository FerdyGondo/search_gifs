import React from 'react';
import { TextInput, View, Text } from 'react-native';

const LoginRegInput:React.FC = ({ value, onChangeText, onSubmitEditing, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
		    placeholderTextColor = '#807F83'
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        autoCapitalize= 'none'
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#C6C3CC',
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 14,
    lineHeight: 20,
	flex: 1
  },

  containerStyle: {
    height: 35,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
	  backgroundColor: '#fff',
	  borderRadius: 6,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  }
};

export { LoginRegInput };
