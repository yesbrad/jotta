/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Container, AddButton, AddButtonWrapper, AddButtonText, NameInput, KeyboardAvoidingView, TimingSlider, SettingWrapper, SettingTitle } from './styles';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Header from '../../components/Header';
import BackButton from '../../components/HeaderButton';
import { DefaultJotList } from '../../constants';
import { withTheme } from 'styled-components';

const List = ({ navigation, theme }) => {
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
		isEditing ? navigation.navigate('Order') : navigation.navigate('List')
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
			<KeyboardAvoidingView  keyboardVerticalOffset={70} behavior="padding" enabled>
				<Container>
					<SettingWrapper>
						<SettingTitle>Name</SettingTitle>
						<NameInput value={jotData.title} onChange={e => setJotData({ ...jotData, title: e.nativeEvent.text})}/>
					</SettingWrapper>
					<SettingWrapper>
					<SettingTitle>Spacer Location {jotData.spaceTiming}</SettingTitle>
						<TimingSlider
							value={jotData.spaceTiming}
							onValueChange={e => setJotData({ ...jotData, spaceTiming: e})}
							minimumValue={1}
							maximumValue={10}
							step={1}
							minimumTrackTintColor={theme.brandColor}
						/>
					</SettingWrapper>
				</Container>
				<AddButtonWrapper>
					<AddButton onPress={onAddPressed}><AddButtonText>{isEditing ? 'Edit' : 'Add'}</AddButtonText></AddButton>
				</AddButtonWrapper>
			</KeyboardAvoidingView>
		</Header>
	);
};

export default withTheme(List);
