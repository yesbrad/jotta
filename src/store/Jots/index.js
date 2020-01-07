import {action} from 'easy-peasy';
import UUID from 'uuid/v4';

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
		state.jotLists[state.selectedJotList].jots.push(payload);
	}),
	editJot: action((state, payload) => {
		state.jotLists[state.selectedJotList].jots = payload;
	}),
	selectJotList: action((state, payload) => {
		state.selectedJotList = payload;
	}),
};

export default {
	...JotsInitalStore,
	...JotsActions,
};
