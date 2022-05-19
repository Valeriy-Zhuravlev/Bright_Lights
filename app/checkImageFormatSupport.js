var imageData = {
    avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=',
    webp: 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
  };

  function checkImageFormatSupport(imageFormat, callback) {
    var img = new Image();
    
    img.src = imageData[imageFormat];
    
    img.onload = function () { var result = (img.width > 0) && (img.height > 0); callback(result); };
    img.onerror = function () { callback(false); };
  }

      // Check WebP Lossy support
      
  checkImageFormatSupport('webp', function (isWebpLossySupported) {
    if (isWebpLossySupported) {
      document.documentElement.className = document.documentElement.className.replace('no-webplossy', 'webplossy');
    }
  });

      // Check AVIF support
  
  checkImageFormatSupport('avif', function (isAvifSupported) {
    if (isAvifSupported) {
      document.documentElement.className = document.documentElement.className.replace('no-avif', 'avif');
    }
  });