import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {


  scannedData: {text: string, format: string, cancelled: boolean};

  scannerOptions: BarcodeScannerOptions;

  constructor( private barcodeScanner: BarcodeScanner ) {
  				    this.scannerOptions = {
     				 showTorchButton: true,
      				 showFlipCameraButton: true
    				};
  			  }

  scanCode(): Promise<String | BarcodeScanResult> {
    return this.barcodeScanner.scan().then(barcodeData => {
      // alert('Barcode data: ' + JSON.stringify(barcodeData));
      return barcodeData;
     }).catch(err => {
         return 'Error' + err;
     });
  }

//QR Generator
// encodedText(toEncode) {
//       this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, toEncode).then((encodedData) => {
//           console.log(encodedData);
//       }, (err) => {
//           console.log('Error occured : ' + err);
//       });                
//   }
}
