import React, { useState } from "react";

import { add, format, sub, differenceInHours } from "date-fns";
import addWeeks from "date-fns/addWeeks"; // tree shaking

import ko from "date-fns/locale/ko";

import { format as timezoneFormat, toDate } from "date-fns-tz";

export default function DateFnsExample() {
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };

  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const cloneNewDateFnsDate = addWeeks(newDateFnsDate, 1);

  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(cloneNewDateFnsDate, "yyyy-MM-dd")}
        <br />
      </div>
      <br />
      <div>Summer Time(뉴욕)</div>
      <div>TIMEZONE : {format(new Date(), "z")}</div>
      {/* moment와는 조금 다른 시간 계산법 */}
      <div>
        2018년 3월 10일 13시에 하루 더하기
        <br />
        {timezoneFormat(
          add(new Date("2018-03-10 13:00:00"), { days: 1 }),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_York" }
        )}
      </div>
      <div>
        2018년 3월 10일 13시에 하루 더하기
        <br />
        {timezoneFormat(
          add(new Date("2018-03-10 13:00:00"), { hours: 24 }),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_York" }
        )}
      </div>
      <div>
        2018년 3월 10일 13시에 하루 더하기 - toDate()
        <br />
        {/* toDate() */}
        {timezoneFormat(
          add(
            toDate(new Date("2018-03-10 13:00:00"), {
              timeZone: "America/New_York",
            }),
            { hours: 24 }
          ),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_York" }
        )}
      </div>
      <br />
      <div>Leap Year(윤년, 한국)</div>
      <div>
        2017년 1월 1일에 1년 빼기
        <br />
        {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
      </div>
      <div>
        2017년 1월 1일에 365일 빼기
        <br />
        {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
      </div>
      <br />
      <div>한국어로 표기(07-17-2021을 2021년 7월 17일로 표기)</div>
      <div>{format(new Date("07-17-2021"), "yyyy년 M월 d일")}</div>
      <br />
      <div>생일 요일 찾기</div>
      <div>
        <input type="date" onChange={handleBirthDayChange} />
        <div>무슨 요일?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00 은 몇 시간 차이인가?</div>
      <div>
        {differenceInHours(
          new Date("2021-07-17 03:00"),
          new Date("2021-07-18 02:00")
        )}
      </div>
    </div>
  );
}
