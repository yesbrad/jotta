import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Screen Components
import List from '../screens/List';
import Order from '../screens/Order';
import EditCreate from '../screens/EditCreate';

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
	EditCreate: {
		screen: EditCreate,
		navigationOptions: {
			headerShown: false
		}
	},
});

export default createAppContainer(appNavigator);
