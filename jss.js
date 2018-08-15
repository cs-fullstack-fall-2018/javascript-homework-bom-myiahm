var   monitorInfo =
    {
        screeWidth:screen.width,
        screenHeight:screen.height,
        screenAvailableH:screen.availHeight,
        screenAvailableW:screen.availWidth,
        screenColor:screen.colorDepth,
        screenPix: screen.pixelDepth
    };
Object.keys(monitorInfo).forEach(function(key)
{
    document.write(key);
});