"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"; // Assuming you have a useToast hook
import { useState } from "react";

export function ContactFormDialog() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);

  const { toast } = useToast(); // Hook for triggering toasts

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);

    const salesforceUrl =
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";

    const payload = new URLSearchParams({
      oid: "00D0900000Bv1xu", // Salesforce organization ID
      retURL: "https://cloud-shapers.netlify.app/",
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      company: formData.company,
    });

    try {
      const response = await fetch(salesforceUrl, {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        // Show success message
        toast({
          title: "Success!",
          description: "Thank you for contacting us! We'll be in touch.",
          variant: "default",
        });
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          company: "",
        });
      } else {
        // Show error message
        toast({
          title: "Error",
          description: "There was an error submitting the form. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Show network error
      toast({
        title: "Network Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Center the button */}
        <div className="flex justify-center">
          <Button className="w-full lg:w-64 xl-2:text-3xl xl-2:p-8 max-w-sm bg-darkGreyColor/80 text-background text-center">
            Contact Us
          </Button>
        </div>
      </DialogTrigger>

      {/* Adjusted dialog content */}
      <DialogContent className="sm:max-w-[525px] bg-gradient-to-b from-gradientFrom to-gradientTo p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-darkGreyColor text-center text-lg lg:text-3xl">
            Contact Us
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          {/* First Name Input */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="first_name" className="text-darkGreyColor">
              First Name
            </Label>
            <Input
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full bg-white text-darkGreyColor"
              required
            />
          </div>

          {/* Last Name Input */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="last_name" className="text-darkGreyColor">
              Last Name
            </Label>
            <Input
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full bg-white text-darkGreyColor"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-darkGreyColor">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-white text-darkGreyColor"
              required
            />
          </div>

          {/* Company Input */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="company" className="text-darkGreyColor">
              Company
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              className="w-full bg-white text-darkGreyColor"
              required
            />
          </div>

          {/* Adjust "Send" button to match the input field width */}
          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-darkGreyColor text-white flex justify-center"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
