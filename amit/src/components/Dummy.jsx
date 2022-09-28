// ErrorBoundary.jsx & UIBackup.jsx
export function Dummy (props) {
    if(props.country === "usa") {
        throw new Error("Error in Dummy")
    }
    return (
        <p>{props.country}</p>
    )
}   