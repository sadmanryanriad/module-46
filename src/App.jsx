
import './App.css'
import Grandpa from './assets/Comonents/Grandpa/Grandpa';
// import Reusableform from './assets/Comonents/ResusableForm/Reusableform'
// import HookForm from './assets/Comonents/HookForm/HookForm'
// import RefForm from './assets/Comonents/RefForm/RefForm'
// import SimpleForm from './assets/Comonents/SimpleForm/SimpleForm'
// import StatefulForm from './assets/Comonents/StatefulForm/StatefulForm'

function App() {

//   const handleSignUpSubmit = data =>{
//     console.log('sign up: ', data);
// }
//   const handleUpdateSubmit = data =>{
//     console.log('update: ', data);
// }

  return (
    <>

      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <Reusableform formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <h2>Sign Up</h2>
        <p>please sign up</p>
      </Reusableform>

      <Reusableform formTitle={'Update Profile'} 
      handleSubmit={handleUpdateSubmit}
      submitBtnText={'Update'}>
        <h2>Update</h2>
        <p>please update your profile</p>
      </Reusableform> */}
    </>
  )
}

export default App
