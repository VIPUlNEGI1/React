import Login from "./componts/Login";
import Profil from "./componts/Profil";
import UsercontextProvider from "./Context/UsercontextProvider";


function App() {
  return (
  
<UsercontextProvider>
  <h1>hi iam vipul negi</h1>
  <Login/>
  <Profil/>
</UsercontextProvider>
  );
}

export default App;
