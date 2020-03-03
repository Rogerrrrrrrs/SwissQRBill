const SwissQRBill = require("../");

const sampleObject = {
  currency: "CHF",
  amount: 1199.95,
  reference: "21 00000 00003 13947 14300 09017",
  creditor: {
    name: "Robert Schneider AG",
    address: "Rue du Lac 1268",
    zip: 2501,
    city: "Biel",
    account: "CH4431999123000889012",
    country: "CH"
  },
  debitor: {
    name: "Pia-Maria Rutschmann-Schnyder",
    address: "Grosse Marktgasse 28",
    zip: 9400,
    city: "Rorschach",
    country: "CH"
  }
};

const bill = new SwissQRBill.PDF(sampleObject, "./output/qr-iban.pdf");