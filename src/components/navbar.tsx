"use client"

import Link from "next/link"
import { itemsNavbar } from "../../data"
import { ButtonToggleTheme } from "./toggle-theme"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils" // Asegúrate de tener esta utilidad

export const NavBar = () => {
    const pathname = usePathname()

    return (
        <nav className="fixed z-50 w-full flex items-center justify-center bottom-6 inset-x-0 px-4">
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ y: 120, opacity: 0, scale: 0.9 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                            type: "spring",
                            damping: 25,
                            stiffness: 350,
                            mass: 0.5
                        }
                    }}
                    exit={{ y: 120, opacity: 0 }}
                    className={cn(
                        "flex items-center px-4 py-2 rounded-full shadow-xl",
                        "backdrop-blur-3xl bg-white dark:bg-transparent",
                        "border border-gray-900 dark:border-white",
                        "shadow-gray-500/10 dark:shadow-black/30"
                    )}
                    style={{
                        backdropFilter: 'blur(28px) saturate(200%)',
                        WebkitBackdropFilter: 'blur(28px) saturate(200%)',
                        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    {itemsNavbar.map((item) => (
                        <motion.div
                            key={item.id}
                            className="relative px-1"
                            whileHover="hover"
                            whileTap="tap"
                            variants={{
                                hover: {
                                    y: -4,
                                    transition: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 15
                                    }
                                },
                                tap: { scale: 0.9 }
                            }}
                        >
                            <Link
                                href={item.link}
                                className={cn(
                                    "flex items-center justify-center w-11 h-11 rounded-full transition-all",
                                    "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
                                    pathname === item.link && "text-indigo-600 dark:text-indigo-400"
                                )}
                                aria-label={item.title}
                            >
                                <div className="relative z-10">
                                    {item.icon}
                                </div>

                                <AnimatePresence>
                                    {pathname === item.link && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-indigo-100/60 dark:bg-indigo-900/30 rounded-full"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.8, opacity: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 25
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        className="h-8 w-[1px] mx-1.5 bg-gradient-to-b from-transparent via-gray-300/50 dark:via-gray-700/30 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.5 }
                        }}
                    />

                    <motion.div
                        className="px-1"
                        whileHover={{
                            rotate: 12,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ButtonToggleTheme />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </nav>
    )
}