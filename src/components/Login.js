import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const UpperDiv = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled(motion.div)`
  width: 400px;
  height: 500px;
  border: 2px solid;
  border-radius: 15px;
  margin: auto;
`;
const TitleName = styled(motion.div)`
  width: 380px;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
  display : flex;
  justify-content : center;
  align-items : center;
`;
const IdPassword = styled(motion.div)`
  width: 360px;
  height: 40px;
  margin: 50px auto 10px auto;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
  display : flex;
  justify-content : center;
  align-items : center;
`;
const InputDiv =styled(motion.div)`
  width: 360px;
  height: 40px;
  margin: auto;
`;
const Input = styled(motion.input)`
  width: 356px;
  height: 40px;
  margin: auto;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
`;
const UpperLoginSign = styled(motion.div)`
  width: 360px;
  height: 80px;
  margin: auto;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
`;
const LoginSign = styled(motion.button)`
  width: 150px;
  height: 40px;
  border-radius: 15px;
`;
const AssignIdPassword = styled(motion.div)`
  width: 360px;
  height: 40px;
  margin: 20px auto 10px auto;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
  display : flex;
  justify-content : center;
  align-items : center;
`;
const UpperAssignBtn = styled(motion.div)`
  width: 360px;
  height: 80px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [logIn, setLogIn] = useState(true);
  const toSignUp = () => {
    setValue("Id", "");
    setValue("Password", "");
    setLogIn(false)
  };
  const submitLoginSignUp = (data) => {
    // true, false에 따라 서버 통신 따로 할것임.
    if (logIn) {
      console.log(data.Id, data.Password)
      setValue("Id", "");
      setValue("Password", "");
    } else {
      console.log(data.Id, data.Password, data.NickName)
      setValue("Id", "");
      setValue("Password", "");
      setValue("NickName", "");
      setLogIn(true)
    };
  }
  return (
    <UpperDiv>
      {logIn ? (
        <Wrap>
          <TitleName>
            팀프로젝트 제목이 될 곳 입니다.
          </TitleName>
          <form onSubmit={handleSubmit(submitLoginSignUp)}>
            <IdPassword>
              Id
            </IdPassword>
            <InputDiv>
              <Input {...register("Id")} placeholder="아이디를 적어주세요"/>
            </InputDiv>
            <IdPassword>
              Password
            </IdPassword>
            <InputDiv>
              <Input {...register("Password")} placeholder="비밀번호를 적어주세요"/>
            </InputDiv>
            <UpperLoginSign>
            <LoginSign>
              Log In
            </LoginSign>
            <LoginSign onClick={toSignUp}>
              Sign Up
            </LoginSign>
            </UpperLoginSign>
          </form>
        </Wrap>) 
        : 
        (
          <Wrap>
            <TitleName>
              팀프로젝트 제목이 될 곳 입니다.
            </TitleName>
            <form onSubmit={handleSubmit(submitLoginSignUp)}>
              <AssignIdPassword>
                Id
              </AssignIdPassword>
              <InputDiv>
                <Input {...register("Id")} placeholder="아이디를 적어주세요" />
              </InputDiv>
              <AssignIdPassword>
                Password
              </AssignIdPassword>
              <InputDiv>
                <Input {...register("Password")} placeholder="비밀번호를 적어주세요" />
              </InputDiv>
              <AssignIdPassword>
                NickName
              </AssignIdPassword>
              <InputDiv>
                <Input {...register("NickName")} placeholder="닉네임을 적어주세요" />
              </InputDiv>
              <UpperAssignBtn>
                <LoginSign>
                  Sign Up
                </LoginSign>
              </UpperAssignBtn>
            </form>
          </Wrap>
        )}
    </UpperDiv>
  );
}

export default Login;

//sign up 버튼을 누를시 false 로 바뀌며 sign up 보이게끔