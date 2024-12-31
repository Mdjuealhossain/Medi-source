/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/widget/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                hind: ['"Hind Siliguri"', "sans-serif"],
            },
            height: {
                "screen-minus-116": "calc(100vh - 6.25rem)",
            },
            spacing: {
                "2px": "0.125rem",
                "10px": "0.625rem",
                "30px": "1.875rem",
                54: "3.375rem",
                75: "4.688rem",
                87: "5.438rem",
                100: "6.25rem",
                130: "8.125rem",
                150: "9.375 rem",
                170: "10.625rem",
                197: "12.313rem",
                200: "12.5rem",
                223: "13.938rem",
                256: "16rem",
                300: "18.75rem",
                350: "21.875rem",
                370: "23.125rem",
                430: "26.875rem",
                500: "31.25rem",
                562: "35.125rem",
                900: "60.875rem",
            },
        },
        maxWidth: {
            sm: "33.75rem",
            md: "45rem",
            lg: "71.875rem",
            562: "43.75rem",
            xl: "85rem",
            "2xl": "96rem",
        },
        colors: {
            // common
            black: "#000000",
            white: "#fff",
            // common

            // background color start
            default_bg: "#f9f9fa",
            paper_bg: "#ffffff",
            secondary_bg: "#rgb(243, 244, 247)",
            secondary_light: "rgb(249, 249, 250)",
            secondary_mid: "rgb(234, 236, 240)",
            transparent: "transparent",
            // background color end
            // Text color start
            primary: "#101828",
            secondary: "rgb(71, 84, 103)",

            // Text color end
            //colors start
            // Text color end
            //colors start
            primary_light: "rgba(69, 144, 214, 0.253)",
            primary_main: "#1898C5",
            primary_dark: "#058AB7",
            secondary_main: "",
            secondary_li: "rgb(218 228 255)",
            success_light: "#C6DA39",
            success_main: "#A1D03B",
            success_dark: "#89C842",
            info_light: "rgb(233 239 255)",
            info_main: "rgb(68 120 255)",
            info_dark: "#00f",
            error_light: "rgb(255 232 219)",
            error_main: "rgb(240, 68, 56)",
            warning_extra_light: "#FFF9F4",
            warning_light: "#F9D114",
            warning_main: "#FF9800",
            warning_dark: "#EF8F21",

            //colors end

            divider: "rgb(208 213 221)",
        },
        backgroundImage: {
            xs: "linear-gradient(180deg, #827DFB 0%, #5852FA 47%,#221DA8 100%)",
            "slim-nav": "linear-gradient(90deg, #EF8F21 3.51%, #FF9800 8.69%, #A1D03B 71.85%, #1898C5 99.99%)",
            "mega-gradient": "linear-gradient(to right, rgba(139, 196, 63, .1) 50%, #ffffff 50%)",
            "emplyee-card": "linear-gradient(to bottom, #ffffff 5%, #EEEEEE 95%)",
            leader: "linear-gradient(to top left, #ffffff 5%, rgba(139, 196, 63, .4) 95%)",
            // leader: "linear-gradient(to top left, #007aff 20%,#FF0000 40%, #8BC43F 80%)",
            app_banner: "url('/assets/image/home/app_bg_img.webp')",
        },
        keyframes: {
            textanim: {
                "0%": { backgroundPosition: "0% 50%" },
                "100%": { backgroundPosition: "200% 50%" },
            },
        },
        animation: {
            textanim: "textanim 2s linear infinite",
        },
        boxShadow: {
            sm: "0px_4px_4px_0px_rgba(0,0,0,0.08)",
            md: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            lg: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
            xl: "0px_4px_8px_-8px_rgba(8,31,77,0.20)",
            xxl: "0 8px 28px 2px rgba(61, 61, 61, 0.07)",
            "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
            input: "0 0 8px rgba(139, 196, 63, .4)",
            social: "0px 0px 15px 3px rgba(143, 198, 69, 0.8);",
            playBtn: "0px 0px 25px 3px rgba(143, 198, 69, 0.8)",
            // flash: "#F9D114 0px 8px 12px -5px, #F9D114 0px 10px 10px -5px",
            flash: "#F9D114 0px 2px 5px 0px",
        },
        fontSize: {
            xxs: ".5rem", // 8px         caption p
            xs: "0.75rem", //"12px",     body2  p
            sm: "0.875rem", //14px",     subtitle2   p
            base: "1rem", //"16px",      body1   p
            lg: "1.125rem", //"18px",    subtitle1    p
            xl: "1.25rem", //"20px",     H6
            "2xl": "1.5rem", //"24px",   H5
            "3xl": "1.625rem", // 26px    H4
            "4xl": "1.75rem", //"28px",  H3
            "5xl": "2rem", // "32px",    H2
            "6xl": "2.25rem", //"36px",  H1
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },

    plugins: [
        function ({ addComponents, theme }) {
            addComponents({
                ".text-H1": {
                    fontSize: theme("fontSize.3xl"),

                    "@screen md": {
                        fontSize: theme("fontSize.4xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.6xl"), // Biggest screen
                    },
                },
                ".text-H2": {
                    fontSize: theme("fontSize.2xl"),

                    "@screen md": {
                        fontSize: theme("fontSize.3xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.5xl"), // Biggest screen
                    },
                },
                ".text-H3": {
                    fontSize: theme("fontSize.xl"),

                    "@screen md": {
                        fontSize: theme("fontSize.2xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.4xl"), // Biggest screen
                    },
                },
                ".text-H4": {
                    fontSize: theme("fontSize.lg"),

                    "@screen md": {
                        fontSize: theme("fontSize.xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.3xl"), // Biggest screen
                    },
                },
                ".text-H5": {
                    fontSize: theme("fontSize.lg"),

                    "@screen md": {
                        fontSize: theme("fontSize.xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.2xl"), // Biggest screen
                    },
                },
                ".text-H6": {
                    fontSize: theme("fontSize.lg"),

                    "@screen md": {
                        fontSize: theme("fontSize.xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.xl"), // Biggest screen
                    },
                },
                ".text-subtitle1": {
                    fontSize: theme("fontSize.base"),

                    "@screen md": {
                        fontSize: theme("fontSize.lg"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.lg"), // Biggest screen
                    },
                },
                ".text-subtitle2": {
                    fontSize: theme("fontSize.xs"),

                    "@screen md": {
                        fontSize: theme("fontSize.sm"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.sm"), // Biggest screen
                    },
                },
                ".text-body1": {
                    fontSize: theme("fontSize.sm"),

                    "@screen 2xl": {
                        fontSize: theme("fontSize.base"), // Biggest screen
                    },
                },
                ".text-body2": {
                    fontSize: theme("fontSize.xs"),
                    "@screen 2xl": {
                        fontSize: theme("fontSize.xs"), // Large screen
                    },
                },
                ".text-caption": {
                    fontSize: theme("fontSize.xxs"),
                    "@screen 2xl": {
                        fontSize: theme("fontSize.xs"), // Large screen
                    },
                },
            });
        },
    ],
};
