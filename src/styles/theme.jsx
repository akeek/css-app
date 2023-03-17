import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: 'purple',
        secondary: 'lightcoral',
    },
};

export const Theme = ( {children} ) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;