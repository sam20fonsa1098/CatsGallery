import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { vh, vw } from '../../utils/dimensions';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const CatContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  margin: ${vh}px;
`;

export const Title = styled.Text`
  font-size: ${1.8 * vh}px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  margin-bottom: ${vh}px;
`;

export const SubTitle = styled.Text`
  font-size: ${vh}px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  margin-left: ${vw}px;
`;

export const List = styled(FlatList)`
  align-self: center;
  width: 100%;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${vh}px;
`;

export const CustomIcom = styled(Icon)``;

export const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
