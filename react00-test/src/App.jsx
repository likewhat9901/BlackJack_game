
function App() {

  return (
    <section>
      <h1 className='header'>블랙잭 게임</h1>
      <div className="computer">
        <div className="card">카드1</div>
        <div className="card">카드2</div>
        <div className="card">카드3</div>
        <div className="card">카드4</div>
        <div className="card">카드5</div>
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
      <div className="player">
        <div className="card">카드1</div>
        <div className="card">카드2</div>
        <div className="card">카드3</div>
        <div className="card">카드4</div>
        <div className="card">카드5</div>
      </div>
      <div className="control">
        <button type="button" className="gameStart" >게임시작</button>
        <div className="actions">
          <button type="button" className="double">더블다운</button>
          <button type="button" className="hit" >히트(한장더)</button>
          <button type="button" className="stand" >스탠드(Stop)</button>
        </div>
        <div className="display">
          <div className="bet">
            <label htmlFor="bet_input">베팅금액: </label>
            <input type="text" id="bet_input" />
          </div>
          <div className="budget">
            <label htmlFor="budget_show">남은금액: </label>
            <input type="text" id="budget_show" value='60,000' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
