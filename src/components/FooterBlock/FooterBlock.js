import React,{Component} from 'react';
import './Default.less'
export default class FooterBlock extends Component {
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        357.ink
                    </div>
                    <div className="nav-list-wrap">
                        (C) Copyright 2020
                    </div>
                </div>
            </div>
        )
    }

}