import React from 'react';

interface Props {
    point_A: string,
    point_B: string,
}


export const useHandleChange = (initalState: Props): [Props, (x: any) => void, (x: any) => void] => {
    const [value, setValue] = React.useState<Props>(initalState);

    const handleChange = (e: any) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    return [value,
        handleChange, setValue]
}
