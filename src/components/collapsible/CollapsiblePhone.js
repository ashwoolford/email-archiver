import React from 'react';
import { render_to_address, date_formatter } from '../../utils/Utils';


//Expandable layout for mobile 

class CollapsiblePhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    //Checking if panel is expaneded then make it false and vice versa

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (<div>
            <div onClick={(e) => this.togglePanel(e)} className='phone_mail_header'>
                <div className="phone_mail_header_top">
                    <p href="!#" className="header_top_mail_icon"><img alt="ic_mail_sp" style={{ width: "22px", marginTop: "5px" }} src="icon_mail_sp.svg"></img></p>
                    <div className="header_top_mail_icon_right">
                        <div className="icon_right_top">
                            <p className="right_top_from"><b>{this.props.from}</b></p>
                            <p className="right_top_clip"> {this.props.hasAttachment ? <img alt="ic_clip" style={{ width: "10px", marginTop: "-7px" }} src="icon_clip.svg"></img> : null}</p>
                            <p className="right_top_date">{date_formatter(this.props.date)}</p>
                            <p className="right_top_arrow"><img alt="ic_arrow02" style={{ width: "5px", marginTop: "-7px" }} src="icon_arrow02.svg"></img></p>
                        </div>
                        <div className="icon_right_bottom">
                            <p className="right_bottom_left">{render_to_address(this.props.mails)}</p>
                            <p className="right_bottom_right">{this.props.mails.length > 1 ? <p style={{ fontSize: "10px", textAlign: "center", background: "#888888", color: "white", margin: "5px 15px 5px 15px", borderRadius: "2px" }}> +{this.props.mails.length - 1}</p> : null}</p>
                        </div>

                    </div>
                </div>
                <p className="phone_mail_header_bottom">{this.props.subject}<span style={{ color: "#888" }}>-{this.props.mails[0].email_body}</span></p>


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

export default CollapsiblePhone;