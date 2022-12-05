var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 320,
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
                // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
                sliderType: 'hue'
            }
        },
    ]
});

var hex = colorPicker.color.hexString;
console.log(hex);
setTimeout(() => hex = colorPicker.color.hexString, 4000);
setTimeout(() => console.log(hex), 5000);