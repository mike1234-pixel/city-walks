import './nf404.css'

const nf404 = ({ location }) => {
    const errorMessage = `404 Error: Page not found at ${location.pathname}`
    return (
        <div className="nf404-page-container">
            <div className="page-header-container">
                <h1 className="page-header">{errorMessage}</h1>
            </div>
        </div>
    )
}

export default nf404