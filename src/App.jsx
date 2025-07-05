
import './App.css'


import StudentInfo from './components/Student';

function App() {
  return (

    <div>
    <h1>Student Information</h1>
   
    <div 
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }}
    >
      
      <StudentInfo name="Ihsan Ullah" age="18" className="12th"  image="https://lnk.ink/xmods"/>
      <StudentInfo name="Abid Ullah khan" age="17" className="11th" image="https://lnk.ink/xmods" />
      <StudentInfo name="Aziz Ullah khan" age="16" className="10th" image="https://lnk.ink/xmods"/>
      <StudentInfo name="asmat ullah khan" age="14" calssName="9th" image="https://lnk.ink/xmods" />
     
    </div>
     </div>
  );
}


export default App;
