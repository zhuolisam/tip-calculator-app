import { useState } from 'react'
import Bill from './Bill'
import Tip from './Tip'
import People from './People'
import Result from './Result'

const Main = () => {

    const [bill, setBill] = useState('');
    const [tip, setTip] = useState(null);
    const [people, setPeople] = useState('');

    return (
        <main className="main">
            <Bill bill={bill} setBill={setBill} />
            <Tip setTip={setTip} />
            <People people={people} setPeople={setPeople} />
            <Result
                bill={bill}
                setBill={setBill}
                tip={tip}
                setTip={setTip}
                people={people}
                setPeople={setPeople} />
        </main>
    )
}

export default Main