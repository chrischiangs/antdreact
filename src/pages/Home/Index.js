import React,{Component} from  'react'
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock'
import FooterBlock from "../../components/FooterBlock/FooterBlock";
import './Default.less'

export default class Index extends Component{
    render() {
        return(
            <>
                <HeaderBlock />
                <div id="IndexLayout">
                    Index,HelloWorld
                </div>
                <FooterBlock />
            </>
        )
    }
}