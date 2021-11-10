import {Route,Routes} from "react-router-dom";
import Main from "../components/Main";

const Router = ()=>{
  return(
      <Routes>
        <Route path={'/'} element={<Main/>}></Route>
      </Routes>
  )
}
export default Router