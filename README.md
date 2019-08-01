# BarcodeEvent

BarcodeEvent is an event-driven, framework-agnostic library capturing barcode input as simulated keystrokes

# To build BarcodeEvent
```
npm i
npm run-script build
```

# To start using BarcodeEvent
Simply place the .js script just built to the HTML `<head>` tag

# Prerequisites
*  Occupied `window.barcodeEvent`

# Event name
```
barcodeEvent.ON_BARCODE_SCANNED
```

# To listen the barcode-scanned event in a React component
```
componentDidMount() {
    window.addEventListener(barcodeEvent.ON_BARCODE_SCANNED, e => {
        // the barcode in in e.detail, do anything you want.
    });
}
```