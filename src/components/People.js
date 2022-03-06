import { useState } from 'react'

const People = ({ people, setPeople }) => {

  const [peopleError, setPeopleError] = useState(false);

  const handlePeopleChange = (e) => {
    e.target.value == 0 ? setPeopleError(true) : setPeopleError(false);
    setPeople(e.target.value);
  }

  return (
    <>
      <section className={peopleError ? "people-section people-error" : "people-section"}>
        <div className="people-title">
          <h2 className="section-header">Number of People</h2>
          <span className="people-error-text">Can't be zero</span>
        </div>

        <div className='people-input-group'>
          <img src="./images/icon-person.svg" alt="people" />
          <input
            id="people"
            className="people-input"
            type="text"
            onChange={e => handlePeopleChange(e)}
            value={people}
          />

        </div>
      </section>
    </>
  )
}

export default People