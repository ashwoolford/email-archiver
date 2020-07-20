import React from 'react';
import CollapsibleDesktop from './collapsible/CollapsibleDesktop';
import CollapsibleInner from './collapsible/CollapsibleInner';
import { date_formatter } from '../utils/Utils';



//Different layout for Desktop


const EmailBodyDesktop = ({ emails_body }) => {

  return emails_body.length === 0 ? (
    <div className='archiver_field'>
      <img alt="logo" className='logo' src='logo.png'></img>
    </div>
  ) : (

      <div className="desktop_email_body_container">

        <div className="desktop_mail_header">
          <div className="mail_header_from"><p><b>From</b></p></div>
          <div className="mail_header_to"><p><b>To</b></p></div>
          <div className="mail_header_subjects"><p><b>Subjects-Mails</b></p></div>
          <div className="mail_header_date"><p><b>Dates</b> <img alt="ic_arrow01" style={{ width: "9px" }} src="icon_arrow01.svg"></img></p></div>
        </div>

        {
          emails_body.map((email) => {
            return (
              <CollapsibleDesktop
                from={email.from}
                hasAttachment={email.hasAttachment}
                date={email.date}
                subjects={email.subject}
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

              </CollapsibleDesktop>
            );

          })
        }

      </div >
    );
};

export default EmailBodyDesktop;
