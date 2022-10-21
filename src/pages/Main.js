import MainForm from "../components/MainForm";
import MainContents from "../components/MainContents"
import styled from "styled-components";
import { motion } from "framer-motion";

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  border: 2px solid;
`;
const Form = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
const Contents = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const Main = () => {
  return (
    <>
      <Top>
        이곳은 공통 상단 표기
      </Top>
      <Form>
        <MainForm/>
      </Form>
      <Contents>
        <MainContents />
      </Contents>
    </>
  );
}

export default Main;