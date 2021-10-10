import React, { Component } from 'react'
import New from "./New";

export default class News extends Component {

    render() {
        return (
            <div className="row">
                {this.props.news.map(n=>{
                    return (<New key={n.url} new={n} />);
                })}
            </div>
        )
    }
}
