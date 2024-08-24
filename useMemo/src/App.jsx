import { useMemo, useState } from 'react'
import { initialUsers } from './initialUsers'

export default function App() {
  const [count, setCount] = useState(0)
  const [users] = useState(initialUsers)

  const selectedUser = useMemo(() => users.find(user => user.isSelected), [users])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Selected User: {selectedUser.id}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
