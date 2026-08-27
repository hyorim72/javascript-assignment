const movies = [
  {
    title: "인셉션",
    voteAverage: 8.4,
  },
  {
    title: "인터스텔라",
    voteAverage: 8.7,
  },
  {
    title: "다크 나이트",
    voteAverage: 9.0,
  },
  {
    title: "테넷",
    voteAverage: 7.3,
  },
];

// 2. find로 영화 찾기

const foundMovie = movies.find((movie) => movie.title === "인터스텔라");
console.log(`${foundMovie.title}의 평점은 ${foundMovie.voteAverage}점입니다.`);
