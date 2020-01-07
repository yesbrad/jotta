import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Screen Components
import List from '../screens/List';
import Order from '../screens/Order';

const appNavigator = createStackNavigator({
	List: {
		screen: List,
		navigationOptions: {
			headerShown: false
		}
	},
	Order: {
		screen: Order,
		navigationOptions: {
			headerShown: false
		}
	},
});

export default createAppContainer(appNavigator);
