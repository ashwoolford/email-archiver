import React from 'react';
import Table from 'react-bootstrap/Table';
import CollapsiblePhone from './collapsible/CollapsiblePhone';
import CollapsibleInner from './collapsible/CollapsibleInner';
import { date_formatter } from '../utils/Utils';

//Different layout for phones

const EmailBodyPhone = ({ emails_body }) => {

    return emails_body.length === 0 ? (
        <div className='archiver_field'>
            <img alt="logo" className='logo' src='logo.png'></img>
        </div>
    ) : (
            <div className="emailbodyphone_root">

                <Table>
                    <thead>
                        <tr >
                            <th>From</th>
                            <th><img alt="ic_arrow01" style={{ marginLeft: "-30px" }} className='date_col' src='icon_arrow01.svg'></img></th>
                            <th>To</th>
                            <th>Subjects</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                </Table>

                {
                    emails_body.map((email) => {
                        return (
                            <>
                                <CollapsiblePhone
                                    from={email.from}
                                    date={email.date}
                                    subject={email.subject}
                                    hasAttachment={email.hasAttachment}
                                    mails={email.mails}
                                >

                                    {email.mails.map((mail) => {
                                        return (
                                            <>
                                                <CollapsibleInner title={mail.to} subject={mail.subject} date={mail.date} mail_body={mail.email_body}>
                                                    <div><p>to: {mail.to}</p></div>
                                                    <div><p>Subject: {mail.subject}</p></div>
                                                    <div><p>Date: {date_formatter(mail.date)}</p></div>
                                                    <hr class="solid"></hr>
                                                    <div><p>{mail.email_body}</p></div>
                                                </CollapsibleInner>
                                                <hr className="divider_collapsible"></hr>

                                            </>
                                        );
                                    })}
                                </CollapsiblePhone>
                                <hr class="solid"></hr>
                            </>
                        );
                    })
                }

            </div >
        );

}

export default EmailBodyPhone;