/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { Container, AddButton, ListContainer } from './styles';
import { useStoreActions, useStoreState } from 'easy-peasy';
import JotListItem from '../../components/JotListItem';

const List = ({ navigation }) => {
	const AddJotList = useStoreActions(actions => actions.jots.addJotList);
	const SelectJotList = useStoreActions(actions => actions.jots.selectJotList);
	const jotLists = useStoreState(state => state.jots.jotLists);

	useEffect(() => {
		AddJotList();
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
	};

	const onEditJotList = (uuid) => {
		SelectJotList(uuid);
		navigation.navigate('Order');
	};

	return (
		<Container>
			<ListContainer>
				{RenderJotLists()}
			</ListContainer>
			<AddButton onPress={onAddJotList}/>
		</Container>
	);
};

export default List;
