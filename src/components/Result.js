import { useState, useEffect } from 'react'

const Result = (props) => {

  const {
    bill, setBill,
    tip, setTip,
    people, setPeople } = props;

  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [resetEnabled, setResetEnabled] = useState(false)

  useEffect(() => {
    // Calculate tip amount if bill and people is provided
    if (bill && people) {
      setTipAmount(() => {
        let res = Number(bill) * Number(tip) / Number(people)
        return res.toFixed(2)
      })
    }

    // Enable reset button if any of the inputs isn't empty
    if (bill || people || tip) {
      setResetEnabled(true)
    } else {
      setResetEnabled(false)
    }

  }, [bill, tip, people])

  useEffect(() => {
    if (tipAmount) {
      setTotal(() => {
        let res = (Number(bill) / Number(people)) + Number(tipAmount)
        return res.toFixed(2)
      })
    }
  }, [tipAmount])


  const handleReset = () => {
    setPeople('');
    setBill('');
    setTip(null);
    setTipAmount(0);
    setTotal(0);

    setResetEnabled(false);
  }

  return (
    <>
      <section className="result-section">

        <div className="res-div">

          <div className="res-text">
            <h2>Tip Amount<span>/ person</span></h2>
            <p>${tipAmount}</p>
          </div>

          <div className="res-text">
            <h2>Total<span>/ person</span></h2>
            <p>${total}</p>
          </div>

        </div>

        {resetEnabled ?
          (<button className="reset" onClick={handleReset}>RESET</button>) :
          (<button className="reset disabled" disabled>RESET</button>)
        }


      </section>
    </>
  )
}

export default Result