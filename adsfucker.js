(function () {
    const script = document.createElement('script');
    script.src = 'https://adblockers.devch-4522.workers.dev/'; // Replace with the path of a dummy script
    script.onerror = () => {
      console.log('Adblocker detected (Blocked Script)');
    };
    script.onload = () => {
      console.log('No adblocker detected (Blocked Script)');
    };
    document.body.appendChild(script);
})();