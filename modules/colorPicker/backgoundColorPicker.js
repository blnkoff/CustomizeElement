let backgroundColorPicker = new iro.ColorPicker("#backgroundColorPicker", {
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
backgroundColorPicker.on('color:change', function(color) {
     if (document.querySelector('.wrapper').style.opacity === '1')
         document.querySelector('.element').style.background = color.hexString;
});

