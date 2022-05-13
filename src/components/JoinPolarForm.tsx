import React from 'react';

interface Props {
    name: string,
    placeholder: string,
    value: string,
    label: string,
    description?: string,
    handleChange(x: any): void
}

const JoinPolarForm: React.FC<Props> = ({ name, placeholder, value, label, description, handleChange }) => {
    return (
        <label htmlFor={name}>
            <p>{label}:</p>
            <p>{description ? description : "(leave space between values)"}:</p>
            <input
                type="text"
                name={name}
                id={name}
                placeholder={placeholder}
                required
                value={value}
                onChange={handleChange} />
        </label>
    )
}

export default JoinPolarForm