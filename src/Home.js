import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  let history = useHistory();
  const WeekDay = ["월", "화", "수", "목", "금", "토", "일"];

  let RateSum = 0;

  const WeekRate = WeekDay.map((day) => {
    const random = Math.floor(Math.random() * 5 + 1);
    RateSum += random;
    return {
      day: day,
      rate: random,
    };
  });

  const average = (RateSum / 7).toFixed(1);
  const [avg, setAvg] = useState(average);

  return (
    <>
      <h2> 내 일주일은?</h2>
      {WeekRate.map((d, i) => {
        return (
          <Line key={i}>
            <h3>{d.day}</h3>
            {Array.from({ length: 5 }, (c, i) => {
              return (
                <Circle
                  key={i}
                  style={{
                    backgroundColor: d.rate > i ? "#fff500" : "#ddd",
                  }}
                />
              );
            })}
            <Tri
              onClick={() => {
                history.push(`/review/${WeekDay[i]}`);
              }}
            >
              Go
            </Tri>
          </Line>
        );
      })}
      <Hr />

      <Score>
        <Text>평균 평점</Text>
        <br />
        <ScoreText>{avg}</ScoreText>
      </Score>
      <Btn
        onClick={() => {
          setAvg(parseInt(0).toFixed(1));
        }}
      >
        Reset
      </Btn>
    </>
  );
};

export default Home;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  background-color: #fff500;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
`;

const Tri = styled.button`
  width: 40px;
  height: 30px;
  background-color: white;
  border: 1.5px solid #1794ff;
  color: #1794ff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 6px;
  margin-left: 10px;
  &:hover {
    background-color: #1794ff;
    color: white;
  }
`;

const Hr = styled.hr`
  width: 300px;
  border: 0.5px solid #ddd;
  margin: 6px 0px 24px 0px;
`;

// const RateBox = styled.div`
//   padding: 20px;
//   margin-top: 16px;
//   border: 1.6px solid #eee;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #1794ff;
  margin-top: 16px;
`;

const ScoreText = styled.span`
  font-size: 34px;
  font-weight: bold;
  color: #1794ff;
`;

const Score = styled.div`
  text-align: center;
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
  margin-top: 16px;
  &:hover {
    opacity: 0.7;
  }
`;
