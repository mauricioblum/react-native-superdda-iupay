# react-native-superdda-iupay

SuperDDA IuPay package and SDK for React Native

## Installation

```sh
yarn add react-native-superdda-iupay

or

npm install react-native-superdda-iupay
```

## Usage

```jsx
import { Card } from "react-native-superdda-iupay";

// ...

      <Card
        type="netflix"
        dueDate="19 JUL"
        isDue
        cnpj="99.999.0001/99"
        text="This is a sample text"
        value={49.9}
      />

      <Card
        type="lightBill"
        lightBillFlagStatus="yellow"
        dueDate="Friday, 25 JUN"
        text="Yellow Flag"
        value={90.12}
        isPaid
      />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
