import React from 'react';
import { render_to_address, date_formatter } from '../../utils/Utils';

//Expandable layout for desktop

class CollapsibleDesktop extends React.Component {
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
            <div onClick={(e) => this.togglePanel(e)} className='header_desktop'>

                <p className="desktop_from">{this.props.from}</p>
                <div className="desktop_to">
                    <p className="desktop_to_left">{render_to_address(this.props.mails)}</p>
                    <p className="desktop_to_right">{this.props.mails.length > 1 ? <p style={{ fontSize: "10px", textAlign: "center", background: "#888888", color: "white", margin: "2px 8px 2px 8px", borderRadius: "2px" }}> +{this.props.mails.length - 1}</p> : null}</p>
                </div>
                <div className="desktop_subject">
                    <p className="desktop_subject_left">{this.props.subjects}<span style={{ color: "#888" }}>-{this.props.mails[0].email_body}</span></p>
                    <p>{this.props.hasAttachment ? (
                        <img alt="ic_clip" style={{ width: "15px", marginTop: "-5px", marginLeft: "5px" }} src='icon_clip.svg'></img>
                    ) : null}</p>

                </div>
                <p className="desktop_date">{date_formatter(this.props.date)}</p>
            </div>
            {this.state.open ? (
                <div className='content'>
                    {this.props.children}
                </div>
            ) : null}
            <hr class="solid"></hr>
        </div>);
    }
}

export default CollapsibleDesktop;