"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Car, Mail, Lock, AlertCircle, User, Phone } from "lucide-react"
import { login, signup, getCurrentUser } from "@/lib/auth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { validateEmail, validatePhone, validateAddress } from "@/lib/validation"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")

  // Sign In state
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  // Sign Up state
  const [signupName, setSignupName] = React.useState("")
  const [signupEmail, setSignupEmail] = React.useState("")
  const [signupPassword, setSignupPassword] = React.useState("")
  const [signupPhone, setSignupPhone] = React.useState("")
  const [signupAddress, setSignupAddress] = React.useState("")

  React.useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      router.push(`/${user.role}`)
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const result = login(email, password)

    if (result.success && result.user) {
      router.push(`/${result.user.role}`)
    } else {
      setError(result.error || "Login failed")
    }

    setIsLoading(false)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!signupName || !signupEmail || !signupPassword || !signupPhone || !signupAddress) {
      setError("All fields are required")
      setIsLoading(false)
      return
    }

    if (!validateEmail(signupEmail)) {
      setError("Invalid email address")
      setIsLoading(false)
      return
    }

    if (!validatePhone(signupPhone)) {
      setError("Invalid phone number")
      setIsLoading(false)
      return
    }

    if (!validateAddress(signupAddress)) {
      setError("Invalid address")
      setIsLoading(false)
      return
    }

    const result = signup(signupName, signupEmail, signupPassword, signupPhone, signupAddress)

    if (result.success && result.user) {
      router.push("/customer")
    } else {
      setError(result.error || "Signup failed")
    }

    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-primary/5 to-slate-900 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-3">
          <div className="mx-auto size-16 rounded-2xl bg-primary/10 backdrop-blur-xl flex items-center justify-center shadow-2xl border border-primary/20">
            <Car className="size-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">FleetManager</h1>
          <p className="text-muted-foreground">Emergency & General Fleet Booking System</p>
        </div>

        <Card className="border-none shadow-2xl overflow-hidden backdrop-blur-xl bg-card/95">
          <Tabs defaultValue="signin" className="w-full">
            <CardHeader className="space-y-4 pb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="space-y-6">
              <TabsContent value="signin" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>Sign in to access your dashboard</CardDescription>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="size-4 text-muted-foreground" /> Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@fleet.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock className="size-4 text-muted-foreground" /> Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>

                <div className="space-y-3 pt-4 border-t">
                  <p className="text-xs text-muted-foreground font-semibold">Demo Credentials:</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 rounded bg-muted/50">
                      <span className="font-medium">Admin:</span>
                      <span className="text-muted-foreground">admin@fleet.com / admin123</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-muted/50">
                      <span className="font-medium">Customer:</span>
                      <span className="text-muted-foreground">customer@fleet.com / customer123</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-muted/50">
                      <span className="font-medium">Driver:</span>
                      <span className="text-muted-foreground">driver@fleet.com / driver123</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <CardTitle>Create Customer Account</CardTitle>
                  <CardDescription>Sign up to book rides instantly</CardDescription>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="flex items-center gap-2">
                      <User className="size-4 text-muted-foreground" /> Full Name
                    </Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="flex items-center gap-2">
                      <Mail className="size-4 text-muted-foreground" /> Email
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="you@example.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-phone" className="flex items-center gap-2">
                      <Phone className="size-4 text-muted-foreground" /> Phone Number
                    </Label>
                    <Input
                      id="signup-phone"
                      type="tel"
                      placeholder="+1234567890"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-address" className="flex items-center gap-2">
                      Address
                    </Label>
                    <Input
                      id="signup-address"
                      type="text"
                      placeholder="123 Main St"
                      value={signupAddress}
                      onChange={(e) => setSignupAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="flex items-center gap-2">
                      <Lock className="size-4 text-muted-foreground" /> Password
                    </Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Create Customer Account"}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  Note: Only customers can sign up. Drivers are registered by admin.
                </p>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          © 2025 FleetManager. Emergency Medical Transport System.
        </p>
      </div>
    </div>
  )
}
