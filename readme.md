## React Shinju

_Ultra Lightweight React State Management with Shinju_

### What is Shinju?

👉[Go Here](https://github.com/rajatsharma305/shinju)

### Usage

```js
import StateTree from '@higherorder/shinju';
import { subscribeComponent } from 'react-shinju';

const State = StateTree();

const Counter = ({ state }) => (
  <div onClick={_ => State.add(state.counter + 1, 'counter')}>
    {state.counter}
  </div>
);

subscribeComponent(State)(Counter);
```
