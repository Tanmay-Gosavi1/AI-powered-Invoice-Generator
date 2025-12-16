import { BarChart2, FileText, Mail, Sparkles } from "lucide-react";

export const FEATURES = [
  {
    icon: Sparkles,
    title: "AI Invoice Creation",
    description:
      "Paste any text, email, or receipt, and let our AI instantly generate a complete, professional invoice.",
  },
  {
    icon: BarChart2,
    title: "AI-Powered Dashboard",
    description:
      "Get smart, actionable insights about your business finances, generated automatically.",
  },
  {
    icon: Mail,
    title: "Smart Reminders",
    description:
      "Automatically generate polite and effective payment reminder emails for overdue invoices.",
  },
  {
    icon: FileText,
    title: "Easy Invoice Management",
    description:
      "Easily manage all your invoices, track payments, and send reminders for overdue payments.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "This app saved me hours of work. I can now create and send invoices in minutes!",
    author: "Jane Doe",
    title: "Freelance Designer",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=JD"
  },
  {
    quote: "The best invoicing app I have ever used. Simple, intuitive, and powerful.",
    author: "John Smith",
    title: "Small Business Owner",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=JS"
  },
  {
    quote: "I love the dashboard and reporting features. It helps me keep track of my finances easily.", // Completed the truncated quote
    author: "Peter Jones",
    title: "Consultant",
    avatar: "https://placehold.co/100x100/000000/ffffff?text=PJ"
  },
];

export const FAQS = [
   {
    id: 1,
    question: "What is an AI-powered invoice generator?",
    answer:
      "An AI-powered invoice generator is a tool that automatically creates professional invoices using artificial intelligence. It helps auto-fill details, generate descriptions, suggest taxes, and reduce manual work."
  },
  {
    id: 2,
    question: "How does AI help in generating invoices?",
    answer:
      "AI helps by converting plain text into invoice items, generating professional descriptions, suggesting applicable taxes, detecting missing information, and improving overall accuracy."
  },
  {
    id: 3,
    question: "Can I download invoices as PDF?",
    answer:
      "Yes, you can generate and download invoices in PDF format, making them easy to share, print, or send to clients."
  },
  {
    id: 4,
    question: "Is my data secure?",
    answer:
      "Yes, your data is securely stored and protected using authentication and encrypted communication. We do not share your invoice data with third parties."
  },
  {
    id: 5,
    question: "Can I edit an invoice after creating it?",
    answer:
      "Yes, you can edit, update, or delete invoices at any time before sending or finalizing them."
  },
  {
    id: 6,
    question: "Does this support GST and taxes?",
    answer:
      "Yes, the system supports GST and other tax calculations. AI can also suggest applicable tax rates based on invoice type."
  },
  {
    id: 7,
    question: "Can AI generate invoice descriptions automatically?",
    answer:
      "Yes, AI can generate clear and professional invoice descriptions based on short inputs or service names."
  },
  {
    id: 8,
    question: "Is this suitable for freelancers and small businesses?",
    answer:
      "Absolutely. The app is designed for freelancers, startups, and small businesses who want to save time and reduce errors in invoicing."
  }
];