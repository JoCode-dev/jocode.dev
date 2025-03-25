"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // TODO: Add correct links (LinkedIn, TikTok, Coffee)
  // TODO: Send email to my personal email

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center bg-[#7B4AE2]/20 rounded-lg px-4 py-2">
        <h1 className="lg:text-2xl text-xl font-bold text-[#595CFF]">
          📬 Contactez-moi
        </h1>
      </div>
      <p className="lg:text-lg text-sm dark:text-[#E2E4E9] text-[#11191E] font-semibold lg:px-0 px-6 text-center">
        N&apos;hésitez pas à me contacter pour toute question ou opportunité.
      </p>

      <div className="flex md:flex-row flex-col justify-center items-center gap-4 lg:gap-14 w-full px-4 my-6 mt-12">
        {/* Form */}
        <Card className="lg:w-1/3 w-full">
          <CardHeader>
            <CardTitle>Laissez-moi un message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                        <Textarea
                          placeholder="Message"
                          {...field}
                          className="resize-none h-32"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Envoyer
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
          <Button className="w-[20rem] bg-[#7B4AE2] text-white py-4 cursor-pointer hover:bg-[#7B4AE2]/80 transition-all duration-300">
            <PhoneIcon className="w-4 h-4" />
            <p className="text-sm font-semibold tracking-tight">
              Parlons de votre projet
            </p>
          </Button>

          <p className="text-sm font-semibold tracking-tight mx-auto lg:w-[26rem] text-center lg:text-left px-4 lg:px-2 dark:text-[#E2E4E9] text-[#11191E]">
            Je suis ouvert aux opportunités de collaboration sur tout type de
            projet améliorant la qualité de vie des personnes à travers des
            solutions innovantes.
          </p>

          <span className="w-full h-[1px] bg-[#E2E4E9]"></span>

          <p className="text-sm font-semibold tracking-tight mx-auto lg:w-[26rem] text-center lg:text-left px-4 lg:px-2 dark:text-[#E2E4E9] text-[#11191E]">
            hello@jocode.dev
          </p>

          <div className="flex flex-row gap-2">
            <Link
              href="https://www.linkedin.com/in/ange-cédric-joël-duakon-587859186"
              target="_blank"
              className="hover:text-[#7B4AE2] transition-all duration-300"
            >
              <div className="flex flex-row items-center gap-2">
                <LinkedinIcon className="w-4 h-4" />
                <p className="text-sm font-semibold tracking-tight">LinkedIn</p>
              </div>
            </Link>

            <Link
              href="https://www.tiktok.com/@jocodedev"
              target="_blank"
              className="hover:text-[#7B4AE2] hover:[&_svg]:fill-[#7B4AE2] transition-all duration-300"
            >
              <div className="flex flex-row items-center gap-2">
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  className="w-4 h-4 dark:fill-[#E2E4E9] fill-[#11191E] transition-all duration-300"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>tiktok</title>{" "}
                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{" "}
                  </g>
                </svg>
                <p className="text-sm font-semibold tracking-tight">TikTok</p>
              </div>
            </Link>

            <Link
              href="https://buymeacoffee.com/cedricduak0"
              target="_blank"
              className="hover:text-[#7B4AE2] transition-all duration-300"
            >
              <div className="flex flex-row items-center gap-2">
                <CupSoda className="w-4 h-4" />
                <p className="text-sm font-semibold tracking-tight">
                  Buy me a coffee
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
