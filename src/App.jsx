
import './App.css'


import StudentInfo from './components/Student';

function App() {
  return (
    <div>
      <h1>Student Information</h1>
      <StudentInfo name="Ihsan Ullah" age="18" className="12th"  image="https://lnk.ink/xmods"/>
      <StudentInfo name="Abid Ullah khan" age="17" className="11th" image="https://lnk.ink/xmods" />
      <StudentInfo name="Aziz Ullah khan" age="16" className="10th" image="https://lnk.ink/xmods"/>
    </div>
  );
}


export default App;
