import React, { useState } from 'react'

const Tip = ({ setTip }) => {

  const [isCustom, setIsCustom] = useState(false);

  const handleTipChange = (e) => {
    setTip(e.target.value)
    setIsCustom(false);
  }

  const handleClickCustom = () => {
    setIsCustom(true)
  }

  const handleCustomTip = (e) => {
    setTip(Number(e.target.value / 100))
  }

  return (
    <>
      <section className="tip-section">

        <h2 className="section-header tip-h2">Select Tip %</h2>

        <div className="tip-buttons">
          <label>
            <input
              name="tip"
              type='radio'
              value="0.05"
              onClick={e => handleTipChange(e)}
            />
            <span className="tip-btn">5%</span>
          </label>

          <label>
            <input
              name="tip"
              type='radio'
              value="0.10"
              onClick={e => handleTipChange(e)}
            />
            <span className="tip-btn">10%</span>
          </label>

          <label>
            <input
              name="tip"
              type='radio'
              value="0.15"
              onClick={e => handleTipChange(e)}
            />
            <span className="tip-btn">15%</span>
          </label>

          <label>
            <input
              name="tip"
              type='radio'
              value="0.25"
              onClick={e => handleTipChange(e)}
            />
            <span className="tip-btn">25%</span>
          </label>

          <label>
            <input
              name="tip"
              type='radio'
              value="0.50"
              onClick={e => handleTipChange(e)}
            />
            <span className="tip-btn">50%</span>
          </label>

          {!isCustom ?
            (<label>
              <input name="tip" type="radio" value="" onClick={e => handleClickCustom()} />
              <span className="tip-custom">Custom</span>
            </label>) :
            (
            <div className='tip-custom-input-group'>
              <input type="text" name="tip" className="tip-custom-input" onChange={e => handleCustomTip(e)} autoFocus />
              <span className="percent">%</span>
            </div>
            )

          }
        </div>


      </section>
    </>
  )
}

export default Tip