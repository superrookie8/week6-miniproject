import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const Div = styled(motion.button)`
  width: 500px;
  height: 60px;
  border: 2px solid;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const FormWrap = styled(motion.div)`
  width: 100%;
  height: 145vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpperDiv = styled(motion.div)`
  position: absolute;
  top: 81vh;
`;
const Forms = styled.form`
  border: 2px solid;
  border-radius: 15px;
  width: 600px;
  height: 300px;
`;
const FormDiv = styled.div`
  width: 90%;
  height: 30px;
  margin: 10px auto;
`;
const DeleteBtn = styled.button`
  margin: 30px 250px;
  width: 110px;
  height: 50px;
  border-radius: 15px;
`;


const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};



const MainForm = () => {
  const [isTrue, setIsTrue] = useState(false);
  const presence = (ev) => {setIsTrue(prev=>!prev)}
  const test = (ev)=> {
    ev.preventDefault();
    setIsTrue(prev=>!prev);
  }
  return (
    <Wrap>
      {isTrue ? null :
        <Div onClick={presence} layoutId="1">
          오늘의 운동을 기록하자!
        </Div>
      }
      <AnimatePresence>
        {isTrue ?
          (<FormWrap 
            variants={overlay} 
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <UpperDiv layoutId="1">
              <Forms onSubmit={test}>
                <FormDiv>
                  <span>오늘의 운동</span>
                  <input placeholder="오늘 한 운동을 적어주세요..." />
                  <span>운동 시간</span>
                  <input placeholder="minutes..." />
                  <span>분</span>
                </FormDiv>
                <div>
                  <textarea placeholder="오늘의 운동 내용을 적어보세요!" />
                </div>
                <div>
                  <input type="file" />
                </div>
                <div>
                  <button value="ss">기록하기</button>
                </div>
              </Forms>
              <DeleteBtn onClick={()=>setIsTrue(false)}>취소</DeleteBtn>
            </UpperDiv>
          </FormWrap>)
          : null 
        }
      </AnimatePresence>
    </Wrap>
  );
}

export default MainForm;