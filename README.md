# react-native-superdda-iupay

SuperDDA IuPay package and SDK for React Native

[![Netlify Status](https://api.netlify.com/api/v1/badges/581ed11a-1e2e-4639-a200-b0038e3f3c8b/deploy-status)](https://app.netlify.com/sites/superdda-storybook/deploys)

## Installation

```sh
yarn add react-native-superdda-iupay

or

npm install react-native-superdda-iupay
```

## Usage

Here is sample usage.

Storybook with all other use cases available here: https://superdda-storybook.netlify.app/

```jsx
import { Card } from "react-native-superdda-iupay";

      <Card
        type="netflix"
        dueDate={new Date()}
        isDue
        cnpj="99.999.0001/99"
        text="This is a sample text"
        value={49.9}
      />

      <Card
        type="lightBill"
        lightBillFlagStatus="yellow"
        dueDate={new Date()}
        text="Yellow Flag"
        value={90.12}
        isPaid
      />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
