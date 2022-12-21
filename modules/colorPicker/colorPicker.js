let colorPicker = new iro.ColorPicker("#colorPicker", {
    // Set the size of the color picker
    width: 201,
    // Set the initial color to pure red
    color: "#000000",
    layoutDirection: "horizontal",
    borderWidth: 2,
    layout: [
        {
            component: iro.ui.Box,
            options: {}
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: 'hue'
            }
        },
    ]
});