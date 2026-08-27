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

// 2. find로 영화 찾기-

const foundMovie = movies.find((movie) => movie.title === "인터스텔라");
console.log(`${foundMovie.title}의 평점은 ${foundMovie.voteAverage}점입니다.`);

// 3. filter()로 평점이 높은 영화 찾기

const filteredMovies = movies.filter((movie) => {
  return movie.voteAverage >= 8.5;
});

console.log(filteredMovies);
// movies는 여러 영화가 들어가있는 복수형아다. 꺼내온 1개의 영화 평점은 8.5이상인지 검사한다.


