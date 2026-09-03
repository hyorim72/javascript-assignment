const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";

const container = document.querySelector("#movie-list");

function createMovieCard(movie) {
  // TODO 1. title, vote_average, poster_path를 구조 분해 할당으로 가져오세요.
  const { title, vote_average, poster_path } = movie;

  // TODO 2. movie-card 클래스를 가진 div 요소를 만드세요.
  const card = document.createElement("div");
  card.className = "movie-card";

  // TODO 3. 포스터 img 요소를 만들고 src와 alt를 설정하세요.
  const poster = document.createElement("img");
  poster.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";
  poster.alt = `${title} 포스터`;

  // TODO 4. 영화 제목 h3 요소와 평점 p 요소를 만드세요.
  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const rating = document.createElement("p");
  rating.textContent = `평점 ${vote_average}`;

  // TODO 5. 만든 요소를 card에 추가하고 card를 반환하세요.
  card.appendChild(poster);
  card.appendChild(titleEl);
  card.appendChild(rating);

  return card;
}

function renderMovies(movies) {
  // TODO 6. forEach()로 영화 목록을 반복하면서
  // createMovieCard()로 만든 카드를 container에 추가하세요.
  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    container.appendChild(card);
  });
}

async function getTopRatedMovies() {
  // TODO 7. API 요청 전에 Loading 문구를 표시하세요.
  container.textContent = "Loading...";
}

const response = await fetch(URL, options);
const data = await response.json();

// TODO 8. Loading 문구를 지우세요.
container.textContent = "";
