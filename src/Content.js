import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
const element1 = <FontAwesomeIcon icon={faBars} />
const element2 = <FontAwesomeIcon icon={faUpload} />
let name = 'Adnan';


const Content= () => {
    return(
        <div className="check1">
            <div className="container">
                    <div className="row">
                        <div className="col-11">                           
                           <form class="d-flex" role="search">
                                {/* <input class="form-control me-2" type="search" placeholder="&#xF002; Search"  aria-label="Search"/>
                                 */}
                                <label className='see'>
                                    <svg className='see' viewBox="0 0 24 24" width="100" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    <input placeholder="Search" type="search" />
                                </label>
                            </form>
                           
                        </div>
                        {/* <div className="col-6">
                        2 of 3 (wider)
                        </div> */}
                        <div className="col-1">
                            <span className='bar'>{element1}</span>                        
                        </div>
                    </div>
                    <div className='second'>
                        <div className="row">
                            <div className="col-10">
                            <h5>Documents / Files</h5>
                            </div>
                            {/* <div className="col-6">
                            2 of 3 (wider)
                            </div> */}
                            <div className="col-2">
                            <form class="d-flex" role="upload">
                                <button class="btn btn-outline-success" type="submit">{element2} Upload</button>
                            </form>                                         
                            </div>
                        </div>
                    </div>
                    <div className='third'>
                        <div className="row">
                            <div className="col">
                            <h5>Name</h5>
                            </div>
                            <div className="col">
                            <h5>Date Created</h5>                            
                            </div>
                            <div className="col">
                            <h5>Type</h5> 
                            </div>
                            <div className="col">
                            <h5>{element} File Link</h5>                                         
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div className='fourth'>
                        <div className="row">
                            <div className="col">
                                <h6><a href='#link'><img className='image' src={require('./assets/logo192.png')}></img></a> {name}</h6>                        
                            </div>
                            <div className="col">
                            <h6>August 7, 1999</h6>                            
                            </div>
                            <div className="col">
                            <h6>The Hague</h6> 
                            </div>
                            <div className="col">
                            <a href="#links"><h6>{element} Link</h6></a>                                         
                            </div>
                        </div>
                        <hr></hr>
                    </div>
            </div>
           
        </div>
       
    )
    
}

export default Content;