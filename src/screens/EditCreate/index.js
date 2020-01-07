/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Container, AddButton, AddButtonWrapper, AddButtonText, NameInput } from './styles';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Header from '../../components/Header';
import BackButton from '../../components/HeaderButton';
import { DefaultJotList } from '../../constants';

const List = ({ navigation }) => {
	const AddJotList = useStoreActions(actions => actions.jots.addJotList);
	const EditSelectedJotList = useStoreActions(actions => actions.jots.editSelectedJotList);
	const SaveJotLists = useStoreActions(actions => actions.jots.saveJotLists);
	const SelectJotList = useStoreActions(actions => actions.jots.selectJotList);
	const jotLists = useStoreState(state => state.jots.jotLists);
	const selectedJotList = useStoreState(state => state.jots.selectedJotList);

	const [isEditing, SetIsEditing] = useState(false);
	const [jotData, setJotData] = useState({});

	useEffect(() => {
		SetIsEditing(selectedJotList !== '');
		setJotData(navigation.getParam('CurrentJot', DefaultJotList));
	}, []);

	const onAddPressed = () => {
		isEditing ? onEditJotList() : onAddJotList(); // or edit jot list
		navigation.navigate('List');
	};

	const onAddJotList = () => {
		console.log('Adding New Jot List', jotData);
		AddJotList(jotData);
		SaveJotLists();
	};

	const onEditJotList = (uuid) => {
		EditSelectedJotList(jotData);
		SaveJotLists();
	};

	return (
		<Header leftButton={() => <BackButton icon="ios-arrow-back" onPress={() => navigation.goBack()}/>}>
			<Container>
				<NameInput value={jotData.title} onChange={e => setJotData({ ...jotData, title: e.nativeEvent.text})}/>
			</Container>
			<AddButtonWrapper>
		<AddButton onPress={onAddPressed}><AddButtonText>{isEditing ? 'Edit' : 'Add'}</AddButtonText></AddButton>
			</AddButtonWrapper>
		</Header>
	);
};

export default List;
