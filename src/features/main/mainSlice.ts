import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  colorRed: boolean
  colorBlue: boolean
  colorGreen: boolean
  colorYellow: boolean
  colorBlack: boolean
  colorWhite: boolean
  colorPaleBlue: boolean
  colorOther: boolean
  canton: boolean
  star: boolean
  sun: boolean
  moon: boolean
  circle: boolean
  triangle: boolean
  cross: boolean
  wave: boolean
}

const initialState: MainState = {
  colorRed: false,
  colorBlue: false,
  colorGreen: false,
  colorYellow: false,
  colorBlack: false,
  colorWhite: false,
  colorPaleBlue: false,
  colorOther: false,
  canton: false,
  star: false,
  sun: false,
  moon: false,
  circle: false,
  triangle: false,
  cross: false,
  wave: false,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setColorRed: (state) => {
      state.colorRed = !state.colorRed
    },
    setColorBlue: (state) => {
      state.colorBlue = !state.colorBlue
    },
    setColorGreen: (state) => {
      state.colorGreen = !state.colorGreen
    },
    setColorYellow: (state) => {
      state.colorYellow = !state.colorYellow
    },
    setColorBlack: (state) => {
      state.colorBlack = !state.colorBlack
    },
    setColorWhite: (state) => {
      state.colorWhite = !state.colorWhite
    },
    setColorPaleBlue: (state) => {
      state.colorPaleBlue = !state.colorPaleBlue
    },
    setColorOther: (state) => {
      state.colorOther = !state.colorOther
    },
    setCanton: (state) => {
      state.canton = !state.canton
    },
    setStar: (state) => {
      state.star = !state.star
    },
    setSun: (state) => {
      state.sun = !state.sun
    },
    setMoon: (state) => {
      state.moon = !state.moon
    },
    setCircle: (state) => {
      state.circle = !state.circle
    },
    setTriangle: (state) => {
      state.triangle = !state.triangle
    },
    setCross: (state) => {
      state.cross = !state.cross
    },
    setWave: (state) => {
      state.wave = !state.wave
    },
  },
})

export const {
  setColorRed,
  setColorBlue,
  setColorGreen,
  setColorYellow,
  setColorBlack,
  setColorWhite,
  setColorPaleBlue,
  setColorOther,
  setCanton,
  setStar,
  setSun,
  setMoon,
  setCircle,
  setTriangle,
  setCross,
  setWave,
} = mainSlice.actions

export default mainSlice.reducer
