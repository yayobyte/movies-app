import React from 'react'

type ErrorProps = {
    message: string
    onRetry: () => void
}

export const Error = ({ message, onRetry }: ErrorProps) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="alert alert-danger" role="alert">
                {message || "An unexpected error occurred."}
            </div>
            <button className="btn btn-primary" onClick={onRetry}>Retry</button>
        </div>
    )
}
