import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";


// 얇은 기록하기 버튼을 디폴트로 렌더하고 클릭시 layout을 연동해서
// form태그가 뜨게끔
const Wrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled(motion.div)`
  width: 1200px;
  height: 550px;
  border: 2px solid;
  border-radius: 15px;
`;

const MainContents = () => {
  return (
    <Wrap>
      <Div>
        컨텐츠들이 들어갈 항목입니다.
      </Div>
    </Wrap>
  );
}

export default MainContents;