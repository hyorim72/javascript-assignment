const movie = {
  id: 550,
  title: "Fight Club",
  vote_average: 8.4,
  vote_count: 0,
  detail: {
    runtime: 139,
  },
};

const genres = ["Drama", "Thriller", "Crime"];

// 01. 객체 구조 분해 할당하기

const { title, vote_average } = movie;
console.log(`제목: ${title}`);
console.log(`평점: ${vote_average}`);

// 02. 새로운 변수 이름으로 할당하기

const { title: movieTitle } = movie;
console.log(movieTitle);

// 03. 배열 구조 분해 할당하기

const [firstGenre, secondGenre] = genres;
console.log(firstGenre);
console.log(secondGenre);

