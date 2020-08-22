import { NativeModules } from 'react-native';
import type { SuperddaIupayType } from './types';

const { SuperddaIupay } = NativeModules;

export default SuperddaIupay as SuperddaIupayType;
