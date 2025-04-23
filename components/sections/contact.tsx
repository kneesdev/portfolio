"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { motion } from "framer-motion";
import { CheckCircleIcon, MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(6, "Message must be at least 6 characters")
});

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful }
    } = useForm({ resolver: zodResolver(contactSchema) });

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setSubmitStatus("success")
            } else {
                setSubmitStatus("error")
            }
        } catch (error) {
            console.error("Failed to send message:", error)
            setSubmitStatus("error")
        }

        setIsSubmitting(false)
    };

    return (
        <section
            id="contact"
            className="px-6 sm:px-12 py-24 max-w-3xl mx-auto text-zinc-300"
        >
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl font-medium tracking-tight text-primary/70 mb-8 text-center"
            >
                Let&apos;s Build Something <span className="font-semibold text-primary">Great</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                className="text-lg mb-12 text-center max-w-xl mx-auto"
            >
                My inbox is always open for starting a project, collaborating on something cool, or just chatting.
            </motion.p>

            {isSubmitSuccessful ? (
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                >
                    <Card className="bg-zinc-900/50 border">
                        <CardContent className="py-2 text-center space-y-6">
                            <div className="inline-flex items-center justify-center size-16 bg-green-950 rounded-full text-white">
                                <CheckCircleIcon className="size-8 text-green-600" />
                            </div>
                            <p className="text-muted-foreground"><span className="font-medium text-primary">Thank you for reaching out!</span><br />I will get back to you as soon as I decide to open my inbox.</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ) : (
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                >
                    <Card className="bg-zinc-900/50 border">
                        <CardContent className="py-2 space-y-6">
                            <div>
                                <Label htmlFor="name" className="mb-2 text-sm font-medium text-white">Name</Label>
                                <Input placeholder="John Doe" {...register("name")} />
                                {errors.name && <p className="text-destructive text-sm mt-2">{errors.name.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="name" className="mb-2 text-sm font-medium text-white">Email address</Label>
                                <Input type="email" placeholder="me@domain.com" {...register("email")} />
                                {errors.email && <p className="text-destructive text-sm mt-2">{errors.email.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="name" className="mb-2 text-sm font-medium text-white">Message</Label>
                                <Textarea rows={6} {...register("message")} />
                                {errors.message && <p className="text-destructive text-sm mt-2">{errors.message.message}</p>}
                            </div>
                            <div className="pt-2 text-center">
                                <motion.div
                                    className="w-fit mx-auto"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.96 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                >
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex justify-center items-center">
                                                <Spinner size="sm" className="bg-black mr-2" /> Hold tight...
                                            </div>
                                        ) : (
                                            "Submit message"
                                        )}
                                    </Button>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.form>
            )}

            {!isSubmitSuccessful && (
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mb-4">or send me an email</p>
                    <a
                        href="mailto:kneesdev@naver.com"
                        className="inline-flex items-center gap-3 justify-center text-sm font-medium text-primary hover:underline"
                    >
                        <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <MailIcon className="w-5 h-5 text-primary" />
                        </span>
                        kneesdev@naver.com
                    </a>
                </div>
            )}
        </section>
    );
};