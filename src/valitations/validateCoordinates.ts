
type Answer = [
    err: string,
    points: number[],
    status: boolean
]

const ValidateCoordinatesInputs = (formData: string): Answer => {
    let err = "";
    let points: number[] = [];
    let status = false;

    if (formData.indexOf(" ") > 0) {
        const vals = formData.split(" ");
        err = "";

        if (vals.length > 2) {
            err = "You have more than required spaces, please fix your error";
        } else {
            const x = vals[0];
            const y = vals[1];

            console.log(" xxxx: ", x, " yyy: ", y);


            if (!Number(x) || !Number(y)) {
                err = "Please make sure you enter numeric values only...";
            } else {
                points = [Number(x), Number(y)];
                status = true;
            };
        }


    } else if (Number(formData) !== NaN) {
        err = "Please enter 2 seperate values";
    }

    else {
        err = "Please make sure u leave a space between the values";
        console.log("we do not have a space");

    }

    return [err, points, status];
}

export default ValidateCoordinatesInputs;
