import './nf404.css'

const nf404 = ({ location }) => {
    const errorMessage = `404 Error: Page not found at ${location.pathname}`
    return (
        <div className="nf404-page-container">
            <p>{errorMessage}</p>
        </div>
    )
}

export default nf404