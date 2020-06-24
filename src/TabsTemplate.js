import React, { Component } from 'react'
import './TabsTemplate.css'
export class TabsTemplate extends Component {
    state = {
        activePage: 'page1',
    }
    render() {
        return (
            <div>
                <button onClick={(e) =>{e.preventDefault();this.setState({ activePage: 'page1' })}}>Page1</button>
                <button onClick={(e) =>{e.preventDefault();this.setState({ activePage: 'page2' })}}>Page2</button>
                <button onClick={(e) =>{e.preventDefault();this.setState({ activePage: 'page3' })}}>Page3</button>
                <button onClick={(e) =>{e.preventDefault();this.setState({ activePage: 'page4' })}}>Page4</button>
                <div id="contentSection">
                {this.state.activePage == 'page1' && <div>content's Page1</div>}
                {this.state.activePage == 'page2' && <div>content's Page2</div>}
                {this.state.activePage == 'page3' && <div>content's Page3</div>}
                {this.state.activePage == 'page4' && <div>content's Page4</div>}
                </div>
            </div>
        )
    }
}

export default TabsTemplate
