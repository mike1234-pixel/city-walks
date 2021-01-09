import './ThreadBox.css'

const ThreadBox = (props) => {

    const { userFirstName, title, content, replies, submittedOn, userId } = props

    return (
        <div className="thread-box">
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}

export default ThreadBox