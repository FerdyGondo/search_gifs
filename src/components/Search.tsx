/**
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import {
   View,
   ScrollView,
   Dimensions,
   Platform,
   ScaledSize,
   SafeAreaView,
 } from 'react-native';
 import { 
   useSelector,
   useDispatch
 } from 'react-redux';
 import styled from 'styled-components'
 import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
 import { Icon } from 'react-native-elements';

 import { input } from '../store/action-creators';
import GifItem from './GifItem';

 interface Search {
   gif:string;
 };
 
 export const Search: ({}) => React.FC = ():JSX.Element => {
   const [gif, setGif] = React.useState<string | undefined>('');
   const result = useSelector(state => state.result);
   const inputDispatch = useDispatch();
   let windowwidth = Dimensions.get('window').width;
   let windowheight = Dimensions.get('window').height;
   let thumbWidth = Platform.OS === 'android' ? ((windowwidth-5)/2) - (2*4) : (windowwidth/2) - (2*4)

   const _dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  }).cloneWithRows(result);

  const _layoutProvider = new LayoutProvider(
    index => {
      return index
    },
    (type, dim) => {
      dim.width  = thumbWidth + 8;
      dim.height = thumbWidth + 6;
    },
  );

  const _rowRenderer = (type, data) => {
    let thumbs:string = data.images.preview_gif.url;

    return (
        <GifItem
          thumbs		      = {thumbs}
          thumbWidth      = {thumbWidth}
        />
    )
  }
   return (
      <SafeAreaView >
              <FrameContainer>
                <SearchContainerStyle>
                  <SearchInput
                    placeholder= 'search gif'
                    placeholderTextColor = '#807F83'
                    selectTextOnFocus = {true}
                    selectionColor = '#000'	//highlight and cursor color
                    onChangeText = {setGif}		//{this.onPasswordChange}
                    value={gif}
                    returnKeyType={ 'search' }
                    autoFocus={true}
                    autoCorrect={false}
                    autoCapitalize= 'none'
                    underlineColorAndroid="transparent"
                  />
                  <Icon name='search'  color='#807F83' type='material'
                        onPress = { () => inputDispatch(input(gif) ) }
                    />
                </SearchContainerStyle>
              </FrameContainer>
              <View style={{height:'auto', maxHeight:windowheight}}>
              <ScrollView   keyboardShouldPersistTaps="never">
                <ThumbView>
                    {_dataProvider._data.length !== 0 &&
                      <RecyclerListView style={{ flex: 1, width : windowwidth, height: windowheight}}
                        layoutProvider	= {_layoutProvider} 
                        dataProvider	  = {_dataProvider} 
                        rowRenderer		  = {_rowRenderer}
                      />
                    }
                </ThumbView>
            </ScrollView>
            </View>
        </SafeAreaView>
     )
 };
 
 const ThumbView =  styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
 `

 const FrameContainer =  styled.View`
  padding-Top: 40px;
  padding-Bottom: 40px;
  padding-Left: 10px;
  padding-Right: 10px;
  height: 40px;
  background-Color: #fff;
  justify-Content: center;
`
const SearchContainerStyle = styled.View`
  flex-Direction: row;
  padding: 5px;
  height: 40px;
  background-Color: #fff;
  justify-Content: space-between;
  border-Radius: 10px;
  border-Width: 1px;
  border-Color: #807F83;
`

 const SearchInput = styled.TextInput `
    flex: 1;
    font-size: 14px;
		background-color : #fff;
		padding: 5px;
		line-height: 20px;
		width: 200px;
 `
 

 
