import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  let history = useHistory();
  const weekDay = ["월", "화", "수", "목", "금", "토", "일"];

  // const weekDays = weekDay.map((day) => {
  //   let today = new Date().getDay();
  //   let dayIndex = today + parseInt(day);
  //   let days = dayIndex > 6 ? dayIndex - 7 : dayIndex;
  //   return weekDays[days];
  // });
  // console.log(weekDay);

  // const dayRate = weekDays.map((day) => {
  //   return {
  //     days: day,
  //     rate: Math.floor(Math.random() * 4),
  //   };
  // });

  return (
    <>
      {/* <Line>
        {dayRate.map((week, index) => {
          return (
            <Line key={index}>
              <h3>{week.days}</h3>
              {Array.from([0, 1, 2, 3, 4], (index) => {
                return (
                  <Circle
                    key={index}
                    style={{
                      backgroundColor:
                        dayRate.rate < index ? "#e1f1e7" : "#6eceda",
                    }}
                  ></Circle>
                );
              })}
              <Tri
                onClick={() => {
                  history.push("/review/:weekDays");
                  history.go(0);
                }}
              >
                <i
                  style={{ color: "#b57fb3" }}
                  class="fas color:red fa-chevron-right fa-2x"
                ></i>
              </Tri>
            </Line>
          );
        })}
      </Line> */}
      <h2> 내 일주일은?</h2>
      <Line>
        <h3>{weekDay[0]}</h3> <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Tri
          onClick={() => {
            history.push("/review/월");
            console.log(weekDay);
            history.go(0);
          }}
        >
          Go
        </Tri>
      </Line>
      <Line>
        <h3>화</h3> <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />{" "}
        <Tri
          onClick={() => {
            history.push("/review/화");
            console.log(weekDay);
            history.go(0);
          }}
        >
          Go
        </Tri>
      </Line>
      <Line>
        <h3>수</h3> <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />{" "}
        <Tri
          onClick={() => {
            history.push("/review/수");
            console.log(weekDay);
            history.go(0);
          }}
        >
          Go
        </Tri>
      </Line>
      <Line>
        <h3>목</h3> <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />{" "}
        <Tri
          onClick={() => {
            history.push("/review/목");
            console.log(weekDay);
            history.go(0);
          }}
        >
          Go
        </Tri>
      </Line>
      <Line>
        <h3>금</h3> <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />{" "}
        <Tri
          onClick={() => {
            history.push("/review/금");
            console.log(weekDay);
            history.go(0);
          }}
        >
          Go
        </Tri>
      </Line>
      <Line>
        <h3>토</h3> <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />{" "}
        <Tri
          onClick={() => {
            history.push("/review/토");
            console.log(weekDay);
            history.go(0);
          }}
        >
          Go
        </Tri>
      </Line>
      <Line>
        <h3>일</h3> <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />{" "}
        <Tri
          onClick={() => {
            history.push("/review/일");
            console.log(weekDay);
            history.go(0);
          }}
        >
          Go
        </Tri>
      </Line>
      <Score>
        <Text>평균 평점</Text>
        <br />
        <ScoreText>2.4</ScoreText>
      </Score>

      <Btn>Reset</Btn>
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

const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: blue;
`;

const ScoreText = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: blue;
`;

const Score = styled.div`
  margin: 14px 0px;
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
  &:hover {
    opacity: 0.7;
  }
`;
