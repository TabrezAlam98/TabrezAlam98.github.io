import React from 'react'
import './Calendra.css'
import GitHubCalendar from 'react-github-calendar';

const Calendra = () => {
  return (<>
  <h3>Github Calendar</h3>
  <div className='underline' ></div>
    <div className="calendra">
        <GitHubCalendar username="TabrezAlam98" />
    </div>
  </>)
}

export default Calendra