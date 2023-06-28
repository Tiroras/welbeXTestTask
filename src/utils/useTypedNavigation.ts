import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigatorParamList} from '../navigation/Root';

export const useTypedNavigation = () =>
  useNavigation<StackNavigationProp<RootNavigatorParamList>>();
