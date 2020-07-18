import { NativeModules } from 'react-native';

type SuperddaIupayType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SuperddaIupay } = NativeModules;

export default SuperddaIupay as SuperddaIupayType;
