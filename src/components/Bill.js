import { useState } from 'react'

const Bill = ({bill,setBill}) => {

  const [billError, setBillError] = useState(false)

  const handleBillChange = (e) => {
    e.target.value == 0 ? setBillError(true) : setBillError(false);
    setBill(e.target.value);
  }

  return (
    <>
      <section className={billError ? "bill-section bill-error" : "bill-section"}>
        <div className="bill-title">
          <h2 className="section-header">Bill</h2>
          <span className="bill-error-text">Can't be zero</span>
        </div>

        <div className='bill-input-group'>
          <img src="./images/icon-dollar.svg" alt="dollars" />
          <input
            id="bill"
            className="bill-input"
            type="text"
            onChange={e => handleBillChange(e)}
            value={bill}
          />

        </div>
      </section>
    </>
  )
}

export default Bill