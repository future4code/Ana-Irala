import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useTask from './components/UseTask';
import useForm from './components/UseForm';



const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`
const Header = styled.header`
  padding-bottom: 20px;
  padding-top:20px;
  border-bottom-style:solid;
  align-items: center;
  text-align:center;
  width:100%;
`


function App () {
  const [tasks,requestTasks] = useTask();
  const [form,onChangeInput] = useForm(
    {
      text:"",
      day:"",
    }
  );

 
  const onSubmitCreateTask = (event) => {
    event.preventDefault();
    const body = {
	    text:form.text,
	    day:form.day,
    };
  
      
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-ana-irala', body)
    .then(() => {console.log("task criada");})
    .catch((error) => {console.log("erro")});

    requestTasks();
      
  };

 
  const monday = [], 
    tuesday = [],
    wednesday = [],
    thursday = [],
    friday = [],
    saturday = [],
    sunday = [];

  
  tasks.forEach((task) => {
          switch (task.day) {
            case "1":
              monday.push(task);
              break;
            case "2":
              tuesday.push(task);
              break;
            case "3":
              wednesday.push(task);
              break;
            case "4":
              thursday.push(task);
              break;
            case "5":
              friday.push(task);
              break;
            case "6":
              saturday.push(task);
              break;
            case "7":
              sunday.push(task);
              break;
            default:
              break;
          }
        });
  

 const renderization = (array) =>
  array.map((tasks) => (
    <li>{tasks.text}</li>
  ));

  const renderMonday = renderization(monday);
  const renderTuesday = renderization(tuesday);
  const renderWednesday = renderization(wednesday);
  const renderThursday = renderization(thursday);
  const renderFriday = renderization(friday);
  const renderSaturday = renderization(saturday);
  const renderSunday = renderization(sunday);


  return (
    <Main>
      <Header>
        <form >
          <input 
            required
            name="text"
            value={form['text']}
            onChange={onChangeInput}
            placeholder="Nova tarefa">
          </input>
          <select
           data-testid="select"
           required
           name="day"
           onChange={onChangeInput}
           value={form['day']}>
             <option value="1">SEGUNDA</option>
             <option value="2">TERÇA</option>
             <option value="3">QUARTA</option>
             <option value="4">QUINTA</option>
             <option value="5">SEXTA</option>
             <option value="6">SÁBADO</option>
             <option value="7">DOMINGO</option>
           </select>
          <button onClick={onSubmitCreateTask}>Criar</button>
        </form>
      </Header>
      <div>
        <div>
          <h5>SEGUNDA</h5>
          <ul>
            {renderMonday}
          </ul>
        </div>
        <hr/>
        <div>
          <h5>TERÇA</h5>
          <ul>{renderTuesday}</ul>
        </div>
        <hr/>
        <div>
          <h5>QUARTA</h5>
          <ul>{renderWednesday}</ul>
        </div>
        <hr/>
        <div>
          <h5>QUINTA</h5>
          <ul>{renderThursday}</ul>
        </div>
        <hr/>
        <div>
          <h5>SEXTA</h5>
          <ul>{renderFriday}</ul>
        </div>
        <hr/>
        <div>
          <h5>SÁBADO</h5>
          <ul>{renderSaturday}</ul>
        </div>
        <hr/>
        <div>
          <h5>DOMINGO</h5>
          <ul>{renderSunday}</ul>
        </div>
      </div>
    </Main>
  )
}
export default App;
