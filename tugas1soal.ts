type CallbackFunction = (harga: number, sisaUang: number) => void;

function jajanBoba(uang: number, callback: CallbackFunction): void {
    const hargaBoba: number = 5000;

    if (uang >= hargaBoba) {
        uang -= hargaBoba;
        callback(hargaBoba, uang);
    } else {
        console.log("Maaf uang kamu tidak cukup untuk membeli boba.");
    }
}

function jajanSeblak(uang: number, callback: CallbackFunction): void {
    const hargaSeblak: number = 8000;

    if (uang >= hargaSeblak) {
        uang -= hargaSeblak;
        callback(hargaSeblak, uang);
    } else {
        console.log("Maaf uang kamu tidak cukup untuk membeli seblak.");
    }
}

function callbackFunction(harga: number, sisaUang: number): void {
    console.log(`kamu jajan dengan harga Rp. ${harga} sisa uang kamu Rp. ${sisaUang}`);
}

// Contoh penggunaan
jajanBoba(20000, callbackFunction);
jajanSeblak(20000, callbackFunction);

// Contoh dengan uang yang tidak mencukupi
jajanBoba(10000, callbackFunction);
jajanSeblak(10000, callbackFunction);
