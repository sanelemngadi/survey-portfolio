import { PointsInterface } from "../../interfaces/interfaces";
import { convDegToDMS } from "../../helpers/convDegToDMS";

interface Props {
    values: PointsInterface
}
export const useJoin = ({ values }: Props): any => {

    class Join {
        xA: number;
        yA: number;
        xB: number;
        yB: number;

        constructor(values: PointsInterface) {
            this.xA = values.xA,
                this.xB = values.xB,
                this.yA = values.yA,
                this.yB = values.yB
        }

        getDx(): number {
            const dx = this.xB - this.xA;
            return dx;
        }
        getDy(): number {
            const dy = this.yB - this.yA;
            return dy;
        }

        getDirection(): string {
            const dir = Math.atan(this.getDy() / this.getDx()) * 180 / Math.PI;
            if (this.getDx() >= 0) {
                return convDegToDMS(360 + dir).getSecMinDeg();
            } else {
                return convDegToDMS(180 + dir).getSecMinDeg();
            }
        }
        getDistance(): string {
            const yy = Math.pow(this.getDy(), 2);
            const xx = Math.pow(this.getDx(), 2);
            const sq = Math.sqrt(xx + yy);
            return sq.toFixed(3);
        }
    }
    return new Join(values);

}
