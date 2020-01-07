/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { Container, AddButton, ListContainer, AddButtonHeader } from './styles';
import { useStoreActions, useStoreState } from 'easy-peasy';
import JotListItem from '../../components/JotListItem';
import Header from '../../components/Header';

const List = ({ navigation }) => {
	const AddJotList = useStoreActions(actions => actions.jots.addJotList);
	const LoadJotList = useStoreActions(actions => actions.jots.loadJotLists);
	const SaveJotLists = useStoreActions(actions => actions.jots.saveJotLists);
	const SelectJotList = useStoreActions(actions => actions.jots.selectJotList);
	const jotLists = useStoreState(state => state.jots.jotLists);

	useEffect(() => {
		LoadJotList();
	}, []);

	const RenderJotLists = () => {
		const items = [];
		for (var jotList in jotLists){
			items.push(<JotListItem key={jotList} jotList={jotLists[jotList]} uuid={jotList} onEditJotList={onEditJotList}/>);
		}
		return items;
	};

	const onAddJotList = () => {
		AddJotList();
		SaveJotLists(jotLists);
	};

	const onEditJotList = (uuid) => {
		SelectJotList(uuid);
		navigation.navigate('Order');
	};

	const renderAddButton = () => {
		return (
			<AddButtonHeader onPress={() => navigation.navigate('EditCreate')}>

			</AddButtonHeader>
		);
	}

	return (
		<Header rightButton={renderAddButton}>
			<Container>
				<ListContainer>
					{RenderJotLists()}
				</ListContainer>
				{/* <AddButton onPress={onAddJotList}/> */}
			</Container>
		</Header>
	);
};

export default List;
