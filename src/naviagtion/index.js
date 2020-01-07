import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Screen Components
import List from '../screens/List';
import Order from '../screens/Order';

const appNavigator = createStackNavigator({
	List: {
		screen: List,
	},
	Order: {
		screen: Order,
	},
});

export default createAppContainer(appNavigator);
