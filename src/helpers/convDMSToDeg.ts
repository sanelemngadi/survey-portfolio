
interface DMSInterface {
    deg: number,
    mins: number,
    sec: number,
}
export const convDMSToDeg = ({ deg, mins, sec }: DMSInterface) => {
    //this function returns the new instance of a class that converts from degrees minutes and seconds to decimal degree
    class Conversions {
        deg: number;
        mins: number;
        sec: number;

        constructor({ deg, mins, sec }: DMSInterface) {
            this.deg = deg;
            this.mins = mins;
            this.sec = sec;
        }
        getDecimalDegrees(): number {
            const angle = this.deg + (this.mins / 60) + (this.sec / 3600);
            return angle;
        }

    }

    return new Conversions({ deg, mins, sec });
}
