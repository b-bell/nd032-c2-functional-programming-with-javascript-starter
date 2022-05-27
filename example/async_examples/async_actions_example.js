// Script must be run in a browser for document
const loadScript = (src, callback) => {
    // Creates a script tag and appends it to a page
    // This causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    
    // Add a callback function as a second argument to loadScript
    // that should execute when the script loads
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// Load and execute the script at the given path
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function (error, script) {
    if (error) {
        // Handle error
    } else {
        // The callback runs after the script is loaded
        alert(`Cool, the script ${script.src} is loaded`); // So now this would work (if defined)
        alert( _ ); // Function declared in the loaded script
    }
});
// The code below loadScript doesn't wait for the script
// loading to finish...

