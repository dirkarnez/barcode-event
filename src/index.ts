class BarcodeInputListener { 
    private static SCANNER_INPUT_TIMEOUT: number = 500;
    public static ON_BARCODE_SCANNED: string = "onBarcodeScanned";
    private lastTime: number;
    private handlerId: number;
    private aggregate: string;

    constructor() {
        this.lastTime = NaN;
        this.handlerId = NaN;
        this.aggregate = "";
    }

    public listen(): void {
        window.addEventListener("DOMContentLoaded", () => {
            document.addEventListener("keydown", (e: KeyboardEvent) => {
                var now = new Date().getTime();
                var typed = e.key.length == 1 ? e.key : "";

                if (!isNaN(this.handlerId)) {
                    clearTimeout(this.handlerId);
                }

                if (isNaN(this.lastTime) || now - this.lastTime > BarcodeInputListener.SCANNER_INPUT_TIMEOUT) {
                    this.lastTime = now;
                    this.aggregate = typed;
                } else {
                    console.log(this.aggregate);
                    this.aggregate += typed;
                }

                this.handlerId = window.setTimeout(() => {
                    window.dispatchEvent(new CustomEvent(BarcodeInputListener.ON_BARCODE_SCANNED, {
                        detail: this.aggregate
                    }));
                }, BarcodeInputListener.SCANNER_INPUT_TIMEOUT);
            });
        });
    }
}

new BarcodeInputListener().listen();

export const ON_BARCODE_SCANNED = BarcodeInputListener.ON_BARCODE_SCANNED;