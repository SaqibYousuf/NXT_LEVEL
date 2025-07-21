import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppFooter } from "@/components/app-footer"
import { ArrowRight, Users, BarChart3, Building2, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const portals = [
    {
      title: "Customer Portal",
      description: "Track your projects, manage referrals, and communicate with our team.",
      icon: Users,
      href: "/customer",
      color: "bg-blue-500",
      features: ["Project Tracking", "Referral Management", "Direct Communication", "Document Access"],
    },
    {
      title: "Sales Rep Portal",
      description: "Submit jobs, track performance, and manage your sales pipeline.",
      icon: UserCheck,
      href: "/sales-rep",
      color: "bg-green-500",
      features: ["Job Submission", "Performance Tracking", "Pipeline Management", "Commission Tracking"],
    },
    {
      title: "Dealer Portal",
      description: "Monitor your sales team and analyze performance metrics.",
      icon: BarChart3,
      href: "/dealer",
      color: "bg-purple-500",
      features: ["Team Management", "Performance Analytics", "Custom Dashboards", "Reporting Tools"],
    },
    {
      title: "Company Portal",
      description: "Oversee all operations, manage workflows, and track company-wide metrics.",
      icon: Building2,
      href: "/company",
      color: "bg-orange-500",
      features: ["Job Monitoring", "Workflow Management", "Smartsheet Integration", "Company Analytics"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <Image src="/images/nxt-logo.png" alt="NXT Logo" width={40} height={40} className="h-10 w-auto" priority />
            <div>
              <h1 className="text-xl font-bold">NXT Portal</h1>
              <p className="text-xs text-muted-foreground">Business Management Platform</p>
            </div>
          </div>
          <Button asChild>
            <Link href="/auth/login">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to <span className="text-primary">NXT Portal</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Streamline your business operations with our comprehensive multi-portal platform designed for customers,
            sales representatives, dealers, and company management.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/login">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Choose Your Portal</h2>
          <p className="text-muted-foreground mt-4">Access the tools and information you need based on your role</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portals.map((portal) => (
            <Card
              key={portal.title}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-lg ${portal.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <portal.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{portal.title}</CardTitle>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {portal.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href={portal.href}>
                    Access Portal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose NXT Portal?</h2>
            <p className="text-muted-foreground mt-4">Built for efficiency, designed for growth</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Role-Based Access</h3>
              <p className="text-muted-foreground">
                Customized experiences for each user type with appropriate permissions and tools.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Analytics</h3>
              <p className="text-muted-foreground">
                Track performance, monitor progress, and make data-driven decisions with live dashboards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Integrated Workflows</h3>
              <p className="text-muted-foreground">
                Streamlined processes that connect all aspects of your business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppFooter />
    </div>
  )
}
