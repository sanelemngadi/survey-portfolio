export const theme = {
    colors: {
        background: "#fff",
        primary: "#0F1D45",
        secondary: "#BFDBFE",
        tertiary: "#E0BDAA",
    },
    fonts: {
        body: "'Merriweather Sans', sans-serif",
        paragraph: "'Nunito', sans-serif",
        poppins: "'Inter', sans-serif",
        // poppins: "'Poppins', sans-serif",
    },
    breakpoints: {
        xs: "(min-width: 567px)",
        sm: "(min-width: 768px)",
        md: "(min-width: 992px)",
    }
}

export type ThemeType = typeof theme;