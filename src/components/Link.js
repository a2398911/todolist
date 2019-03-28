import React,{Component} from 'react';
import { Link } from 'react-router-dom';
export default class extends Component{
    render(){
        const {active,children,onClick} = this.props;
        if (active) {
            return <span>{children}</span>
        }
        return (
            <Link to="/" onClick={e => {
                e.preventDefault();
                onClick()
            }}>
                {children}
            </Link>
        )

    }
}