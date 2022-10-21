import React from "react";
import styled from "styled-components";

const DetailBoard = () => {
  // const image = { image };
  return (
    // <DetailContainer>
    //   <TitleBox>title</TitleBox>
    //   <DetailBoxContainer>
    //     <DetailBoxOne>
    //       <TextBox>운동일자 : date</TextBox>
    //       <TextBox>운동종목 : exercise</TextBox>
    //       <TextBox>운동시간 : time</TextBox>
    //       <CommentBox>
    //         <p>코멘트</p>
    //         <CommentInBox>content 내용 들어갈 곳 </CommentInBox>
    //       </CommentBox>
    //     </DetailBoxOne>
    //     <DetailBoxTwo>
    //       <ImageBox>image 사진이 뜨는 위치</ImageBox>
    //     </DetailBoxTwo>
    //   </DetailBoxContainer>
    // </DetailContainer>
    // ) : (
    <DetailContainer>
      <TitleBox>title</TitleBox>
      <DetailBoxContainer>
        <DetailBoxOneC>
          <TextBox>운동일자 : date</TextBox>
          <TextBox>운동종목 : exercise</TextBox>
          <TextBox>운동시간 : time</TextBox>
          <CommentBox>
            <p>코멘트</p>
            <CommentInBox>content 내용 들어갈 곳 </CommentInBox>
          </CommentBox>
        </DetailBoxOneC>
      </DetailBoxContainer>
    </DetailContainer>
  );
};

export default DetailBoard;

const DetailContainer = styled.form`
  max-width: 1200px;
  width: 100%;
  height: 450px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DetailBoxContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 450px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  /* background-color: blue; */
`;
const DetailBoxOneC = styled.div`
  width: 100%;
  max-width: 600px;
  height: 380px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
const DetailBoxOne = styled.div`
  width: 100%;
  max-width: 600px;
  height: 380px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailBoxTwo = styled.div`
  width: 100%;
  max-width: 600px;
  height: 380px;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleBox = styled.div`
  width: 100%;
  max-width: 1150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: xx-large;
  border: 3px solid gray;
  border-radius: 10px;
  /* background-color: blue; */
`;

const TextBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 40px;
  border: 2px solid gray;
  border-radius: 20px;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px;
`;
const CommentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 150px;
  border: 2px solid gray;
  border-radius: 20px;
  padding: 5px;
`;
const CommentInBox = styled.div`
  width: 100%;
  max-width: 480px;
  height: 95px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  align-items: left;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
