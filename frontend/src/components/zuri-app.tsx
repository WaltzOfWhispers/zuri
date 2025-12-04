"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SendForm } from "@/components/send-form"
import { LucideLogOut as ZuriLogo, Sparkles, ArrowRight, Info } from "lucide-react"

export function ZuriApp() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ethereal background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-sky-100/70" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl animate-glow" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 flex items-center justify-center">
                <ZuriLogo className="w-16 h-16 drop-shadow-lg" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">Zuri</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
            Send Privately. From Anywhere. To Anywhere.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={() => setIsConnected(!isConnected)}
              className="px-6 py-2.5 bg-foreground text-background hover:bg-foreground/90 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10"
            >
              {isConnected ? "Connected" : "Connect wallet"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground rounded-full px-5">
              <Info className="w-4 h-4 mr-2" />
              How it works
            </Button>
          </div>
        </header>

        {/* Main card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-200/50 via-cyan-200/50 to-sky-200/50 rounded-3xl blur-xl opacity-60" />

            {/* Glass card */}
            <div className="relative backdrop-blur-xl bg-card border border-border/50 rounded-3xl p-8 shadow-2xl shadow-teal-900/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <h2 className="text-xl font-medium text-foreground">Send privately</h2>
              </div>

              <SendForm />
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">Protected by zero-knowledge cryptography</p>
        </div>
      </div>
    </div>
  )
}
