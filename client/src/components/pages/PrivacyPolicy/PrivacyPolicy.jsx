import { useEffect } from "react"
import "./PrivacyPolicy.css"

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="privacy-policy-container">
            <div className="page-heading-container">
                <h1 className="page-heading">City Walks Privacy Policy</h1>
            </div>
            <p>City Walks is a non-commercial application and is unaffiliated with any company or organisation. This privacy policy explains how City Walks uses the personal data we collect from you when you use our website.</p>
            <h3>Topics:</h3>
            <ul>
                <li>What data do we collect?</li>
                <li>How do we collect your data?</li>
                <li>How will we use your data?</li>
                <li>How do we store your data?</li>
                <li>Marketing</li>
                <li>What are your data protection rights?</li>
                <li>What are cookies?</li>
                <li>How do we use cookies?</li>
                <li>What types of cookies do we use?</li>
                <li>How to manage your cookies</li>
                <li>Privacy policies of other websites</li>
                <li>Changes to our privacy policy</li>
                <li>How to contact us</li>
                <li>How to contact the appropriate authorities</li>
            </ul>
            <h2>What data do we collect?</h2>
            <p>City Walks collects the following data from users with an active account:</p>
            <ul>
                <li>Personal identification information including first name, last name and email address.</li>
            </ul>
            <h2>How do we collect your data?</h2>
            <p>You directly provide City Walks with all of the data we collect. We collect and process data when you:</p>
            <ul>
                <li>Register online</li>
                <li>Contact us via our contact form</li>
            </ul>
            <h2>How will we use your data?</h2>
            <p>City Walks collects your data so that we can:</p>
            <ul>
                <li>Enable you to login into the site, manage your account and contribute to the forum</li>
                <li>To contact you when you have contacted us via the contact form</li>
            </ul>
            <h2>How do we store your data?</h2>
                <p>City Walks securely stores your data in a MongoDB database. All passwords are saved as hashes in the database, and your password will never be logged or stored as plain text.</p>
                <p>City Walks will keep this data for the duration that your account remains active. You can delete your account and its associated data by simply clicking the "Delete Account" link on the website's footer when logged into your account.</p>
            <h2>Marketing</h2>
                <p>City Walks is a non-commercial application and so will not use your data for marketing purposes.</p>
            <h2>What are your data protection rights?</h2>
                <p>City Walks woud like to make sure you are fully aware of all your data protection rights. Every user is entitled to the following:</p>
                <p><strong className="bold-text">The right to access - </strong>You have the right to request City Walks for copies of your personal data. We may charge you a small fee for this service.</p>
                <p><strong className="bold-text">The right to rectification - </strong>You have the right to request that City Walks correct any information you strongelieve is inaccurate. You also have the right to request City Walks to complete information you believe is incomplete.</p>
                <p><strong className="bold-text">The right to erasure - </strong>You have the right to request that City Walks erase your personal data, under certain conditions.</p>
                <p><strong className="bold-text">The right to restrict processing - </strong>You have the right to request that City Walks restrict the processing of your personal data, under certain conditions.</p>
                <p><strong className="bold-text">The right to object to processing - </strong>You have the right to object to City Walks's processing of your personal data, under certain conditions.</p>
                <p><strong className="bold-text">The right to data portability - </strong>You have the right to request that City Walks transfer the data we have collected to another organisation, or directly to you, under certain conditions.</p>
                <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at out email: city.walks.uk@gmail.com</p>
            <h2>What are cookies?</h2>
                <p>Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information. When you visit our website, we may collect information from you automatically through cookies or similar technology.</p>
                <p>For further information, visit <a target="_blank" href="https://www.allaboutcookies.org/">allaboutcookies.org</a></p>
            <h2>How do we use cookies?</h2>
                <p>City Walks uses cookies in a range of ways to improve your experience on our website, including:</p>
                <ul>
                    <li>Keeping you signed in.</li>
                    <li>Keeping track of data that can help you manage your account, such as your userId and first name.</li>
                </ul>
            <h2>What types of cookies do we use?</h2>
                <p>We use your browser's local storage to save the following pieces of information during your browsing session:</p>
                <ul>
                    <li>logged in status</li>
                    <li>user first name</li>
                    <li>user id</li>
                    <li>whether the user has accepted the privacy policy</li>
                </ul>
            <h2>How to manage cookies</h2>
                <p>You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some features of our website may not function as a result.</p>
            <h2>Privacy policies of other websites</h2>
                <p>The City Walks website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.</p>
            <h2>Changes to our privacy policy</h2>
                <p>City Walks keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 12 January 2021.</p>
            <h2>How to contact us</h2>
                <p>If you have any questions about City Walks's privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.</p>
                <p>Email us at city.walks.uk@gmail.com</p>
            <h2>How to contact the appropriate authority</h2>
                <p>Should you wish to report a complaint or if you feel that City Walks has not addressed your concern in a satisfactory manner, you may wish to contact the Information Comissioner's Office.</p>
                <p>Address: Information Commissioner's Office Wycliffe House Water Lane Wilmslow Cheshire SK9 5AF</p>
                <p>Helpline: 0303 123 1113</p>
        </div>
    )
}

export default PrivacyPolicy