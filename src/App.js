import "bootstrap/dist/css/bootstrap.min.css";
import MainApp from "./component/MainComp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveUserList } from "./redux/user.slice";
import EditUser from "./component/Form";

function App() {
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/users`;
      let response = await fetch(url);
      let data = await response.json();
      dispatch(saveUserList([...data]));
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row ">
          <MainApp />
          <EditUser />
        </div>
      </div>
    </>
  );
}

export default App;
