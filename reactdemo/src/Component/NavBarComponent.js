import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';



class NavBarComponent extends Component {
    constructor(){
        super();
    }


    handleSelect(eventKey){
        
        this.props.setSelected(eventKey);
        console.log(eventKey)
    }

    render() {
        return (
        <Navbar className="wb-menu visible-md visible-lg wb-init wb-data-ajax-replace-inited" id="wb-sm">
            <div className="pnl-strt container nvbar">
            <Nav className="list-inline menu" onSelect={this.handleSelect.bind(this)}>

                <NavItem className="" eventKey={0}>
                    Education
                </NavItem>
                <NavItem eventKey={1}>
                    Technical Skills
                </NavItem>
                <NavDropdown title="Work Experience" id="work">
                    <MenuItem eventKey={2}>Data Analyst</MenuItem>
                    <MenuItem eventKey={3}>Test Developer</MenuItem>
                </NavDropdown>

                <NavItem href="https://github.com/serializedowen">
                    Github Link 
                </NavItem>
            </Nav>
            </div>
        </Navbar>
        );
  }
}

NavBarComponent.propTypes = {
    setSelected: PropTypes.func
}

export default NavBarComponent;
