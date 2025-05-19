import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cardComputer, setCardComputer] = useState([]);
  const [cardPlayer, setCardPlayer]   = useState([]);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 실제 DOM에서 카드 요소를 가져와서 상태로 저장
    setCardComputer(Array.from(document.querySelectorAll('.card.computer')));
    setCardPlayer(Array.from(document.querySelectorAll('.card.player'))  );
  }, []); // 빈 배열: 마운트 시 한 번만 실행
  
  let hit_count = 2;
  let interval, std_count = 1;
  let r_cardNum, suit_position;

  const game_start = () => {
    hit_count = 2;
    std_count = 1;
    for(let i=0 ; i<5 ; i++){
      cardComputer[i].style.background = "";
      cardPlayer[i].style.background = "";
    }
    clearInterval(interval);

    cardSet_p(0);
    cardSet_p(1);

    cardSet_c(0);
    cardComputer[1].style.background =
      `url('./images/back.gif') no-repeat 0 0 / cover`;
  };

  const hit = () => {
    if(hit_count > 4) return;

    cardSet_p(hit_count);
    hit_count++;
  };

  const stand = () => {
    interval = setInterval(()=>{
      if(std_count > 4) {
        clearInterval(interval);
        return;
      };
      // cardComputer[1].style.background = "";
      cardSet_c(std_count);
      std_count++;
    }, 1000);
  };

  function shuffle(){
    r_cardNum = Math.floor(Math.random()*13+1);

    const r_suitNum = Math.floor(Math.random()*4);
    const suitsArr = ["0 0" ,"0 33.3%", "0 66.6%", "0 100%"];
    suit_position = suitsArr[r_suitNum];
    
    console.log(r_cardNum, suit_position);
  }
  function cardSet_p(index){
    shuffle();
    cardPlayer[index].style.background =
      `url('./images/${r_cardNum}.gif') no-repeat ${suit_position} / 100% 400%`;
  }
  function cardSet_c(index){
    shuffle();
    cardComputer[index].style.background =
      `url('./images/${r_cardNum}.gif') no-repeat ${suit_position} / 100% 400%`;
  }

  return (
    <section>
      <h1>블랙잭 게임</h1>
      <div>
        <div className="play computer">
          <div className="card computer" id="c_first">카드1</div>
          <div className="card computer" id="c_second">카드2</div>
          <div className="card computer" id="c_third">카드3</div>
          <div className="card computer" id="c_fourth">카드4</div>
          <div className="card computer" id="c_fifth">카드5</div>
        </div>
        <div className="deck">
          <div className="card">카드덱</div>
          <p className="rule">
            <strong>게임 규칙</strong><br />
            - 목표: 21점을 넘지 않고 딜러보다 높은 점수 얻기<br />
            - A: 1점 또는 11점<br />
            - J/Q/K: 10점<br />
          </p>
        </div>
        <div className="play user">
          <div className="card player">카드1</div>
          <div className="card player">카드2</div>
          <div className="card player">카드3</div>
          <div className="card player">카드4</div>
          <div className="card player">카드5</div>
        </div>
        <div className="control">
          <button type="button" className="button gameStart" onClick={game_start}>게임시작</button>
          <button type="button" className="button double">더블다운</button>
          <button type="button" className="button hit" onClick={hit}>히트(한장더)</button>
          <button type="button" className="button stand" onClick={stand}>스탠드(Stop)</button>
          <div className="money">
            <div className="show bet">
              <label htmlFor="bet_input">베팅금액: </label>
              <input type="text" id="bet_input" />
            </div>
            <div className="show myBudget">남은금액 : <span id="deposit">60,000</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
