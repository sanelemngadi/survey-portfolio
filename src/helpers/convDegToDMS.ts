export const convDegToDMS = (angle: number) => {
    class Conversions {
        angle: number;

        constructor(angle: number) {
            this.angle = angle;
        }

        getFoored(num: number): number {
            return Math.floor(num);
        }
        getMin(): number {
            const afterCommer = (this.angle - this.getFoored(this.angle)) * 60;
            return afterCommer;
        }
        getSec(mins: number): number {
            const afterCommer = (mins - this.getFoored(mins)) * 60;
            return afterCommer;
        }
        fillSpaces(vals: number, zeros: string, data: number): string {
            let mins: string = "";
            if (this.getFoored(Math.abs(data)) < vals) {
                mins = zeros + this.getFoored(Math.abs(data));
            } else {
                mins = "" + this.getFoored(Math.abs(data));
            }
            return mins;
        }
        getSecMinDeg(): string {
            const d = this.angle;
            const m = this.getMin();
            const s = this.getSec(m);



            return this.fillSpaces(10, "0", d) + "°" + this.fillSpaces(10, "0", m) + '"' + Math.round(Math.abs(s)) + "'";
        }

    }

    return new Conversions(angle);
}
