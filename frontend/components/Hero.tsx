"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-center"
      >
        <h1 className="text-7xl font-bold leading-tight">
          Your AI Powered
          <br />
          Wardrobe Intelligence
        </h1>

        <p className="text-xl text-neutral-600 mt-8">
          Understand your wardrobe.
          Build better outfits.
          Shop smarter.
        </p>

        <button className="mt-10 bg-black text-white px-8 py-4 rounded-2xl">
          Start Free
        </button>
      </motion.div>
    </section>
  );
}