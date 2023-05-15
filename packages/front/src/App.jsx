import { Provider } from 'react-redux'
import store from './store'

import { Main } from './products/components/Main';

function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
}

export default App
