// 2. 버튼의 Click Event 처리하기

const recommendButton = document.querySelector("#recommend-button");
const recommendResult = document.querySelector("#recommend-result");

recommendButton.addEventListener("click", () => {
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});

// 3.form 제출 처리하기
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = searchInput.value.trim();
  if (keyword === "") {
    return;
  }

  searchResult.textContent = `검색한 영화: ${searchInput.value}`;

  searchInput.value = "";
});

// 4. 빈 검색어 처리하기 (3번 사이 끼어넣기)

// 5. 검색 후 Input 비우기 (searchResult.textContent = `검색한 영화: ${searchInput.value}`; 밑에 부분)

// 6. forEach()로 영화 목록 출력하기

// 06. forEach()로 영화 목록 Console에 출력하기

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
];

movies.forEach((movie) => {
  console.log(`${movie.title}의 평점은 ${movie.voteAverage}점입니다.`);
});
