import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Enigma = props => {

    const sendMessage = () => {
        let url = 'https://enigmamachinerestapi.azurewebsites.net/api/Enigma/Encrypt?leaveWhiteSpace=true'
        let urlLocalhost = 'http://localhost:61467/api/Enigma/Encrypt?leaveWhiteSpace=true'

        axios.post(url,
            {
                "MachineName": "Mein Enigma",
                "Text": "This is a test of the enigma machine encoding!",
                "Rotor1": {
                    "RotorNum": 4,
                    "Setting": "a"
                },
                "Rotor2": {
                    "RotorNum": 5,
                    "Setting": "b"
                },
                "Rotor3": {
                    "RotorNum": 1,
                    "Setting": "c"
                },
                "Plugboard": {
                    "Wiring": {
                    "a":"b",
                    "z":"w",
                    "r":"c",
                    "d":"e",
                    "f":"g",
                    "h":"i",
                    "j":"k",
                    "m":"n",
                    "o":"p",
                    "q":"s"
                    }
                }
            }
            ,{
                mode: 'no-cors',
                headers:{'Access-Control-Allow-Origin': '*'}
            }
        )
        .then( (res) => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        })
    }

    const sendMessage2 = () => {
        let url = 'https://enigmamachinerestapi.azurewebsites.net/api/Enigma/Encrypt?leaveWhiteSpace=true'
        let urlLocalhost = 'http://localhost:61467/api/Enigma/Encrypt?leaveWhiteSpace=true'

        fetch(url,
            {
                method: 'POST',
                body: {
                    "MachineName": "Mein Enigma",
                    "Text": "This is a test of the enigma machine encoding!",
                    "Rotor1": {
                        "RotorNum": 4,
                        "Setting": "a"
                    },
                    "Rotor2": {
                        "RotorNum": 5,
                        "Setting": "b"
                    },
                    "Rotor3": {
                        "RotorNum": 1,
                        "Setting": "c"
                    },
                    "Plugboard": {
                        "Wiring": {
                        "a":"b",
                        "z":"w",
                        "r":"c",
                        "d":"e",
                        "f":"g",
                        "h":"i",
                        "j":"k",
                        "m":"n",
                        "o":"p",
                        "q":"s"
                        }
                    }
                },
                mode: 'no-cors',
                headers:{'Access-Control-Allow-Origin': '*',
                          'Content-Type': 'application/json'}
            }
        )
        .then( (res) => {
            //console.log(res)
            return res.json()
        })
        .then( res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        })
    }


    return (
        <div>
            <h2>Enigma</h2>

            <button onClick={sendMessage}>send</button>
            
        </div>
    )
}
export default Enigma