import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __postCom } from "../../../store/modules/commentSlice";

const DetailComment = () => {
  const initialState = {
    id: 0,
    comment: "",
    nickname: "",
    // postId: postId,
  };

  const [com, setCom] = useState(initialState);
  const comments = useSelector((state) => state.comments.comments);

  // useEffect(()=>{
  //   dispatch()
  // })

  const onChangeHandler = (e) => {
    setCom(e.target.value);
    console.log(com);
  };
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (com.comment === "") {
      alert("내용을 입력하세요");
      return;
    }
    dispatch(__postCom({ comments: com }));
    setCom(initialState);
    return;
  };
  return (
    <AllContainer onSubmit={onSubmitHandler}>
      <InputContainer>
        <InputWcover>
          <InputWriter
            type="text"
            name="comment"
            key="id"
            onChange={onChangeHandler}
          />
        </InputWcover>
        <PbCover>
          <PushButton onClick={() => {}}>입력</PushButton>
        </PbCover>
      </InputContainer>
      <CommentContainer>
        <CommentBox>
          <CommentStyle>
            댓글-----------------------------------------------
            -------------------------------------------------
            ------------------- ------------------
          </CommentStyle>
        </CommentBox>
        <CdbCover>
          <CommentDeleteButton>삭제</CommentDeleteButton>
        </CdbCover>
      </CommentContainer>
    </AllContainer>
  );
};

export default DetailComment;

const AllContainer = styled.form`
  width: 100%;
  max-width: 1150px;
  height: 400px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  /* padding: 30px; */
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80px;
  border: 3px solid gray;
  margin-bottom: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;

const InputWcover = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`;
const InputWriter = styled.input`
  width: 100%;
  max-width: 880px;
  height: 30px;
  /* background-color: blue; */
  border-radius: 30px;
`;

const PbCover = styled.div`
  width: 100%;
  max-width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: skyblue; */
`;
const PushButton = styled.button`
  width: 100%;
  max-width: 70px;
  height: 40px;
  font-size: large;
  border: 3px solid lightpink;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: none;
  cursor: pointer;
`;

const CommentContainer = styled.div`
  width: 100%;
  max-width: 1150px;
  height: 320px;
  border: 3px solid gray;
  /* background-color: gray; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  border-radius: 10px;
`;

const CommentBox = styled.div`
  width: 100%;
  max-width: 950px;
  height: 50px;
  border-bottom: 1px solid gray;
  /* background-color: blueviolet; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const CommentStyle = styled.div`
  width: 100%;
  max-width: 900px;
  height: 45px;
  /* border: 1px solid pink; */
  overflow: auto;
  display: flex;
  align-items: center;
`;

const CdbCover = styled.div`
  width: 100%;
  max-width: 100px;
  height: 50px;
  /* background-color: beige; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CommentDeleteButton = styled.div`
  width: 100%;
  max-width: 70px;
  height: 30px;
  border: 3px solid lightpink;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
