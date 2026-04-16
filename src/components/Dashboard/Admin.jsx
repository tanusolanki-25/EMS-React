import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'
import Header from '../Other/Header'

const Admin = ({setUser, user}) => {
  return (
    <div className='h-full w-full p-6  bg-[#121212] '>
       <Header setUser={setUser} user={user} />
       <CreateTask />
       <AllTask />
    </div>
  )
}

export default Admin
