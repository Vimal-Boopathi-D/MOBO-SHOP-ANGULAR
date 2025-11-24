import { Component, AfterViewInit, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';





@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success.html',
  styleUrls: ['./success.scss'],
})
export class SuccessComponent implements AfterViewInit {
  @Input() isModal = false;
  @Input() paymentMethod: string = 'Paid';

  orderId: string = '';
  customer: any = {};
  items: any[] = [];
  amount: number = 0;

  private redirectTimer: any;

  constructor(private zone: NgZone, private router: Router) {}

  ngOnInit() {
    // Read stored values passed from CheckoutComponent
    this.orderId = localStorage.getItem('last_order_id') || '---';

    this.customer = JSON.parse(localStorage.getItem('last_customer') || '{}');
    this.items = JSON.parse(localStorage.getItem('last_items') || '[]');
    this.amount = Number(localStorage.getItem('last_amount') || 0);
  }

  ngAfterViewInit() {
    if (!this.isModal) {
      this.redirectTimer = setTimeout(() => {
        this.zone.run(() => this.router.navigate(['/products']));
      }, 8000);
    }
  }

  continueShopping() {
    clearTimeout(this.redirectTimer);
    if (!this.isModal) this.router.navigate(['/products']);
  }

  // ⚡ Generate Invoice PDF in Frontend
 async downloadInvoice() {
  const doc = new jsPDF("p", "mm", "a4");
  doc.setFont("helvetica", "normal");

    // ------------------ WATERMARK "PAID" ------------------
// ------------------ CONDITIONAL WATERMARK ------------------
if (this.paymentMethod.toLowerCase().includes("online")) {
  // ONLINE PAYMENT → Show PAID watermark
  doc.setFontSize(80);
  doc.setTextColor(230, 230, 230);
  doc.text("PAID",70, 230, { angle: 30 });

} else {
  // COD PAYMENT → Show COD watermark
  doc.setFontSize(70);
  doc.setTextColor(230, 230, 230);
  doc.text("COD", 70, 230, { angle: 30 });
}


  // ------------------ LOGO ------------------
const logoUrl = "../../../assets/images/mobo-logo.png";  
const logoBase64 = await this.loadImageAsBase64(logoUrl);

  // ------------------ HEADER BAR ------------------
  doc.setFillColor(220, 53, 69);
  doc.rect(0, 0, 210, 28, "F");
  doc.addImage(logoBase64, "PNG", 14, 6, 35, 20); 

  // Title on top bar
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("MOBO SHOP", 105, 20,{ align: "center" });

  doc.setTextColor(0);

  // ------------------ INVOICE TITLE ------------------
  doc.setFontSize(20);
  doc.text("INVOICE", 105, 45, { align: "center" });

  doc.setDrawColor(210);
  doc.line(14, 50, 196, 50);

  // ------------------ ORDER DETAILS ------------------
  doc.setFontSize(12);
  doc.text(`Order ID: ${this.orderId}`, 14, 62);
  doc.text(`Date: ${new Date().toLocaleString()}`, 14, 70);

  // ------------------ CUSTOMER BOX ------------------
  const addressText = doc.splitTextToSize(
    `Address: ${this.customer.address}, ${this.customer.city} - ${this.customer.pincode}`,
    170
  );

  const customerBoxHeight = 35 + addressText.length * 6;

  doc.setFillColor(248, 248, 248);
  doc.roundedRect(14, 78, 182, customerBoxHeight, 3, 3, "F");

  doc.setFontSize(14);
  doc.text("Billing Details", 18, 90);

  doc.setFontSize(12);
  doc.text(`Name: ${this.customer.name}`, 18, 104);
  doc.text(`Phone: ${this.customer.phone}`, 18, 112);
  doc.text(addressText, 18, 120);

  const tableStart = 78 + customerBoxHeight + 10;

  // ------------------ ITEMS TABLE ------------------
  autoTable(doc, {
    startY: tableStart,
    theme: "grid",
    styles: {
      fontSize: 11,
      cellPadding: 3,
      overflow: "linebreak",
    },
    headStyles: { fillColor: [220, 53, 69], textColor: 255 },
    columnStyles: {
      0: { halign: "left", cellWidth: 80 },  // Product
      1: { halign: "center", cellWidth: 20 }, // Qty
      2: { halign: "center", cellWidth: 40 }, // Price
      3: { halign: "center", cellWidth: 40 }, // Total
    },
    head: [["Product", "Qty", "Price", "Total"]],
    body: this.items.map(i => [
      i.name,
      i.qty?.toString() || "1",
      `Rs.${i.price}`,
      `Rs.${i.price * (i.qty || 1)}`
    ]),
  });

  const itemEndY = (doc as any).lastAutoTable.finalY + 10;

  // ------------------ GST TABLE ------------------
  const gst = Math.round(this.amount * 0.09); // 9% CGST + 9% SGST
  const totalWithGST = this.amount + gst + gst;

  autoTable(doc, {
    startY: itemEndY,
    theme: "plain",
    styles: { fontSize: 12 },
    columnStyles: {
      0: { halign: "left", cellWidth: 100 },
      1: { halign: "right", cellWidth: 80 }
    },
    body: [
      ["Subtotal", `Rs.${this.amount}`],
      ["CGST (9%)", `Rs.${gst}`],
      ["SGST (9%)", `Rs.${gst}`],
      ["Grand Total", `Rs.${totalWithGST}`],
    ],
  });

  const gstEndY = (doc as any).lastAutoTable.finalY + 15;


// ------------------ SIGNATURE BOX WITH IMAGE ------------------
try {
  const signatureUrl = "../../../assets/images/signature.jpeg";
  const signatureBase64 = await this.loadImageAsBase64(signatureUrl);

  doc.setDrawColor(150);
  doc.rect(140, gstEndY, 50, 25); // signature box outline

  // Insert the signature image inside the box
  doc.addImage(signatureBase64, "PNG", 142, gstEndY + 2, 46, 21);

  // Title below the signature
  doc.setFontSize(12);
  doc.text("Authorized Signature", 165, gstEndY + 35, { align: "center" });

} catch (error) {
  console.error("❌ Signature image failed to load:", error);

  // fallback text if image not loaded
  doc.setFontSize(12);
  doc.text("Signature Missing", 165, gstEndY + 15, { align: "center" });

  doc.text("Authorized Signature", 165, gstEndY + 35, { align: "center" });
}


  // ------------------ FOOTER ------------------
  doc.setFontSize(11);
  doc.setTextColor(120);
  doc.text(
    "Thank you for choosing Mobo Shop!",
    105,
    gstEndY + 60,
    { align: "center" }
  );

  doc.text(
    "Need help? Email support@moboshop.com",
    105,
    gstEndY + 67,
    { align: "center" }
  );

  doc.setFontSize(10);
  doc.setTextColor(160);
  doc.text(
    "© 2025 Mobo Shop. All Rights Reserved.",
    105,
    gstEndY + 75,
    { align: "center" }
  );

  doc.save(`Invoice-${this.orderId}.pdf`);
}


async loadImageAsBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

  startConfetti() {}
}
