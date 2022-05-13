
interface TwoInputsInterface {
    err: string,
    twoEnteredValues: { x: string, y: string },
    isValid: boolean
}
export const validateTwoValuesInput = (formData: string): TwoInputsInterface => {
    //this function checks if the values entered are seperated by the space
    let err = "";
    let isValid: boolean = false;
    let twoEnteredValues: { x: string, y: string } = { x: "", y: "" };

    if (formData.indexOf(" ") > 0) {
        const enteredValues = formData.split(" ");
        err = "";

        if (enteredValues.length > 2) {
            err = "You have more than required spaces, please fix your error";
        } else {
            isValid = true;
            twoEnteredValues = { x: enteredValues[0], y: enteredValues[1] };
        }

    } else {
        err = "Please enter 2 seperate values";
        isValid = false;
    }

    return { err, twoEnteredValues, isValid };
}
