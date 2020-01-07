	/* eslint-disable prettier/prettier */
	import React, {useState} from 'react';
	import { Text, Button, Container, JotWrapper, AddJotWrapper, AddJotText, AddJotButton } from './styles';
	import { useStoreState, useStoreActions } from 'easy-peasy';
	import JotItem from '../../components/JotItem';
	import SortableList from 'react-native-sortable-list';
	import UUID from 'uuid/v4';

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
			<Container>
				<JotWrapper>
					{/* {jotLists[selectedJotList].jots.map(jot => {
						return <JotItem jot={jot}/>;
					})} */}
					<SortableList
					  style={{ flex: 1 }}
						data={jotLists[selectedJotList].jots}
						renderRow={JotItem}
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