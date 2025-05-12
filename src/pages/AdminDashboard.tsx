
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CustomerInquiry } from "@/types";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<CustomerInquiry[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if admin is authenticated
    const adminAuth = localStorage.getItem("adminAuthenticated");
    if (!adminAuth || adminAuth !== "true") {
      navigate("/admin");
      return;
    }
    
    setIsAuthenticated(true);
    
    // Load customer inquiries from localStorage
    const storedInquiries = JSON.parse(localStorage.getItem("customerInquiries") || "[]");
    setInquiries(storedInquiries);
  }, [navigate]);
  
  const updateInquiryStatus = (id: string, status: "new" | "contacted" | "closed") => {
    const updatedInquiries = inquiries.map(inquiry => 
      inquiry.id === id ? { ...inquiry, status } : inquiry
    );
    
    setInquiries(updatedInquiries);
    localStorage.setItem("customerInquiries", JSON.stringify(updatedInquiries));
    
    toast({
      title: "Status updated",
      description: `Inquiry status changed to ${status}`,
    });
  };
  
  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin");
  };
  
  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }
  
  const StatusBadge = ({ status }: { status: string }) => {
    switch(status) {
      case "new":
        return <Badge>New</Badge>;
      case "contacted":
        return <Badge variant="secondary">Contacted</Badge>;
      case "closed":
        return <Badge variant="outline">Closed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary text-white py-8">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-6">Customer Inquiries</h2>
          
          {inquiries.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell>{formatDate(inquiry.timestamp)}</TableCell>
                      <TableCell>{inquiry.customerName}</TableCell>
                      <TableCell>
                        <div>{inquiry.customerEmail}</div>
                        <div>{inquiry.customerPhone}</div>
                      </TableCell>
                      <TableCell>{inquiry.packageName}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {inquiry.message || "No message"}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={inquiry.status} />
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateInquiryStatus(inquiry.id, "contacted")}
                            disabled={inquiry.status === "contacted"}
                          >
                            Mark Contacted
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateInquiryStatus(inquiry.id, "closed")}
                            disabled={inquiry.status === "closed"}
                          >
                            Close
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <h3 className="text-xl font-medium mb-2">No inquiries yet</h3>
              <p className="text-muted-foreground">
                Customer inquiries will appear here when customers submit their contact details.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
