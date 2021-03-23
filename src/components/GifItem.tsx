/* eslint-disable prettier/prettier */
import React from 'react';
import {
	View,
	ImageBackground
} from 'react-native';

const GifItem: () => React$Node = ({ thumbs, thumbWidth }) => {
	return(
		<View style={{ padding : 4}}>
				<ImageBackground 
					source={thumbs && {uri:thumbs,cache:'reload'} }
					style={{width : thumbWidth, height : thumbWidth }}
				>
				</ImageBackground>
		</View>
		)	//return
};

export default GifItem;

