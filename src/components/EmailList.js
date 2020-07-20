import React, { useState } from 'react';
import EmailBodyDesktop from './EmailBodyDesktop';
import EmailBodyPhone from './EmailBodyPhone';
import Pagination from './Pagination';
import { useMediaQuery } from 'react-responsive';



const EmailList = ({ emails_body }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [emailsPerPage] = useState(10);

    //Screen breakpoint(s) 

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 769px)'
    })

    //Get current emails

    const indexOfLastEmail = currentPage * emailsPerPage;
    const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
    const currentEmails = emails_body.slice(indexOfFirstEmail, indexOfLastEmail);

    //Change page

    const paginate = (pageNumer) => setCurrentPage(pageNumer);



    return (
        <div>
            <div className="mail_status">
                <text>Result(s): {emails_body.length} mail(s)</text>
                <hr class="mail_divider"></hr>
            </div>

            {
                isDesktopOrLaptop

                    ?
                    <EmailBodyDesktop emails_body={currentEmails} />
                    :
                    <EmailBodyPhone emails_body={currentEmails} />

            }


            <Pagination emailsPerPage={emailsPerPage} totalEmails={emails_body.length} paginate={paginate} />

        </div>
    )
}

export default EmailList;
