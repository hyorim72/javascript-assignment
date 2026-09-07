// 실습 3) 진짜 응답의 구조 탐색하기
const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const url = "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR";

async function getNowPlaying() {
  const response = await fetch(url, options);
  console.log(response);

  // 04. Response의 데이터 사용하기
  const data = await response.json();
  console.log(data);

  // 05.첫 번째 영화 가져오기
  const firstMovie = data.results[0];

  // 06. 영화 제목과 평점 가져오기
  const { title, vote_average } = firstMovie;
  console.log(`제목: ${title}`);
  console.log(`평점: ${vote_average}`);
}

getNowPlaying();
