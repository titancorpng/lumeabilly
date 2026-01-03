import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Download, Printer, Copy, Check, Image as ImageIcon } from "lucide-react";
import { formatPrice } from "@/lib/products";
import html2canvas from "html2canvas";

interface OrderData {
  orderNumber: string;
  date: string;
  time: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  deliveryFee: number;
  total: number;
}

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get order data from localStorage
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    } else {
      // If no order data, redirect to home
      navigate('/');
    }
  }, [navigate]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadImage = async () => {
    if (!invoiceRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
      });
      
      const link = document.createElement('a');
      link.download = `invoice-${orderData?.orderNumber || 'order'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string, account: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(account);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  if (!orderData) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Hidden on print */}
      <div className="no-print bg-primary text-primary-foreground py-4 border-b border-primary/20">
        <div className="container-wide">
          <h1 className="font-serif text-2xl">LUMÉABILLY</h1>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-wide max-w-4xl">
          {/* Success Message - Hidden on print */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="no-print text-center mb-8"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Order Confirmed!
            </h1>
            <p className="text-muted-foreground mb-4">
              Thank you for your purchase. Your order details are below.
            </p>
            
            {/* Next Steps Alert */}
            <div className="max-w-2xl mx-auto bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
              <p className="text-sm font-medium text-yellow-800 mb-2">📋 Next Steps:</p>
              <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                <li>Download or screenshot this invoice</li>
                <li>Make payment via bank transfer</li>
                <li>Send this invoice + payment proof to Bilkisu Mustapha Sani via WhatsApp or Email</li>
                <li>Wait for order confirmation and delivery details</li>
              </ol>
            </div>
          </motion.div>

          {/* Action Buttons - Hidden on print */}
          <div className="no-print flex justify-end gap-3 mb-6">
            <button
              onClick={handleDownloadImage}
              disabled={isGenerating}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-secondary/50 transition-colors disabled:opacity-50"
            >
              <ImageIcon className="h-4 w-4" />
              {isGenerating ? 'Generating...' : 'Save as Image'}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-secondary/50 transition-colors"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              Save as PDF
            </button>
          </div>

          {/* Invoice - This is what gets captured */}
          <motion.div
            ref={invoiceRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="invoice-content bg-white border border-border rounded-lg p-8 shadow-soft"
          >
            {/* Invoice Header */}
            <div className="border-b border-border pb-6 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-2">INVOICE</h2>
                  <p className="text-sm text-muted-foreground">Order #{orderData.orderNumber}</p>
                  <p className="text-sm text-muted-foreground">{orderData.date} at {orderData.time}</p>
                </div>
                <div className="text-right">
                  <h3 className="font-serif text-xl text-primary mb-1">LUMÉABILLY</h3>
                  <p className="text-sm text-muted-foreground">Premium Skincare Products</p>
                  <p className="text-sm text-muted-foreground">Nigeria</p>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pb-6 border-b border-border">
              <div>
                <h3 className="font-medium text-foreground mb-3">Bill To:</h3>
                <p className="text-sm text-foreground font-medium">{orderData.customer.name}</p>
                <p className="text-sm text-muted-foreground">{orderData.customer.phone}</p>
                <p className="text-sm text-muted-foreground mt-2">{orderData.customer.address}</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Payment Status:</h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Pending Payment
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-sm font-medium text-muted-foreground">Item</th>
                    <th className="text-center py-3 text-sm font-medium text-muted-foreground">Qty</th>
                    <th className="text-right py-3 text-sm font-medium text-muted-foreground">Price</th>
                    <th className="text-right py-3 text-sm font-medium text-muted-foreground">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.items.map((item, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="py-4 text-foreground">{item.name}</td>
                      <td className="py-4 text-center text-muted-foreground">{item.quantity}</td>
                      <td className="py-4 text-right text-muted-foreground">{formatPrice(item.price)}</td>
                      <td className="py-4 text-right text-foreground font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-6">
              <div className="w-full md:w-1/2">
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="text-foreground">{formatPrice(orderData.subtotal)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Delivery Fee:</span>
                  <span className="text-foreground">{formatPrice(orderData.deliveryFee)}</span>
                </div>
                <div className="flex justify-between py-3 border-t border-border">
                  <span className="font-medium text-foreground text-lg">Total:</span>
                  <span className="font-bold text-primary text-xl">{formatPrice(orderData.total)}</span>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  💳
                </span>
                Payment Instructions
              </h3>
              
              {/* Important Notice */}
              <div className="bg-primary text-primary-foreground rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">📧 Important: Complete Your Order</p>
                <p className="text-sm">
                  Please send a screenshot of this invoice along with your payment proof (if paying via transfer) to:
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-sm font-medium">Bilkisu Mustapha Sani</p>
                  <p className="text-sm">WhatsApp: +234 703 210 2494</p>
                  <p className="text-sm">Email: bilqisms94@gmail.com</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Transfer the total amount to any of the accounts below or choose payment on delivery:
              </p>
              
              <div className="space-y-3">
                {/* OPay Account */}
                <div className="bg-background rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1">OPAY</p>
                      <p className="font-mono font-bold text-foreground text-lg mb-1">7032102494</p>
                      <p className="text-sm text-muted-foreground">BILKISU MUSTAPHA SANI</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('7032102494', 'opay')}
                      className="no-print p-2 hover:bg-secondary/50 rounded-md transition-colors"
                      title="Copy account number"
                    >
                      {copiedAccount === 'opay' ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Keystone Bank Account */}
                <div className="bg-background rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1">KEYSTONE BANK</p>
                      <p className="font-mono font-bold text-foreground text-lg mb-1">6024579573</p>
                      <p className="text-sm text-muted-foreground">BILKISU MUSTAPHA SANI</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('6024579573', 'keystone')}
                      className="no-print p-2 hover:bg-secondary/50 rounded-md transition-colors"
                      title="Copy account number"
                    >
                      {copiedAccount === 'keystone' ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-background rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Payment on Delivery:</span> You can also choose to pay when your order arrives.
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
              <p>Thank you for choosing LUMÉABILLY!</p>
              <p className="mt-1">For inquiries, please contact us through our website.</p>
            </div>
          </motion.div>

          {/* Action Buttons - Hidden on print */}
          <div className="no-print mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors rounded-md"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="border border-primary text-primary px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded-md"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .invoice-content, .invoice-content * {
            visibility: visible;
          }
          .invoice-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
            box-shadow: none !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            size: A4;
            margin: 1.5cm;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderConfirmation;