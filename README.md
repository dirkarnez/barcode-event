Barcode Event
=============
Barcode Event is an event-driven, framework-agnostic library capturing barcode input as simulated keystrokes, TypeScript supported

### To build Barcode Event
```bash
npm i
npm run-script build
```

### To start using Barcode Event
Simply place the .js script just built to the HTML `<head>` tag, check out `examples`. Then use barcode scanner or [`barcode-scanner-emulator.vbs`](barcode-scanner-emulator.vbs) (3 seconds delay for your preparation) to test

### Prerequisites
*  Occupied 
```javascript
window.barcodeEvent
```

### Event name
```javascript
barcodeEvent.ON_BARCODE_SCANNED
```

### To listen the barcode-scanned event in a React component
```javascript
componentDidMount() {
    window.addEventListener(barcodeEvent.ON_BARCODE_SCANNED, e => {
        // the barcode in in e.detail, do anything you want.
    });
}
```
### Finally
Please help if you find bugs or want to test it, thanks!
