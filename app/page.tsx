"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  Figma,
  Globe,
  Mail,
  Menu,
  Phone,
  X,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Handle smooth scrolling when clicking navigation links
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false) // Close mobile menu when a link is clicked

    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      const headerHeight = 64 // Height of the header in pixels

      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: "smooth",
      })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["clients", "services", "about", "contact"]
      const scrollPosition = window.scrollY + 100 // Add offset for header

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount to set initial active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation links data for reuse
  const navLinks = [
    { href: "clients", label: "Clients" },
    { href: "services", label: "Services" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 font-bold">
            <Code className="h-6 w-6 text-primary" />
            <span>DevStudio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <Button asChild className="hidden md:inline-flex" onClick={() => scrollToSection("contact")}>
            <button>Get in Touch</button>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center space-x-2 font-bold">
                    <Code className="h-6 w-6 text-primary" />
                    <span>DevStudio</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-lg font-medium text-left transition-colors hover:text-primary ${
                        activeSection === link.href ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
                <Button className="mt-8" onClick={() => scrollToSection("contact")}>
                  Get in Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Crafting Digital Experiences That <span className="text-primary">Inspire</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We design and develop stunning websites that help businesses stand out in the digital landscape.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button onClick={() => scrollToSection("clients")}>View Our Work</Button>
                  <Button variant="outline" onClick={() => scrollToSection("contact")}>
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Client Showcase */}
        <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Our <span className="text-primary">Clients</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We've had the pleasure of working with amazing clients across various industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* Client 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-secondary/50">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Client Project 1"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Eco Solutions</h3>
                  <p className="text-sm text-muted-foreground">E-commerce Website</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A modern e-commerce platform for a sustainable products company.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Client 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-secondary/50">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Client Project 2"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Fintech Innovators</h3>
                  <p className="text-sm text-muted-foreground">Web Application</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A secure and intuitive financial dashboard for tracking investments.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Client 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-secondary/50">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Client Project 3"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Health & Wellness</h3>
                  <p className="text-sm text-muted-foreground">Branding & Website</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Complete brand identity and website for a wellness center.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Client 4 */}
              <div className="group relative overflow-hidden rounded-lg border bg-secondary/50">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Client Project 4"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Creative Agency</h3>
                  <p className="text-sm text-muted-foreground">Portfolio Website</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A dynamic portfolio showcasing creative work and services.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Client 5 */}
              <div className="group relative overflow-hidden rounded-lg border bg-secondary/50">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Client Project 5"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Tech Startup</h3>
                  <p className="text-sm text-muted-foreground">SaaS Platform</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A scalable SaaS platform with user dashboard and analytics.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Client 6 */}
              <div className="group relative overflow-hidden rounded-lg border bg-secondary/50">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Client Project 6"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Luxury Real Estate</h3>
                  <p className="text-sm text-muted-foreground">Property Website</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    An elegant website showcasing luxury properties with virtual tours.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Our <span className="text-primary">Services</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We offer a comprehensive range of digital services to help your business succeed online.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* Service 1 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-secondary/50 p-6">
                <div className="rounded-full bg-primary/20 p-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-center text-muted-foreground">
                  Custom websites built with the latest technologies for optimal performance and user experience.
                </p>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-secondary/50 p-6">
                <div className="rounded-full bg-primary/20 p-4">
                  <Figma className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">UI/UX Design</h3>
                <p className="text-center text-muted-foreground">
                  Intuitive and engaging user interfaces that enhance user experience and drive conversions.
                </p>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-secondary/50 p-6">
                <div className="rounded-full bg-primary/20 p-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">E-commerce Solutions</h3>
                <p className="text-center text-muted-foreground">
                  Scalable online stores with secure payment gateways and inventory management systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Team Photo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    About <span className="text-primary">Us</span>
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    We're a team of passionate designers and developers dedicated to creating exceptional digital
                    experiences.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Founded in 2018, our studio has grown from a small team of freelancers to a full-service digital
                    agency. We believe in the power of thoughtful design and clean code to transform businesses and
                    engage users.
                  </p>
                  <p className="text-muted-foreground">
                    Our approach combines creativity with technical expertise to deliver solutions that not only look
                    great but also perform exceptionally well. We're committed to staying at the forefront of web
                    technologies and design trends to provide our clients with cutting-edge digital products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Redesigned */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 pointer-events-none"></div>

          {/* Purple glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] opacity-50 pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Let's <span className="text-primary">Connect</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Ready to transform your digital presence? We're just a message away.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Contact Card 1 */}
              <Card className="bg-secondary/50 border border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-primary/20 p-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-4">For project inquiries and general questions</p>
                    <a
                      href="mailto:hello@devstudio.com"
                      className="text-primary hover:underline flex items-center justify-center"
                    >
                      hello@devstudio.com
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card 2 */}
              <Card className="bg-secondary/50 border border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-primary/20 p-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-4">Monday to Friday, 9am - 6pm EST</p>
                    <a
                      href="tel:+15551234567"
                      className="text-primary hover:underline flex items-center justify-center"
                    >
                      +1 (555) 123-4567
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card 3 */}
              <Card className="bg-secondary/50 border border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-primary/20 p-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-4">Our studio in downtown tech district</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center justify-center"
                    >
                      123 Design Street, Creative City
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="inline-block rounded-full bg-primary/10 px-6 py-2 mb-6">
                <p className="text-primary text-sm font-medium">Start a project with us</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to bring your vision to life?</h3>
              <Button size="lg" className="px-8 py-6 text-base">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Media Links */}
            <div className="mt-16 flex flex-col items-center">
              <h3 className="text-xl font-medium mb-6">Connect With Us</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="rounded-full bg-secondary/80 p-3 hover:bg-primary/20 transition-colors duration-300"
                >
                  <Github className="h-6 w-6 text-foreground hover:text-primary" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-secondary/80 p-3 hover:bg-primary/20 transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6 text-foreground hover:text-primary" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-secondary/80 p-3 hover:bg-primary/20 transition-colors duration-300"
                >
                  <Twitter className="h-6 w-6 text-foreground hover:text-primary" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-secondary/80 p-3 hover:bg-primary/20 transition-colors duration-300"
                >
                  <Instagram className="h-6 w-6 text-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 DevStudio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-primary">Privacy Policy</button>
            <button className="text-sm font-medium hover:text-primary">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
