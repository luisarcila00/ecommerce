import {Route,Routes} from "react-router-dom";
import Main from "../components/Main";
import MainNavbar from "../components/MainNavbar";

const Router = ()=>{
  return(
      <Routes>
        <Route path={'/'} element={<MainNavbar/>}></Route>
      </Routes>
  )
}
export default Router