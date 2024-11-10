import Wellcome from "./components/Wellcome/Wellcome";
import HomePage from "./page/Home/Home";

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;

import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";

function RouterTest(props) {
  const Home = (
    <div className="main h-screen w-full flex flex-col gap-y-4 justify-center items-center">
      <h2 className="text-6xl tracking-wider text-white">Home</h2>
      <Link className="underline text-white" to="/wellcome">
        goto wellcome
      </Link>
    </div>
  );
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/wellcome" element={<Wellcome />} />
        <Route path="/user/:user" element={<User />} />
      </Routes>
    </>
  );
}