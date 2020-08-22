import { NativeModules } from 'react-native';
import type { SuperddaIupayType } from './types';

const { SuperddaIupay } = NativeModules;

export * from './components';
export default SuperddaIupay as SuperddaIupayType;
