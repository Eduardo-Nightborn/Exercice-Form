import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Step1Form } from "../Step1Form";
import { Step2Form } from "../Step2Form";
import { Step3Form } from "../Step3Form";
import { Success } from "../Success";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Step1Form />} />
          <Route path="/step2" element={<Step2Form />} />
          <Route path="/step3" element={<Step3Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
