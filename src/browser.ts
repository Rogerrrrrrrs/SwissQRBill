import * as SwissQRBill_ from "./swissqrbill";
import BlobStream from "blob-stream";

module SwissQRBill {

  export import data = SwissQRBill_.data;
  export import debtor = SwissQRBill_.debtor;
  export import creditor = SwissQRBill_.creditor;
  export import options = SwissQRBill_.options;
  export import PDFTable = SwissQRBill_.PDFTable;
  export import PDFRow = SwissQRBill_.PDFRow;
  export import PDFColumn = SwissQRBill_.PDFColumn;
  export import currency = SwissQRBill_.currency;
  export import size = SwissQRBill_.size;
  export import languages = SwissQRBill_.languages;

  export import utils = SwissQRBill_.utils;

  export import blobStream = BlobStream;

  export class PDF extends SwissQRBill_.PDF {

    constructor(data: data, writeableStream: BlobStream.IBlobStream, options?: options)
    constructor(data: data, writeableStream: BlobStream.IBlobStream, options?: options, callback?: Function)
    constructor(data: data, writeableStream: BlobStream.IBlobStream, callback?: Function)
    constructor(data: data, writeableStream: BlobStream.IBlobStream, optionsOrCallback?: options | Function, callbackOrUndefined?: Function | undefined){

      let callback: Function | undefined = undefined;
      let options: options | undefined = undefined;

      if(typeof optionsOrCallback === "object"){

        options = optionsOrCallback;

        if(typeof callbackOrUndefined === "function"){
          callback = callbackOrUndefined;
        }

      } else if(typeof optionsOrCallback === "function"){
        callback = optionsOrCallback;
      }

      super(data, options);

      const stream = super.pipe(writeableStream);

      stream.on("finish", ev => {

        if(typeof callback === "function"){
          callback(this);
        }

        this.emit("finish", ev);

      });

    }

  }

}

export default SwissQRBill;