import React, {useState, useCallback, useEffect} from 'react';
import Header from './components/Header';
import MsgForm from './components/MsgForm';
import Msg from './components/Msg';
import moment from 'moment'

function App() {
  const API_URL = "https://localhost:5000/"

  // tweet object 
  const [msg ,setMsg] = useState({
    msgUser: "Adil",
    content: "Hello mafaka 😎",
    time: new Date(),
    id: (new Date()).getTime()
  });

  // all tweets
  const [allMsgs, setAllMsgs] = useState([
    {
      msgUser: 'Siri',
      content: 'Today I did nothing :)',
      time: (new Date()),
      id: 1
    },
    {
      msgUser: 'Adil',
      content: 'prosnis, ty obosralsya',
      time: new Date("06/10/1996"),
      id: 2
    }
  ]);

  const msgUserHandler = (event) => {
    setMsg({...msg, 
      msgUser: event.target.value})
  }
  
  const msgHandler = (event) => {
    setMsg({...msg,
      content: event.target.value})
  }

  const msgSubmitted = useCallback((event) => {
    event.preventDefault();
    setAllMsgs(allMsgs =>[...allMsgs, msg]);
    setMsg({
      msgUser: "",
      content: ""
    })
  }, [msg]);

  useEffect(() => {
    const adilsBD = new Date("06/10/1996");
    console.log(moment(adilsBD).startOf('second').fromNow());
  });

  // TODO fix
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  const printing = ([...allMsgs].reverse()).map((msg) => 
    <Msg 
      key={msg.id} 
      name={msg.msgUser} 
      content={msg.content} 
      postedDate={msg.time}
    ></Msg>
  );

  
  return (
    <div>
      <Header></Header>
      <MsgForm 
        msg={msg} 
        msgUserHandler={msgUserHandler} 
        msgHandler={msgHandler} 
        msgSubmitted={msgSubmitted}></MsgForm>
        <div id="message">
          {printing}
        </div>
    </div>
  );
}

export default App;
