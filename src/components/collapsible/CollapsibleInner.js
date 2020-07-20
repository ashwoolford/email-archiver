import React from 'react';


//Expandable Mail Details

class CollapsibeInner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }


    render() {
        return (<div>
            <div onClick={(e) => this.togglePanel(e)} className='collapsible_inner'>
                <div className="collapsible_inner_top">
                    <p style={{ fontSize: "smaller" }} className="inner_top_email">{'<'}{this.props.title}{'>'}</p>
                    <p style={{ fontSize: "smaller" }} className="inner_top_date">{
                        (new Date(this.props.date)).getFullYear()
                        + '/' + (new Date(this.props.date)).getMonth() + '/' + (new Date(this.props.date)).getDate()
                    }</p>
                </div>
                <div style={{ fontSize: "small" }} className="collapsible_inner_botom">{this.props.subject}</div>

            </div>
            {this.state.open ? (
                <div className='content'>
                    {this.props.children}
                </div>
            ) : null}
        </div>);
    }
}

export default CollapsibeInner;