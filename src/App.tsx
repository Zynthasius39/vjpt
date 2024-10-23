import { useState, useEffect } from 'react';
import { askMe } from './api';
import Submit from './Submit'
import Window from './Window';
import favicon from '/favicon.ico'
import './1889211c7d16f2d865c3.css'

function App() {
  const username = "Profile";
  const [contest, setContest] = useState("QUIZ2");
  const [problem, setProblem] = useState("Z - A Problem");

  useEffect(() => {
    const data = async () => {
      const {contest, problem} = await askMe();
      setContest(contest);
      setProblem(problem);
    }
    data();
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-inverse prod" id="top-nav">
        <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#navbarResponsive"></button>
        <div className="collapse navbar-toggleable-sm" id="navbarResponsive">
          <a className="navbar-brand" href="/">
            <img src={favicon} height="30" style={{paddingRight: '5.8px'}} />
            Home
          </a>
          <ul className="nav navbar-nav">
            <li className="nav-item" id="nav-problem">
              <a className="nav-link" href="/problem">Problem</a>
            </li>
            <li className="nav-item" id="nav-status">
              <a className="nav-link" href="/status">Status</a>
            </li>
            <li className="nav-item" id="nav-contest">
              <a className="nav-link" href="/contest" style={{color: 'white'}}>Contest</a>
            </li>
            <li className="nav-item" id="nav-workbook">
              <a className="nav-link" href="/workbook">Workbook</a>
            </li>
            <li className="nav-item" id="nav-user">
              <a className="nav-link" href="/user">User</a>
            </li>
            <li className="nav-item" id="nav-group">
              <a className="nav-link" href="/group">Group</a>
            </li>
            <li className="nav-item" id="nav-comment">
              <a className="nav-link" href="/comment">Forum</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="helpDropdown" data-toggle="dropdown">Help</a>
              <div className="dropdown-menu dropdown-menu-left">
                <a className="dropdown-item" href="/article/2771">
                  <i className="fa fa-question-circle-o"></i> Frequently Asked Questions
                </a>
                <a className="dropdown-item" href="/article/97">
                  <i className="fa fa-bug"></i> Bugs Feedback
                </a>
                <a className="dropdown-item" href="/article/96">
                  <i className="fa fa-lightbulb-o"></i> Suggestions
                </a>
                <a className="dropdown-item" href="javascript:void(0)" id="contact-us">
                  <i className="fa fa-headphones"></i> Contact Us
                </a>
              </div>
            </li>
            <li className="nav-item float-xs-right">
              <a className="nav-link logout" href="javascript:void(0)">Logout</a>
            </li>
            <li className="nav-item dropdown float-xs-right">
              <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="userNameDropdown" data-toggle="dropdown">{username}</a>
              <div className="dropdown-menu dropdown-menu-right user-dropdown">
                <a className="dropdown-item" href="/user/beu_zynt">Profile</a>
                <a className="dropdown-item update-profile" href="javascript:void(0)">Update</a>
                <a className="dropdown-item message" href="/message">Message</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Submit contest={contest} problem={problem} />
      <Window problem={problem}/>
      <div id="fb-root"></div>
      <div className="body-footer">
        <div style={{ marginBottom: "8px" }}></div>
        <div id="footer-info">
          All Copyright Reserved © 2010-2024 <a href="mailto:is.un@qq.com">Xu Han</a><br />
          Server Time: <span className="currentTimeTZ">2024-10-22 23:56:54 UTC+4</span>
        </div>
      </div >
    </>
  )
}

export default App