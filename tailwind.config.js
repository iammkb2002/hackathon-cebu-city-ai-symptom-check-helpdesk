module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                pink: "#FE3376", // Add your custom hex color here
                lightpink: "#FD6195",
                orange: "#E67533",
                lightorange: "#F07E3C",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui"), require("flowbite/plugin")],
    daisyui: {
        themes: ["light", "cupcake", "bumblebee", "emerald", "corporate"],
    },
};
