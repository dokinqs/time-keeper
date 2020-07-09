import React, { useState, useEffect } from 'react'
import firebase from '../firebase';

function useTimes() {
    const [times, setTimes] = useState([]);

    // const db = firebase.firestore();

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('times')
            .onSnapshot((snapshot) => {
                // debugger; console.log(snapshot.docs[0].data());
                const newTimes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTimes(newTimes);
        });

        // // delete all documents in collection (whole collection)
        // db.collection("times").get()
        //     .then((querySnapshot) => {
        //         querySnapshot.forEach((doc) => {
        //             console.log(`${doc.id} => ${doc.data()}`);
        //             doc.ref.delete();
        //         })
        //     });

        return () => unsubscribe();
    }, []);
    return times;
}

const TimesList = () => {
    const times = useTimes();

    return (
        <div className="timesListContainer">
            <div className="sortDiv">
                <label className="sortLabel">Sort By:</label>{' '}
                <select>
                    <option>Fastest Time</option>
                    <option>Slowest Time</option>
                    <option disabled>---</option>
                    <option>Name ASC</option>
                    <option>Name DESC</option>
                </select>
            </div>
            <ol>
                {times.map((time) => 
                    <li key={time.id}>
                        <div className="time-entry">
                            {time.title}
                            <code className="time">{time.time_sec}</code>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TimesList;
