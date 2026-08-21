"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { productInterestOptions } from "@/content/contact";

export function ContactInquiryForm() {
  const [open, setOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2"><Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Full Name <span className="text-red-500">*</span></Label><Input id="fullName" name="fullName" required placeholder="Your full name" className="rounded-xl" /></div>
          <div className="space-y-2"><Label htmlFor="company" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Company / Organization</Label><Input id="company" name="company" placeholder="Optional" className="rounded-xl" /></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2"><Label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Email <span className="text-red-500">*</span></Label><Input id="email" name="email" type="email" required placeholder="you@example.com" className="rounded-xl" /></div>
          <div className="space-y-2"><Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Phone</Label><Input id="phone" name="phone" type="tel" placeholder="Your phone number" className="rounded-xl" /></div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="interest" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Product Interest</Label>
          <select id="interest" name="interest" className="h-10 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring" defaultValue="">
            <option value="" disabled>Select a product series</option>
            {productInterestOptions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <div className="space-y-2"><Label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Project Requirements  <span className="text-red-500">*</span></Label><Textarea id="message" name="message" required className="min-h-32 resize-none rounded-xl" placeholder="Describe your load requirements, application context, and preferred installation timeline." /></div>
        <Button type="submit" size="lg" className="w-full rounded-xl bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-light)] font-bold text-white shadow-xl shadow-[var(--brand-orange)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[var(--brand-orange)]/40"><Send className="mr-2 size-4" />Submit Inquiry</Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-5 p-7 sm:max-w-md" showCloseButton>
          <DialogHeader className="items-center text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]"><CheckCircle2 className="size-7" /></span>
            <DialogTitle className="text-xl font-bold text-primary">Inquiry received</DialogTitle>
            <DialogDescription className="leading-relaxed">Thank you for contacting Fedho Power Solution PLC. This demonstration form confirms that your inquiry is ready to be received in production.</DialogDescription>
          </DialogHeader>
          <DialogFooter showCloseButton />
        </DialogContent>
      </Dialog>
    </>
  );
}
