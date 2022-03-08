import { useState } from 'react';
import './App.css';
import details from './details.json';
import imageOne from './images/bargraphof1and3.jpeg'
import imageTwo from './images/bargraphof1and4.jpeg'
import imageThree from './images/bargraphof1and5.jpeg'
import imageFour from './images/piechartofscore.jpeg'
import imageFive from './images/piechartofprescore.jpeg'
import imageSix from './images/piechartofgrade.jpeg'

function App() {
  const [flag1,setFlag1] = useState(false)
  const [flag2,setFlag2] = useState(false)
  const [flag3,setFlag3] = useState(false)
  const onSubmission = () => {
    var value1 = document.getElementById('dropdown1').value
    var value2 = document.getElementById('dropdown2').value
    console.log(value1,value2,typeof(value1))
    if (value1==='1') {
      if (value2 === '3') {
        setFlag1(true)
        setFlag2(false)
        setFlag3(false)
      }
      if (value2==='4') {
        setFlag1(false)
        setFlag2(true)
        setFlag3(false)
      }
      if (value2==='5') {
        setFlag1(false)
        setFlag2(false)
        setFlag3(true)
      }
    }
  }
  return (
    <div id='body'>
      <div className='container w-50'>
        <h1 className='display-2 text-center'>Table View</h1>
        <table className='table text-center m-3 border'>
          <thead className='bg-dark text-white border'>
              <tr className='border'>
                <th>id</th>
                <th>Students</th>
                <th>Score</th>
                <th>Previous Score</th>
                <th>Grade</th>                  
              </tr>
          </thead>
          <tbody>
              {
                details.map((Userobj) => <tr key={Userobj.id}>
                    <td>{Userobj.id}</td>
                    <td>{Userobj.Students}</td>
                    <td>{Userobj.Score}</td>
                    <td>{Userobj['Previous Score']}</td>
                    <td>{Userobj.Grade}</td>
                    </tr>)
              }
          </tbody>
        </table>
      </div>
      <p className='lead'>select option to analyse</p>
      <div className='container'>
        <div className='mt-2 mb-2'>
        <select id = "dropdown1" className='me-5 mb-5'>
          <option value="1">Students</option>
        </select>
        <select id = "dropdown2">
          <option value="3">Score</option>
          <option value="4">Previous Score</option>
          <option value="5">Grade</option>
        </select>
        </div>
        <div className='mb-4'>
        <button type='submit' onClick={onSubmission}>submit</button>
        </div>
      </div>
      {flag1 && <div className='d-flex justify-content-evenly mt-5 mb-5'>
        <img src={imageOne} alt='ProblemLoadingImage'></img>
        <img src={imageFour} alt='ProblemLoadingImage'></img>
        </div>}
      {flag2 && <div className='d-flex justify-content-evenly mt-5 mb-5'>
        <img src={imageTwo} alt='ProblemLoadingImage'></img>
        <img src={imageFive} alt='ProblemLoadingImage'></img>
        </div>}
      {flag3 && <div className='d-flex justify-content-evenly mt-5 mb-5'>
        <img src={imageThree} alt='ProblemLoadingImage'></img>
        <img src={imageSix} alt='ProblemLoadingImage'></img>
        </div>}
  </div>
  );
}

export default App;
