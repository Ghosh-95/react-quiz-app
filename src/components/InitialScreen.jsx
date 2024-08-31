export default function InitialScreen({ questionNumbers }) {
    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>{questionNumbers} questions to master your React learning.</h3>

            <button className="btn btn-ui">Let's Start</button>
        </div>
    )
}