import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h2>{props.title}</h2>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticLine  = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (all > 0) {
    const average = ((props.good - props.bad)/all)*100

    return (
      <table>
        <tbody>
          <StatisticLine  text='good'     value={props.good} />
          <StatisticLine  text='neutral'  value={props.neutral} />
          <StatisticLine  text='bad'      value={props.bad} />
          <StatisticLine  text='all'      value={all} />
          <StatisticLine  text='average'  value={average} />
          <StatisticLine  text='positive' value={(props.good * 100)/all + ' %'} />
        </tbody>
      </table>
    );
  }
  else {
    return <div>No feedback given</div>
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const saveFeedback = (value, addOne) => addOne(value + 1)

  return (
    <div>
      <Header title='give feedback' />
      <Button onClick={() => saveFeedback(good, setGood)} text='good' />
      <Button onClick={() => saveFeedback(neutral, setNeutral)} text='neutral' />
      <Button onClick={() => saveFeedback(bad, setBad)} text='bad' />
      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
export default App;
