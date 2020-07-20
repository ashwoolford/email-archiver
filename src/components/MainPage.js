import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Container from 'react-bootstrap/Container';
import emails_body from '../dummy_data/emails.json';
import EmailList from './EmailList';




export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            to_address: null,
            isClicked: false,
            filtered_emails: [],
        }
    }

    //Filtering Dates

    handleClick = () => {

        if (this.state.startDate != null && this.state.endDate != null) {

            const startDate = new Date(this.state.startDate);
            const endDate = new Date(this.state.endDate);

            const newEmails = [];

            emails_body.map((email) => {
                let emailDate = new Date(email.date);

                if (emailDate >= startDate && emailDate <= endDate) {
                    newEmails.push(email);
                }

                return null;
            });


            this.setState({ isClicked: true });
            this.setState({ filtered_emails: newEmails });

        }

    }


    render() {

        return (

            <Container className="root_mainpage">
                <div className="search_bar">
                    <img alt="cal" src="icon_calender.svg"></img>
                    <DateRangePicker
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                        isOutsideRange={() => false}
                        numberOfMonths={1}
                        firstDayOfWeek={1}
                        hideKeyboardShortcutsPanel
                    />
                    <img alt="ic_search" src="icon_search.svg" onClick={this.handleClick}></img>
                </div>

                {this.state.isClicked ? <EmailList emails_body={this.state.filtered_emails} /> :
                    <EmailList emails_body={emails_body} />}

            </Container >
        )
    }
}
