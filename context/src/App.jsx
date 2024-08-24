import { useState } from 'react';
import Child from './components/Child';
import { UserContext } from "./context"

const App = () => {
  const [user, setUser] = useState("John Doe");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        Parent Component
        <Child />
      </div>
    </UserContext.Provider>
  );
};

export default App;