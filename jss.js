var   monitorInfo =
    {
        screeWidth:screen.width,
        screenHeight:screen.height,
        screenAvailableH:screen.availHeight,
        screenAvailableW:screen.availWidth,
        screenColor:screen.colorDepth,
        screenPix: screen.pixelDepth
    };
for (var key in monitorInfo) {
    var value = monitorInfo[key];
    document.write(value)

}

