
export const render_to_address = (mails) => {
    let to_address = '';
    mails.map((mail) => {
        to_address += mail.to + ',';

        return null;
    });

    to_address = to_address.slice(0, -1);

    return to_address;
};

export const date_formatter = (given_date) => {

    let date = new Date(given_date);
    let today = new Date();
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];


    let isToday = (today.toDateString() === date.toDateString());

    if (isToday) return date.getHours() + ':' + date.getMinutes();
    else if (date.getFullYear() === today.getFullYear()) return monthNames[date.getMonth()] + ' ' + date.getDate();
    else return date.getFullYear() + '/' + date.getMonth() + 1 + '/' + date.getDate();
}