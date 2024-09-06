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

export function ContactFormDialog() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Center the button */}
        <div className="flex justify-center">
          <Button className="w-full lg:w-64  max-w-sm bg-darkGreyColor/80 text-background text-center">
            Contact Us
          </Button>
        </div>
      </DialogTrigger>

      {/* Adjusted dialog content */}
      <DialogContent className="sm:max-w-[525px] bg-gradient-to-b from-gradientFrom to-gradientTo p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-darkGreyColor text-center text-lg lg:text-3xl ">Contact Us</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          {/* First Name Input */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="firstname" className="text-darkGreyColor">
              First Name
            </Label>
            <Input
              id="firstname"
              placeholder="Enter your first name"
              className="w-full bg-white text-darkGreyColor"
              required
            />
          </div>

          {/* Last Name Input */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="lastname" className="text-darkGreyColor">
              Last Name
            </Label>
            <Input
              id="lastname"
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
            >
              Send
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
