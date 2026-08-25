// 2.영화 정보 함수 만들기

const getMovieMessage = (title, voteAverage) => {
  return ` ${title}의 평점은 ${voteAverage}점입니다.`;
};

// 3. 함수의 반환값 사용하기
const message = getMovieMessage("인셉션", 8.4);
console.log(message);

// 4. 제목 변경하기
const title = document.querySelector(".title");
title.textContent = "오늘의 추천 영화";
