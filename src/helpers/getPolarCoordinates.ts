
interface AngleDistanceInterface {
    dir: number,
    dist: number,
    x: number,
    y: number
}
export const getPolarCoordinates = ({ dir, dist, x, y }: AngleDistanceInterface) => {
    console.log("dir: ", dir, " dist: ", dist, " x: ", x, " y ", y);

    class CalculatePolar {
        dir: number;
        dist: number;
        x: number;
        y: number

        constructor({ dir, dist, x, y }: AngleDistanceInterface) {
            this.dir = dir;
            this.dist = dist;
            this.x = x;
            this.y = y;
        }

        getXValue(): number {
            const xVal = this.dist * Math.cos(this.dir * Math.PI / 180);
            // console.log("getXVl: ", Math.cos(this.dir * Math.PI / 180));

            return Number((xVal + this.x).toFixed(3));
        }
        getYValue(): number {
            const yVal = this.dist * Math.sin(this.dir * Math.PI / 180);
            return Number((yVal + this.y).toFixed(3));
        }
        getDxValue(): number {
            const dx = this.dist * Math.cos(this.dir * Math.PI / 180);
            return Number(dx.toFixed(3));
        }
        getDyValue(): number {
            const dy = this.dist * Math.sin(this.dir * Math.PI / 180);
            return Number(dy.toFixed(3));
        }
    }
    return new CalculatePolar({ dir, dist, x, y });
}
