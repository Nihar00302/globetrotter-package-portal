
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CustomerInquiry, PackageType } from "@/types";

interface ContactFormProps {
  packageItem: PackageType;
}

const ContactForm = ({ packageItem }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create customer inquiry data
    const inquiry: CustomerInquiry = {
      id: `inq_${Date.now()}`,
      timestamp: new Date().toISOString(),
      packageId: packageItem.id,
      packageName: packageItem.name,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      message: formData.message,
      status: "new"
    };

    // Get existing inquiries from localStorage or initialize empty array
    const existingInquiries = JSON.parse(localStorage.getItem("customerInquiries") || "[]");
    
    // Add new inquiry
    const updatedInquiries = [...existingInquiries, inquiry];
    
    // Save to localStorage
    localStorage.setItem("customerInquiries", JSON.stringify(updatedInquiries));

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Show success toast
    toast({
      title: "Inquiry Submitted!",
      description: "We'll contact you shortly about your travel plans.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific requirements or questions about this package?"
          rows={4}
        />
      </div>
      
      <Button type="submit" className="w-full">
        Submit Inquiry
      </Button>
    </form>
  );
};

export default ContactForm;
