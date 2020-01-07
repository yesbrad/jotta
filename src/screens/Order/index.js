/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Text, Button, Container, JotWrapper, AddJotWrapper, AddJotText, AddJotButton } from './styles';
import { useStoreState, useStoreActions } from 'easy-peasy';
import JotItem from '../../components/JotItem';
import BackButton from '../../components/BackButton';

import { View, TouchableOpacity } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
import Header from '../../components/Header';

const Order = ({ navigation }) => {
	const jotLists = useStoreState(state => state.jots.jotLists);
	const selectedJotList = useStoreState(state => state.jots.selectedJotList);
	const AddJot = useStoreActions(actions => actions.jots.addJot);
	const EditJot = useStoreActions(actions => actions.jots.editJot);
	const SaveJotLists = useStoreActions(actions => actions.jots.saveJotLists);
	const SelectJotList = useStoreActions(actions => actions.jots.selectJotList);
	const [currentJot, setCurrentJot] = useState('');

	const onAddJot = () => {
		AddJot(currentJot);
		SaveJotLists(jotLists);
		setCurrentJot('');
	}

	const onEditJot = (data) => {
		EditJot(data);
		SaveJotLists(jotLists);
	}

	const DeselectJotList = () => {
		navigation.navigate('List');
		SelectJotList('');
	};
	
	return (
		<Header 
			leftButton={() => <BackButton onPress={() => DeselectJotList()} />}
			rightButton={() => <BackButton onPress={() => navigation.navigate('EditCreate', { CurrentJot: jotLists[selectedJotList]})} />}
		>
			<Container>
				<JotWrapper>
				{jotLists[selectedJotList] && <DraggableFlatList
						data={jotLists[selectedJotList].jots}
						renderItem={JotItem}
						keyExtractor={(item, index) => `draggable-item-${item.id}`}
						scrollPercent={5}
						onDragEnd={({ data }) => onEditJot(data)}
					/>}
				</JotWrapper>
				<AddJotWrapper>
					<AddJotText
						value={currentJot}
						placeholder="Add your jot here.."
						onChange={(event) => setCurrentJot(event.nativeEvent.text)}
					/>
					<AddJotButton onPress={onAddJot}/>
				</AddJotWrapper>
			</Container>
		</Header>
	)
}

export default Order;