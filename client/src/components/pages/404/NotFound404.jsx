import './NotFound404.css'

const nf404 = ({ location }) => {
    const errorMessage = `404 Error: Page not found at ${location.pathname}`
    return (
        <div className="nf404-page-container min-page-height">
            <div className="page-heading-container">
                <h1 className="page-heading">{errorMessage}</h1>
            </div>
        </div>
    )
}

export default nf404