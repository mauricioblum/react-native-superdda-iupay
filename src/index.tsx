import { NativeModules } from 'react-native';
import type { SuperddaIupayType } from './types';
import { Card } from './components';

const { SuperddaIupay } = NativeModules;

export { Card };
export default SuperddaIupay as SuperddaIupayType;
