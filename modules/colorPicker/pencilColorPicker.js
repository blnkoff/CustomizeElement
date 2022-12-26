let pencilColorPicker = new iro.ColorPicker("#pencilColorPicker", {
    width: 201,
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

