import { useState, useEffect } from 'react'
import './Submit.css'
import people from '/people.png'

const formatTime = (timeInSeconds: number) => {
  const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeInSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

function Submit(props: any) {
  const [time, setTime] = useState(0);

  const status =
    <div className="row"><div className="col-xs-3 text-xs-left" id="info-elapsed"><b style={{ paddingRight: '5.2px' }}>Elapsed:</b><span className="elapsed" id="span-elapsed" >{formatTime(time)}</span></div><div className="col-xs-6 text-xs-center"><span id="info-running" style={{ color: 'red', cursor: 'auto' }}>Running</span></div><div className="col-xs-3 text-xs-right" id="info-remaining"><b>Remaining:</b><span className="remaining" id="span-remaining">01:20:00</span></div></div>;

  useEffect(() => {
    setInterval(() => {
      setTime(prevSeconds => prevSeconds + 1);
    }, 1000);
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: '30px' }}>
        <div className="row alert alert-info" id="contest-announcement" style={{}}><p>E.S.</p>
        </div>
        <div className="row card" id="time-info">
          <div className="row">
            <div className="col-xs-3 text-xs-left">
              <b style={{ paddingRight: '5px' }}>Begin:</b>
              <span className="timestamp">2024-10-16 12:47 UTC+4</span>
            </div>
            <div className="col-xs-6 text-xs-center">

              <h3>
                <img src={people} height={30} style={{ paddingRight: '5px' }} />
                {props.contest}
              </h3>
            </div>
            <div className="col-xs-3 text-xs-right">
              <b style={{ paddingRight: '5px' }}>End:</b>
              <span className="timestamp">2024-10-20 16:47 UTC+4</span>
            </div>
          </div>
          <div className="row" id="contest-time-slider-container">
            <div className="slider slider-horizontal" id="contest-time-slider">
              <div className="slider-track">
                <div className="slider-track-low" style={{ left: '0px', width: '0%' }}>
                </div>
                <div className="slider-selection" style={{ left: '0%', width: '36.3581%' }}>
                </div>
                <div className="slider-track-high" style={{ right: '0px', width: '63.6419%' }}>
                </div>
                <div className="slider-rangeHighlight slider-selection " style={{ left: '0%', width: '100%' }}>
                </div>
              </div>
              <div className="tooltip tooltip-main bs-tooltip-top" role="presentation" style={{ left: '36.3581%' }}>
                <div className="arrow">
                </div>
                <div className="tooltip-inner">1:12:21:29</div>
              </div>
              <div className="tooltip tooltip-min bs-tooltip-top" role="presentation" style={{ display: 'none' }}>
                <div className="arrow">
                </div>
                <div className="tooltip-inner">
                </div>
              </div>
              <div className="tooltip tooltip-max bs-tooltip-top" role="presentation" style={{ display: 'none' }}>
                <div className="arrow">
                </div>
                <div className="tooltip-inner"></div>
              </div>
              <div className="slider-handle min-slider-handle round" role="slider" >
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3 text-xs-left" id="info-elapsed"></div>
              <div className="col-xs-3 text-xs-right" id="info-remaining"></div>
            </div>
          </div>
          {status}
        </div>
        <div className="row">


          <div className="row">
            <ul className="nav nav-tabs" role="tablist" id="contest-tabs">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#overview" role="tab" aria-expanded="false">Overview</a>
              </li>


              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#problem" role="tab" aria-expanded="true">Problem</a>
              </li>



              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#status" role="tab">Status</a>
              </li>



              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#rank" role="tab">Rank (1:12:21:29)</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#discuss" role="tab" rel="#discuss" data-disqus-identifier="contest/664120">Discuss</a>
              </li>

              <li className="text-xs-right">
                <div className="btn-group" role="group">

                  <button type="button" className="btn btn-secondary" id="btn-setting">Setting</button>



                </div>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane" id="overview" role="tabpanel" aria-expanded="false">



















                <div id="contest_overview" className="container">


                  <div className="row">
                    <table id="contest-problems" className="table table-striped table-bordered table-responsive" cellSpacing={0} width="100%">
                      <thead>
                        <tr>
                          <th className="my-stat"></th>
                          <th className="all-stat">Stat</th>
                          <th className="prob-num">#</th>


                          <th className="prob-origin">Origin</th>

                          <th className="prob-title text-xl-left">Title</th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td className="my-stat"><span className="tag tag-success">Solved</span></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 95.2381%, rgba(255, 221, 221, 0.6) 95.2381%, rgba(255, 221, 221, 0.6) 100%, rgba(0, 0, 0, 0) 100%)' }}><a href="#status//A/1/">20</a> / <a href="#status//A/0/">40</a></td>
                          <td className="prob-num text-xs-center">A</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-1" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 1">
                              EOlymp 1
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/A">
                              Simple problem
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"><span className="tag tag-success">Solved</span></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 33.3333%, rgba(255, 221, 221, 0.6) 33.3333%, rgba(255, 221, 221, 0.6) 61.9048%, rgba(0, 0, 0, 0) 61.9048%)' }}><a href="#status//B/1/">7</a> / <a href="#status//B/0/">36</a></td>
                          <td className="prob-num text-xs-center">B</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-63" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 63">
                              EOlymp 63
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/B">
                              Anfisa and the flowers
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 52.381%, rgba(255, 221, 221, 0.6) 52.381%, rgba(255, 221, 221, 0.6) 61.9048%, rgba(0, 0, 0, 0) 61.9048%)' }}><a href="#status//C/1/">11</a> / <a href="#status//C/0/">41</a></td>
                          <td className="prob-num text-xs-center">C</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-112" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 112">
                              EOlymp 112
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/C">
                              Cake
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 33.3333%, rgba(255, 221, 221, 0.6) 33.3333%, rgba(255, 221, 221, 0.6) 38.0952%, rgba(0, 0, 0, 0) 38.0952%)' }}><a href="#status//D/1/">7</a> / <a href="#status//D/0/">15</a></td>
                          <td className="prob-num text-xs-center">D</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-219" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 219">
                              EOlymp 219
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/D">
                              Central heating
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 33.3333%, rgba(255, 221, 221, 0.6) 33.3333%, rgba(255, 221, 221, 0.6) 38.0952%, rgba(0, 0, 0, 0) 38.0952%)' }}><a href="#status//E/1/">7</a> / <a href="#status//E/0/">10</a></td>
                          <td className="prob-num text-xs-center">E</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-248" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 248">
                              EOlymp 248
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/E">
                              Young gardener
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(0, 0, 0, 0) 0%)' }}></td>
                          <td className="prob-num text-xs-center">F</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-8618" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 8618">
                              EOlymp 8618
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/F">
                              Four-digit palindrom
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(0, 0, 0, 0) 0%)' }}></td>
                          <td className="prob-num text-xs-center">G</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-622" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 622">
                              EOlymp 622
                            </a>
                          </td>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(0, 0, 0, 0) 0%)' }}></td>
                          <td className="prob-num text-xs-center">H</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-251" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 251">
                              EOlymp 251
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/H">
                              Symmetry 2
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(0, 0, 0, 0) 0%)' }}></td>
                          <td className="prob-num text-xs-center">I</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-906" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 906">
                              EOlymp 906
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/I">
                              Product of digits
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(0, 0, 0, 0) 0%)' }}></td>
                          <td className="prob-num text-xs-center">J</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-8800" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 8800">
                              EOlymp 8800
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/J">
                              Hello, Python!
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(0, 0, 0, 0) 0%)' }}></td>
                          <td className="prob-num text-xs-center">K</td>


                          <td className="prob-origin text-xs-center">
                            <a href="/problem/EOlymp-8801" target="_blank" title="" data-toggle="tooltip" data-original-title="EOlymp 8801">
                              EOlymp 8801
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/K">
                              Next number
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="my-stat"></td>
                          <td className="all-stat" style={{ background: 'linear-gradient(to right, rgba(169, 245, 175, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(255, 221, 221, 0.6) 0%, rgba(0, 0, 0, 0) 0%)' }}></td>
                          <td className="prob-num text-xs-center">L</td>
                          <td className="prob-origin text-xs-center">
                            <a href="/problem/CSES-1068" target="_blank" title="" data-toggle="tooltip" data-original-title="CSES 1068">
                              CSES 1068
                            </a>
                          </td>

                          <td className="prob-title">
                            <a href="#problem/L">
                              Weird Algorithm
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row text-xs-right" id="contest-manager"><span style={{ color: 'red' }}>Private</span>. Prepared by <a href="/user/evsaid" target="_blank">evsaid</a> @ <a href="/group/it-oop" target="_blank"><img src="/static/bundle/bf2b66129c2d2acc0cc3.png" height="15" />BEU-2024-IT3-OOP</a>, 2024-10-16 12:36:27</div>
                  <div className="row card" id="contest-description" style={{}}><p>E.S.</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane active" id="problem" role="tabpanel" aria-expanded="true">
                <div id="contest_problem" className="container">
                  <div className="row">
                    <div className="col-md-3 container" id="prob-left-panel">
                      <ul className="nav nav-pills row" id="problem-nav">

                        <li className="nav-item">
                          <a className="nav-link active" href="#problem/A">A</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/B">B</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/C">C</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/D">D</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/E">E</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/F">F</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/G">G</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/H">H</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/I">I</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/J">J</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/K">K</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#problem/L">L</a>
                        </li>
                      </ul>
                      <div className="alert alert-danger row" role="alert" id="prob-alert" style={{ display: 'none' }}></div>
                      <div id="prob-operation" className="row">
                        <div className="container">
                          <div className="row">
                            <div className="col-xs-12">
                              <button type="button" className="btn btn-primary" id="problem-submit"><i className="fa fa-upload"></i> Submit</button>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-6">
                              <a href="#status//A/0/" className="btn btn-secondary" id="btn-contest-status">Status</a>
                            </div>
                            <div className="col-xs-6">
                              <a className="btn btn-secondary" id="btn-contest-my-status">My Status</a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-12">
                              <a className="btn btn-secondary" id="btn-contest-problem-pdf" target="_blank">
                                <i className="fa fa-file-pdf-o"></i> PDF
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-12">
                              <button type="button" className="btn btn-secondary" id="btn-problem-rejudge" style={{ display: 'none' }}>
                                Rejudge
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="prob-properties" className="row">
                        <div className="container">
                          <dl className="card row"><dt className="col-sm-4">Mem limit</dt><dd className="col-sm-8">131072 kB</dd><dt className="col-sm-4">Tags</dt><dd className="col-sm-8">For Beginners</dd><dt className="col-sm-4">Difficulty</dt><dd className="col-sm-8">1</dd><dt className="col-sm-4">Spoilers</dt><dd className="col-sm-8"><a className="toggle-problem-spoiler" href="javascript:void(0)">Hide</a></dd></dl>
                        </div>
                      </div>
                      <div className="row">
                        <div id="update-statements-tips" className="alert alert-info" style={{ width: '100%', display: 'none', fontSize: '15px', marginBottom: '0' }}>Select statements for participants:</div>
                      </div>
                      <div id="prob-descriptions" className="row" style={{ display: 'none' }}>
                        <div className="list-group" id="prob-descs"><li className="list-group-item active" data-key="2880288957065697" data-version="1729166220000" data-author="0">
                          <span style={{ margin: '5px' }}></span>
                          <a href="javascript:void(0)" data-toggle="tooltip" target="_self" title="" data-original-title="Initialization."><b>System Crawler</b></a>
                          <small style={{ color: 'grey', paddingLeft: '10px' }}>2024-10-17</small>
                        </li></div>
                      </div>
                      <div className="row hidden-md-down" style={{ marginTop: '20px' }}>
                      </div>
                    </div>
                    <div className="col-md-9 container" id="prob-right-panel">
                      <div className="row">
                        <div id="prob-title-contest">
                          <h2 id="problem-title"><a href="/problem/EOlymp-1" target="_blank">{props.problem}</a></h2>
                          <span className="origin">
                            <a id="problem-origin" href="/problem/EOlymp-1/origin" target="_blank">EOlymp - 1 <i className="fa fa-external-link"></i></a>
                          </span>
                        </div>
                      </div>
                      <div className="row" id="frame-description-container">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="status" role="tabpanel">
                <div id="contest_status" className="container">
                  <div className="row" id="right-panel">
                    <input type="button" className="btn btn-secondary btn-md" id="refresh-all" value="Refresh" />
                    <input type="button" className="btn btn-secondary btn-md" id="reset" value="Reset" />
                    <input type="button" className="btn btn-secondary btn-md" id="filter" value="Filter" />
                    <table id="listStatus" className="table table-striped table-bordered table-responsive" cellSpacing='0' width="100%">
                      <thead>
                        <tr>
                          <th className="run-id hidden-lg-down">Run ID</th>
                          <th className="username">
                            Username<br />
                            <input type="text" id="un" name="un" className="search_text" style={{ width: '100%' }} />
                          </th>
                          <th className="num">
                            Prob<br />
                            <select id="contest-status-num" name="num" className="custom-select">
                              <option value="-">All</option>
                            </select>
                          </th>
                          <th className="status">
                            Result
                            <br />
                            <select id="res" name="res" className="custom-select">
                              <option value="0">All</option>
                              <option value="1">Accepted</option>
                              <option value="2">Presentation Error</option>
                              <option value="3">Wrong Answer</option>
                              <option value="4">Time Limit Exceed</option>
                              <option value="5">Memory Limit Exceed</option>
                              <option value="6">Output Limit Exceed</option>
                              <option value="7">Runtime Error</option>
                              <option value="8">Compile Error</option>
                              <option value="9">Remote OJ Unavailable</option>
                              <option value="10">Judge Failed</option>
                              <option value="11">Unknown Error</option>
                              <option value="12">Submit Failed</option>
                              <option value="13">Queuing &amp;&amp; Judging</option>
                            </select>
                          </th>
                          <th className="runtime">Time<br />(ms)</th>
                          <th className="memory">Mem<br />(MB)</th>
                          <th className="length hidden-lg-down">Length</th>
                          <th className="language">
                            Lang
                            <br />
                            <select name="language" id="language" className="custom-select">
                              <option value="">All</option>

                              <option value="C">C</option>

                              <option value="CPP">C++</option>

                              <option value="CSHARP">C#</option>

                              <option value="D">D</option>

                              <option value="GO">Go</option>

                              <option value="HASKELL">Haskell</option>

                              <option value="JAVA">Java</option>

                              <option value="JAVASCRIPT">JavaScript</option>

                              <option value="KOTLIN">Kotlin</option>

                              <option value="LUA">Lua</option>

                              <option value="OBJECTIVE_C">Objective-C</option>

                              <option value="PASCAL">Pascal</option>

                              <option value="PERL">Perl</option>

                              <option value="PHP">PHP</option>

                              <option value="PYTHON">Python</option>

                              <option value="RUBY">Ruby</option>

                              <option value="RUST">Rust</option>

                              <option value="SCALA">Scala</option>

                              <option value="SWIFT">Swift</option>

                              <option value="OTHER">Other</option>

                            </select>
                          </th>
                          <th className="date">Submit Time</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="rank" role="tabpanel">
                <div id="contest_rank">
                  <table id="contest-rank-table" cellSpacing="1"></table>
                  <table id="contest-rank-table-export"></table>

                  <div className="rank_tool">
                    <i className="fa fa-street-view fa-3x" id="img_find_me" title="Find me"></i>
                    <i className="fa fa-line-chart fa-3x" id="img_time_chart" title="Time chart"></i>
                  </div>
                  <div className="modal" id="teamInfoModal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">
                            <span>×</span>
                          </button>
                          <h4 className="modal-title"></h4>
                        </div>
                        <div className="modal-body">
                          <table className="table table-striped table-bordered contest-info"></table>
                          <div id="rank-time-chart"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="tab-pane" id="discuss" role="tabpanel">
                <div id="contest_discuss"><div className="comment-posts-container">
                  <div className="comment-edit" style={{ display: 'none' }}>
                    <textarea className="form-control edit" name="content" rows={6} placeholder="Comment in Markdown"></textarea>
                    <div className="comment-error alert-danger" style={{ display: 'none', padding: '20px' }}></div>
                    <div className="preview">
                      <span>Preview:</span><br />
                      <div className="preview-content"></div>
                      <div className="buttons">
                        <button className="btn btn-primary save" style={{ display: 'none' }}>Save</button>
                        <button className="btn btn-primary post broadcast">Post &amp; Broadcast</button>
                        <button className="btn btn-secondary post">Post</button>
                        <button className="btn btn-secondary cancel">Clear</button>
                      </div>
                      <div style={{ clear: 'both' }}></div>
                    </div>
                  </div>

                  <div className="show-comment-edit">Leave a comment</div>
                  <div className="comments-loader">
                    <i className="fa fa-2x fa-refresh fa-spin"></i> Loading comments...
                  </div>
                  <div className="show-spam" style={{ display: "none" }}>Show Spam</div>

                  <li className="comment-post-templ comment-post" style={{ display: 'none' }}>
                    <table style={{ width: '100%', tableLayout: 'fixed' }}>
                      <tbody><tr>
                        <td style={{ width: '60px', padding: '10px' }}>
                          <a target="_blank" className="author-avatar">
                          </a>
                        </td>
                        <td>
                          <span className="author"></span>
                          <span> • </span>
                          <span className="time"></span>
                          <span className="operation">
                            <a href="javascript:void(0)" className="reply">Reply</a>
                            <span style={{ display: "none" }}> • <a href="javascript:void(0)" className="edit">Edit</a></span>
                            <span style={{ display: "none" }}> • <a href="javascript:void(0)" className="delete">Delete</a></span>
                            <span style={{ display: "none" }}> • <a href="javascript:void(0)" className="toggle-spam">Spam</a></span>
                          </span>
                          <div className="content"></div>
                        </td>
                      </tr>
                      </tbody></table>
                    <ul className="replies"></ul>
                  </li>
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Submit