"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useState } from "react"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, "Minimum 2 characters").max(50),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Minimum 10 characters")
})

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values)
      })
      if (response.ok) setIsSubmitted(true)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-14">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-8 border-2 border-black dark:border-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-12 h-12 border-2 border-black dark:border-white mb-4"
          >
            <Check className="w-5 h-5" />
          </motion.div>
          <h4 className="text-lg font-medium mb-1">Message sent</h4>
          <p className="text-sm">I&apos;ll respond within 24 hours</p>
        </motion.div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {['name', 'email', 'message'].map((fieldName, i) => (
              <motion.div
                key={fieldName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <FormField
                  control={form.control}
                  name={fieldName as keyof z.infer<typeof formSchema>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">
                        {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                      </FormLabel>
                      <FormControl>
                        {fieldName === 'message' ? (
                          <Textarea
                            placeholder="Message"
                            rows={5}
                            {...field}
                            className="border-2 border-black dark:border-white rounded-none bg-transparent focus:border-black focus:dark:border-white transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
                          />
                        ) : (
                          <Input
                            placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                            type={fieldName === 'email' ? 'email' : 'text'}
                            {...field}
                            className="border-2 border-black dark:border-white rounded-none bg-transparent focus:border-black focus:dark:border-white transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
                          />
                        )}
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>
            ))}

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <Button
                type="submit"
                variant="ghost"
                className="w-full border-2 border-black dark:border-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </Form>
      )}
    </div>
  )
}