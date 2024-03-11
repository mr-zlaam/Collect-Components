import { useState } from "react";
import "./App.scss";
import {
  ModalBody,
  ModalFooter,
  ModalHead,
  ModalWrapper,
} from "./components/Modal/Modal";
function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="maindiv">
      <h1 className="title">React + TypeScript = Love</h1>
      <ModalWrapper
        width="500px"
        height="250px"
        isOpen={modalShow}
        onClose={setModalShow}
      >
        <ModalHead className="head"></ModalHead>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </ModalWrapper>
      <button
        onClick={() => {
          setModalShow(true);
        }}
      >
        load modal
      </button>
    </div>
  );
}

export default App;
