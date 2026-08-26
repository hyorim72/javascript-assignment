// 2. 버튼의 Click Event 처리하기

const recommendbutton = document.querySelector("#recommend-button");
const recommendresult = document.querySelector("#recommend-result");

recommendButton.addEventListtener("click", () => {
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});
