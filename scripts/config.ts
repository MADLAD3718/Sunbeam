export interface SunAngle {
    readonly azimuth: number,
    readonly zenith: number
}

export namespace Config {
    export const Default: SunAngle = {
        azimuth: 0,
        zenith: Math.PI / 4
    }
    export const Infectious: SunAngle = {
        azimuth: 0.6,
        zenith: 0.951
    }
    export const Interstellar: SunAngle = {
        azimuth: 0.813,
        zenith: 0.667
    }
    export const Seraphic: SunAngle = {
        azimuth: 3.5841,
        zenith: 0.785398
    }
    export const Vanilla: SunAngle = {
        azimuth: 0,
        zenith: 0
    }
}
