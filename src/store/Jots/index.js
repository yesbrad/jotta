import {action, thunk, debug} from 'easy-peasy';
import UUID from 'uuid/v4';
import AsyncStorage from '@react-native-community/async-storage';

const JOTLIST_SAVE_KEY = 'JotlidsdsDtKey';

const JotsInitalStore = {
	test: 0,
	jotLists: {},
	selectedJotList: '',
};

const JotsActions = {
	addTest: action(state => {
		const newNum = state.test + 1;
		state.test = newNum;
	}),
	addJotList: action((state, payload) => {
		const newJotList = {
			title: 'Untitled Jot',
			jots: [],
		};
		state.jotLists = {[UUID()]: newJotList, ...state.jotLists};
	}),
	addJot: action((state, payload) => {
		state.jotLists[state.selectedJotList].jots.push({ jot: payload, id: UUID() });
	}),
	editJot: action((state, payload) => {
		state.jotLists[state.selectedJotList].jots = payload;
	}),
	selectJotList: action((state, payload) => {
		state.selectedJotList = payload;
	}),
	loadJotLists: thunk(async actions => {
		try{
			const loadedSaves = await AsyncStorage.getItem(JOTLIST_SAVE_KEY);
			const jots = JSON.parse(loadedSaves);
			actions.setJotlists(jots);
			console.log('JotLists Loaded!', jots);
		} catch (err) {
			console.log('Failed to load JotLists', err.message);
		}
	}),
	setJotlists: action((state, payload) => {
		state.jotLists = payload;
	}),
	saveJotLists: action((state, payload) => {
		console.log(debug(state.jotLists));
		const saves = JSON.stringify(state.jotLists);
		if(saves){
			AsyncStorage.setItem(JOTLIST_SAVE_KEY, saves);
		}
	}),
};

export default {
	...JotsInitalStore,
	...JotsActions,
};
