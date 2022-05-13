

export interface CalcPropsInterface {
    point_A: string,
    point_B: string
}

export interface PointsInterface {
    xA: number,
    yA: number,
    xB: number,
    yB: number,
    dist?: number,
    dir?: string,
}

export interface ExperienceInterface {
    image: string,
    alt: string,
    name: string,
    description?: string,
    excerpt?: string
}