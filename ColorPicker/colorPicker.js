let colorPicker = new iro.ColorPicker("#colorPicker", {
    // Set the size of the color picker
    width: 266,
    // Set the initial color to pure red
    color: "#f00",
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

colorPicker.on('color:change', function(color) {
    if (document.querySelector('.wrapper').style.opacity === '1')
        document.querySelector('.element').style.background = color.hexString;
});

