import React, { Component } from 'react'
import './Home.css'
import Drop from './Dropdown.png'
import Cart from './Cart.png'
import Account from './Account.png'
import Filter from './Filter.png'
import Fairy from './Fairy.png'
import Convo from './Convo.png'
import Cloud from './Cloud.png'
import Two from './Two.png'
import Three from './Three.png'
import Offer from './Offer.png'
import Letter from './Letter.png'
import Last from './Last.png'
import { Link}from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div>
                <div className="back">
                    <div className="sel">
                                   Select Your Country USD&nbsp;<img src={Drop} className="forimg"/>
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   My Order &nbsp;<Link className="btn" to="/cart"><img src={Cart} className="forcart"/></Link> 
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Account&nbsp;<img src={Account} className="foracc"/> 
                    </div>
                    <div className="sel fon1">
                         Filter&nbsp;<img src={Filter} className="forcart"/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         Join Our Conversation: &nbsp;<img src={Convo} className="forconvo"/>
                    </div>
                    <div >
                    <img src={Fairy} className="forfairy"/>
                    </div>
                    <div>
                    <img src={Cloud} className="forcloud"/>
                    </div>
                    <div >
                    <form className="back">
                        <div className="form-group sizepage ">
                             <input type="email" className="form-control wid" placeholder="Enter for keyword or product" />
                        </div>
                    </form>
                    &nbsp;
                    </div>
                </div>
                <div>
                </div>


                <div>
                <img src={Two} className="fortwo"/>
                </div>


                <div>
                <img src={Three} className="forthree"/>
                <Link className="btn button3" to="/view">View All</Link>
                </div>


                <div>
                <Link className="btn " to="/offer"><img src={Offer} className="fortwo"/></Link>
                
                </div>




                <div>
                <img src={Letter} className="forletter"/>
                </div>


                <div>
                <form >
                    <div className="form-group sizepage ">
                        <label className="formn">Find out about upcoming sales & new products!</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="email" className="form-control inp wid1" placeholder="Enter your email address" />
                        <button className="btn button4">SIGN UP</button>
                        &nbsp;
                     </div>
                </form>
                </div>


                <div className="contact">
                    Contact
                </div>




                <div>
                <img src={Last} className="forlast"/>
                </div>






            </div>
        )
    }
}

export default Home
/*
import React, { Component } from 'react'
import './Home.css'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="back">
                    <div className="sel">
                         <UncontrolledDropdown>
                              <DropdownToggle className="fon">
                                   Select Your Country USD
                              </DropdownToggle>
                         </UncontrolledDropdown>
                    </div>
                    <div className="ord">
                        My Order &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Account&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="sel fon1">
                         Filter
                    </div>
                    <div className="ord">
                        Join Our Conversion&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                    <form className="back">
                        <div className="form-group sizepage ">
                             <input type="email" className="form-control wid" placeholder="Enter for keyword or product" />
                        </div>
                    </form>
                    </div>
                </div>



                <div>

                </div>
            </div>
        )
    }
}

export default Home
*/