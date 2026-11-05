import './App.css'
import users from './Componeats/FakeData/FakeData'
import Countries from './Componeats/Countries/Countries'

function App() {
  return (
    <>
      <div>
        <h1>React World Tour Two</h1>

        <Countries />

        <h1>Fake Data Practice</h1>

        {
          users.map(user =>
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.age}</p>
              <p>{user.city}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App