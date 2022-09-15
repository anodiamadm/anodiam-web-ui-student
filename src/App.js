import { Route, Routes } from "react-router-dom";
import AnodiamProfile from "./components/AnodiamProfile/AnodiamProfile";
import AnodiamPageDisplay from "./components/AnodiamPageDisplay/AnodiamPageDisplay";
import Anodiam404 from "./components/GenericComponents/Anodiam404/Anodiam404";
import AnodiamAbout from "./components/GenericComponents/AnodiamFooter/AnodiamAbout";
import AnodiamContact from "./components/GenericComponents/AnodiamFooter/AnodiamContact";
import AnodiamRegister from "./components/AnodiamRegister/AnodiamRegister";
import AuthContextProvider from "./contexts/AuthContext";
import AnodiamForgetPassword from "./components/AnodiamRegister/AnodiamForgetPassword";
import AnodiamRegForgetDisplay from "./components/AnodiamPageDisplay/AnodiamRegForgetDisplay";
import AnodiamBuyCourses from "./components/AnodiamBuyCourses/AnodiamBuyCourses"
import MyLearning from "./components/MyLearning/MyLearning";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<AnodiamPageDisplay><AnodiamProfile /></AnodiamPageDisplay>} />
        <Route path="/register" element={<AnodiamRegForgetDisplay><AnodiamRegister /></AnodiamRegForgetDisplay>} />
        <Route path="/forgetChange" element={<AnodiamRegForgetDisplay><AnodiamForgetPassword /></AnodiamRegForgetDisplay>} />
        <Route path="/about" element={<AnodiamPageDisplay><AnodiamAbout /></AnodiamPageDisplay>} />
        <Route path="/contact" element={<AnodiamPageDisplay><AnodiamContact /></AnodiamPageDisplay>} />
        <Route path="/buyCourses" element={<AnodiamPageDisplay><AnodiamBuyCourses /></AnodiamPageDisplay>} />
        <Route path="/profile" element={<AnodiamPageDisplay><AnodiamProfile /></AnodiamPageDisplay>} />
        <Route path="/learning" element={<AnodiamPageDisplay><MyLearning /></AnodiamPageDisplay>} />
        <Route path="*" element={<AnodiamPageDisplay><Anodiam404 /></AnodiamPageDisplay>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;