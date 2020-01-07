	/* eslint-disable prettier/prettier */
	import React, {useState} from 'react';
	import { Text, Button, Container, JotWrapper, AddJotWrapper, AddJotText, AddJotButton } from './styles';
	import { useStoreState, useStoreActions } from 'easy-peasy';
	import JotItem from '../../components/JotItem';
	import SortableList from 'react-native-sortable-list';
	import UUID from 'uuid/v4';

	import { View, TouchableOpacity } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'

	const Order = ({ navigation }) => {
		const jotLists = useStoreState(state => state.jots.jotLists);
		const selectedJotList = useStoreState(state => state.jots.selectedJotList);
		const AddJot = useStoreActions(actions => actions.jots.addJot);
		const EditJot = useStoreActions(actions => actions.jots.editJot);
		const [currentJot, setCurrentJot] = useState('');
		let order = jotLists[selectedJotList].jots; //Array of keys

		const onAddJot = () => {
			AddJot(currentJot);
		}

		const renderItem = ({ item, index, drag, isActive }) => {
			return (
				<TouchableOpacity
					style={{ 
						height: 100, 
						backgroundColor: isActive ? 'blue' : 'purple',
						alignItems: 'center', 
						justifyContent: 'center' 
					}}
					onLongPress={drag}
				>
					<Text style={{ 
						fontWeight: 'bold', 
						color: 'white',
						fontSize: 32,
					}}>{item.jot}</Text>
				</TouchableOpacity>
			)
		}

		return (
			<Container>
				<JotWrapper>
				<DraggableFlatList
						data={jotLists[selectedJotList].jots}
						renderItem={renderItem}
						keyExtractor={(item, index) => `draggable-item-${item.id}`}
						scrollPercent={5}
						onDragEnd={({ data }) => EditJot(data)}
					/>
				</JotWrapper>
				<AddJotWrapper>
					<AddJotText value={currentJot} onChange={(event) => setCurrentJot(event.nativeEvent.text)} />
					<AddJotButton onPress={onAddJot}/>
				</AddJotWrapper>
			</Container>
		)
	}

	export default Order;