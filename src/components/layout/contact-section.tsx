"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CupSoda, LinkedinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().optional(),
  message: z.string().min(1, "Le message est requis")
});

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          googleSheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "your-sheet-id",
          name: values.name,
          message: values.message,
          contact: values.email || "Non fourni",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setSubmitStatus({
        type: "success",
        message: "Message envoyé avec succès !",
      });

      // Réinitialiser le formulaire
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Une erreur est survenue",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="flex items-center justify-center font-sans bg-gray-50 dark:bg-black py-10">
      <div className="bg-white dark:bg-black rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-5xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
        <main className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          {/* Left: Texte d'intro */}
          <div className="text-center md:text-left md:w-1/2 z-10 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
              📬 Contactez-moi
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
              N&apos;hésitez pas à me contacter pour toute question ou opportunité.
            </p>
            <div className="mt-8 flex flex-col gap-4 justify-center items-center md:items-start">
              <Button className="w-[20rem] bg-[#7B4AE2] text-white py-4 cursor-pointer hover:bg-[#7B4AE2]/80 transition-all duration-300"
                onClick={() => {
                  window.open("https://wa.me/2250788466748?text=Bonjour, je souhaite obtenir des informations sur vos services de développement.", "_blank");
                }}>
                <PhoneIcon className="w-4 h-4" />
                <p className="text-sm font-semibold tracking-tight">Parlons de votre projet</p>
              </Button>

              <p className="text-sm font-semibold tracking-tight md:w-[26rem] text-center md:text-left px-4 md:px-0 dark:text-[#E2E4E9] text-[#11191E]">
                Je suis ouvert aux opportunités de collaboration sur tout type de projet améliorant la qualité de vie des personnes à travers des solutions innovantes.
              </p>

              <span className="w-full h-[1px] bg-[#E2E4E9]"></span>

              <p className="text-sm font-semibold tracking-tight md:w-[26rem] text-center md:text-left px-4 md:px-0 dark:text-[#E2E4E9] text-[#11191E]">
                hello@jocode.tech
              </p>

              <div className="flex flex-row gap-4 text-gray-500 dark:text-gray-400 text-lg">
                <Link href="https://www.linkedin.com/in/ange-cédric-joël-duakon-587859186" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                  <div className="flex flex-row items-center gap-2">
                    <LinkedinIcon className="w-4 h-4" />
                    <p className="text-sm font-semibold tracking-tight">LinkedIn</p>
                  </div>
                </Link>
                <Link href="https://www.tiktok.com/@jocodedev" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                  <div className="flex flex-row items-center gap-2">
                    <svg fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                    </svg>
                    <p className="text-sm font-semibold tracking-tight">TikTok</p>
                  </div>
                </Link>
                <Link href="https://buymeacoffee.com/cedricduak0" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                  <div className="flex flex-row items-center gap-2">
                    <CupSoda className="w-4 h-4" />
                    <p className="text-sm font-semibold tracking-tight">Buy me a coffee</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Carte formulaire */}
          <Card className="md:w-1/2 w-full">
            <CardHeader>
              <CardTitle>Laissez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus.type && (
                <div
                  className={`mb-4 p-3 rounded-md text-sm ${submitStatus.type === "success"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Message" {...field} className="resize-none h-32" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </main>
      </div>
    </section>
  );
};
