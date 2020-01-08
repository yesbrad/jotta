/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Text, Button, Container, JotWrapper, AddJotWrapper, AddJotText, AddJotButton, KeyboardAvoidingView } from './styles';
import { useStoreState, useStoreActions } from 'easy-peasy';
import JotItem from '../../components/JotItem';
import BackButton from '../../components/HeaderButton';

import { View, TouchableOpacity } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
import Header from '../../components/Header';
import JIcon from '../../components/JIcon';

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

	const renderJotItem = (e) => {
		const yutr = e.index % jotLists[selectedJotList].spaceTiming === jotLists[selectedJotList].spaceTiming - 1;
		return <JotItem {...e} isSpaced={yutr}/>
	}
	
	return (
		<Header 
			leftButton={() => <BackButton icon="ios-arrow-back" onPress={() => DeselectJotList()} />}
			rightButton={() => <BackButton icon="md-settings" onPress={() => navigation.navigate('EditCreate', { CurrentJot: jotLists[selectedJotList]})} />}
		>
			<KeyboardAvoidingView keyboardVerticalOffset={70} behavior="padding" enabled>
				<Container>
					<JotWrapper>
					{jotLists[selectedJotList] && <DraggableFlatList
							data={jotLists[selectedJotList].jots}
							renderItem={(e) => renderJotItem(e)}
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
						<AddJotButton onPress={onAddJot}>
							<JIcon icon="md-arrow-round-forward" size={30} color="white" />
						</AddJotButton>
					</AddJotWrapper>
				</Container>
			</KeyboardAvoidingView>
		</Header>
	)
}

export default Order;