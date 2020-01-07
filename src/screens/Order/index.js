	/* eslint-disable prettier/prettier */
	import React, {useState} from 'react';
	import { Text, Button, Container, JotWrapper, AddJotWrapper, AddJotText, AddJotButton } from './styles';
	import { useStoreState, useStoreActions } from 'easy-peasy';
	import JotItem from '../../components/JotItem';
	import SortableList from 'react-native-sortable-list';
	import UUID from 'uuid/v4';

	import { View, TouchableOpacity } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
import Header from '../../components/Header';

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

		return (
			<Header>
				<Container>
					<JotWrapper>
					<DraggableFlatList
							data={jotLists[selectedJotList].jots}
							renderItem={JotItem}
							keyExtractor={(item, index) => `draggable-item-${item.id}`}
							scrollPercent={5}
							onDragEnd={({ data }) => EditJot(data)}
						/>
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