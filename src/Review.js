import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const Review = (props) => {
  const [rate, setRate] = useState(-1);
  let history = useHistory();
  const week = useParams();

  function ReviewBtn() {
    history.push("/");
  }

  return (
    <>
      <ReviewText>
        <Day>{week.day}요일</Day>
        <Text>평점 남기기</Text>
      </ReviewText>
      <RatingBox>
        {Array.from([0, 1, 2, 3, 4], (index) => {
          return (
            <Circle
              key={index}
              style={{
                backgroundColor: rate < index ? "#ddd" : "#fff500",
              }}
              onClick={() => {
                setRate(index);
                console.log(rate);
                console.log(index);
              }}
            ></Circle>
          );
        })}
      </RatingBox>
      <Btn onClick={ReviewBtn}>평점 남기기</Btn>
    </>
  );
};

export default Review;

const ReviewText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Day = styled.div`
  font-size: 20px;
  font-weight: bold;
  background-color: orange;
  width: 64px;
  color: white;
  border-radius: 8px;
  text-align: center;
`;

const Text = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 6px;
`;

const Circle = styled.div`
  background-color: #ddd;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  &:hover {
    opacity: 0.5;
  }
`;

const Btn = styled.button`
  width: 260px;
  height: 50px;
  border-radius: 25px;
  color: white;
  background-color: #1794ff;
  border: 1px solid #1794ff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  &:hover {
    opacity: 0.7;
  }
`;

const RatingBox = styled.div`
  display: flex;
`;
