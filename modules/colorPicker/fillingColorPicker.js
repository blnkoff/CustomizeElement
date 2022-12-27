let fillingColorPicker = new iro.ColorPicker("#fillingColorPicker", {
    width: 201,
    color: "#ffffff",
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
fillingColorPicker.on('color:change', function(color) {
     if (document.querySelector('.fillingPanel').style.opacity === '1') {
         Toolbar.currentElement.style.background = color.hexString;
     }
});

