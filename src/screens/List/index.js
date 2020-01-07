/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { Container, AddButton, ListContainer, AddButtonHeader } from './styles';
import { useStoreActions, useStoreState } from 'easy-peasy';
import JotListItem from '../../components/JotListItem';
import Header from '../../components/Header';
import HeaderButton from '../../components/HeaderButton';

const List = ({ navigation }) => {
	const LoadJotList = useStoreActions(actions => actions.jots.loadJotLists);
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

	const onEditJotList = (uuid) => {
		SelectJotList(uuid);
		navigation.navigate('Order');
	};

	return (
		<Header rightButton={() => <HeaderButton icon="md-add" onPress={() => navigation.navigate('EditCreate')}/>}>
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
