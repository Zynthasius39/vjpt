import { useState } from "react";
import askLlama from './api.ts';

function Window(props: any) {
    const [opacity, setOpacity] = useState(1);
    const [display, setDisplay] = useState('block');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [disabled, setDisable] = useState(false);

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    const handleSubmit = async () => {
        if (input == '' || input.length < 10)
            return;
        setDisable(true);
        const outputMain = await askLlama(input);
        setOutput(outputMain);
        await delay(3000);
        setDisable(false);
    }

    return (
        <div className="modal fade in" id="submitModal" tabIndex={-1} role="dialog" aria-labelledby="submitModalLabel" style={{ display: display, opacity: opacity}}>
            <div className="modal-dialog modal-lg" role="document" style={{zIndex: '1999'}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={() => {
                                setOpacity(0)
                                setDisplay('none');
                            }}>×</span>
                        </button>
                        <h4 className="modal-title" id="submitModalLabel">Submit</h4>
                    </div>
                    <div className="modal-body">
                        <form id="submit-form" >
                            <div className="form-group">
                                <div className="row" id="prob-1" style={{ display: 'none' }}>
                                    <label className="col-md-2 col-form-label">Problem:</label>
                                    <div className="col-md-10" style={{ paddingTop: '8px' }}>
                                        <span className="problem-origin"></span>
                                    </div>
                                </div>
                                <div className="row" id="prob-2">
                                    <label className="col-md-2 col-form-label">Problem:</label>
                                    <div className="col-md-10" style={{ paddingTop: '8px' }}>
                                        <span id="contest-num">{props.problem}</span>
                                    </div>
                                </div>
                                <div className="row" id="contest-password-container" style={{ display: 'none' }}>
                                    <label className="col-md-2 col-form-label">Password:</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="contest-password" />
                                    </div>
                                </div>

                                <div className="row" id="open-row">
                                    <label htmlFor="submit-open" className="col-md-2 col-form-label">Open:</label>
                                    <div className="col-md-10">
                                        <div className="btn-group" data-toggle="buttons" id="submit-open">
                                            <label className="btn btn-secondary active">
                                                <input type="radio" name="open" id="open1" value="1" />Yes
                                            </label>
                                            <label className="btn btn-secondary">
                                                <input type="radio" name="open" id="open0" value="0" />No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" id="submitter-type-row">
                                    <label htmlFor="submitter-type" className="col-md-2 col-form-label">Submit by:</label>
                                    <div className="col-md-10">
                                        <div className="btn-group" data-toggle="buttons" id="submitter-type">
                                            <label className="btn btn-secondary active">
                                                <input type="radio" name="submitterType" id="submitter-type0" value="0" />Bot
                                            </label>
                                            <label className="btn btn-secondary">
                                                <input type="radio" name="submitterType" id="submitter-type1" value="1" />My Account
                                            </label>
                                            <label className="btn btn-secondary" style={{ display: 'none' }}>
                                                <input type="radio" name="submitterType" id="submitter-type2" value="2" />Archive
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" id="my-account-row" style={{ display: 'none' }}>
                                    <label className="col-md-2 col-form-label">Account:</label>
                                    <div className="col-md-10" style={{ paddingTop: '8px' }}>
                                        <span className="my-account-status"></span>
                                        <span className="my-account" style={{ marginRight: '20px' }}>(Not set)</span>
                                        <a href="javascript:void(0)" className="update-my-account" style={{}}>Update</a>
                                        <a href="javascript:void(0)" className="remove-my-account" style={{ display: 'none', marginLeft: '20px' }}>Remove</a>
                                    </div>
                                </div>

                                <div className="row" id="my-account-tip-row" style={{ display: 'none' }}>
                                    <label className="col-md-2 col-form-label"></label>
                                    <div className="col-md-10">
                                        <div className="alert alert-info" id="my-account-tip"><i className="fa fa-info-circle"></i> Please submit at
                                            <a href="/problem/EOlymp-1/origin" target="_blank">EOlymp-1 <i className="fa fa-external-link"></i></a> manually,
                                            then click the <b>Submit</b> button below.<br />
                                            <i className="fa fa-info-circle"></i> Submissions from your own account will be fetched.<br />
                                            <i className="fa fa-info-circle"></i> <a href="https://vjudge.net/article/2790" target="_blank">More tips</a>.</div>
                                    </div>
                                </div>

                                <div className="row" id="language-row">
                                    <label htmlFor="submit-language" className="col-md-2 col-form-label">Language:</label>
                                    <div className="col-md-10">
                                        <select className="form-control custom-select" name="language" id="submit-language"><option value="">Select Language</option><option value="asm:mars4.5">Assembly (Mars 4.5)</option><option value="bf:1.3">BF 1.3</option><option value="c:17-gnu10">C 17 (gnu 10.2)</option><option value="csharp:5-dotnet">C# (Microsoft .NET 5)</option><option value="csharp:5-mono">C# (Mono 5.20)</option><option value="cpp:17-gnu10-extra">C++ 17 (gnu 10.2 with gmp)</option><option value="cpp:17-gnu10">C++ 17 (gnu 10.2)</option><option value="cpp:20-gnu10-extra">C++ 20 (gnu 10.2 with gmp)</option><option value="cpp:20-gnu10">C++ 20 (gnu 10.2)</option><option value="d:1-dmd">D (dmd 2.096)</option><option value="d:1-gdc">D (gdc 10.2)</option><option value="dart:2.13">Dart 2.13</option><option value="go:1.18">Go 1.18</option><option value="go:1.20">Go 1.20</option><option value="haskell:8.8-ghc">Haskell (ghc 8.8)</option><option value="java:1.17">Java (openjdk 1.17)</option><option value="java:1.21">Java (openjdk 1.21)</option><option value="js:18">JavaScript (node 18)</option><option value="kotlin:1.7">Kotlin 1.7</option><option value="kotlin:1.9">Kotlin 1.9</option><option value="lua:5.1">Lua 5.1</option><option value="mysql:8">MySQL 8.0</option><option value="pascal:3.2">Pascal (fpc 3.2)</option><option value="perl:5.32">Perl 5.32</option><option value="php:7.4">PHP 7.4</option><option value="plain:1">Plain Text</option><option value="python:3.10-pypy-extra">Python 3.10 (PyPy with extra libs)</option><option value="python:3.10-pypy">Python 3.10 (PyPy)</option><option value="python:3.11-python">Python 3.11</option><option value="python:3.11-ai">Python 3.11 (AI)</option><option value="python:3.11-python-extra">Python 3.11 (with extra libs)</option><option value="ruby:2.4">Ruby 2.4</option><option value="rust:1.46">Rust 1.46</option><option value="swift:5.6">Swift 5.6</option></select>
                                    </div>
                                </div>

                                <div className="row" id="solution-row">
                                    <label htmlFor="submit-solution" className="col-md-2 col-form-label">Solution:</label>
                                    <div className="col-md-10">
                                        <textarea className="form-control" name="source" id="submit-solution" rows={15} value={input} onChange={(e) => setInput(e.target.value)} placeholder="At least 20 characters" style={{height: "150px"}}></textarea>
                                        <textarea className="form-control" name="source" id="llama-output" rows={15} value={output} onChange={(e) => setOutput(e.target.value)}></textarea>
                                    </div>
                                </div>

                                <div className="row" id="captcha-row" style={{ display: 'none' }}>
                                    <label className="col-md-2 col-form-label">Captcha:</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" name="captcha" />
                                        <img src="" id="submit-captcha-img" />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className="alert alert-danger" role="alert" id="submit-alert" style={{ display: 'none' }}></div>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{marginRight: '5px'}}>Cancel</button>
                        <button type="submit" className="btn btn-primary" id="btn-submit" onClick={() => handleSubmit()} disabled={disabled}>Submit</button>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade in"></div>
        </div>
    )
}

export default Window