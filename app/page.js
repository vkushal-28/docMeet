import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-background ">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 transition-all duration-500 ease-in-out delay-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2  items-center ">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-800/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium">
                Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground   max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/30 hover:bg-muted/80">
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative  w-full flex rounded-xl overflow-hidden justify-center md:justify-end lg:justify-center max-sm:hidden">
              {/* <div className="w-full z-10"> */}
              <img
                src={"/doc11.jpg"}
                className="h-full rounded-tl-[40%] rounded-br-[30%] "
              />
              {/* <Image
                src="/banner2.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-cover absolute  w-full  rounded-xl"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/35 smooth-transition ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground  max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-emerald-700/20 hover:border-emerald-700/60 transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/80">
                <CardHeader className="pb-2">
                  <div className="bg-emerald-800/25 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with green medical styling */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-800/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation package that fits your healthcare
              needs
            </p>
          </div>

          <div className="mx-auto">
            {/* Clerk Pricing Table */}
            <Pricing />

            {/* Description */}
            <Card className="mt-12 bg-muted/20 border-emerald-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials with green medical accents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-800/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who use our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-emerald-900/20 hover:border-emerald-800/40 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-800/20 flex items-center justify-center mr-4">
                      <span className="text-emerald-400 font-bold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with green medical styling */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-teal-950 via-emerald-900 to-emerald-700 border-emerald-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should be.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-emerald-700/30 hover:bg-muted/80">
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>


              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
            </CardContent>
          </Card>
        </div>
      </section> */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="relative isolate overflow-hidden bg-emerald-950/60 py-8 sm:py-12 lg:py-16 rounded-2xl ">
            <div className="mx-auto px-4 lg:px-14 ">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8  lg:max-w-none ">
                <div className="max-w-2xl relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to take control of your healthcare?
                  </h2>
                  <p className=" text-muted-foreground mb-8 w-full md:w-[70%] lg:w-[80%] xl:w-full">
                    Join thousands of users who have simplified their healthcare
                    journey with our platform. Get started today and experience
                    healthcare the way it should be.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-emerald-600 text-white hover:bg-emerald-700">
                      <Link href="/sign-up">Sign Up Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-emerald-700/30 hover:bg-muted/80">
                      <Link href="#pricing">View Pricing</Link>
                    </Button>
                  </div>
                </div>

                {/* <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  Subscribe
                </button>
              </div>
            </div> */}
                {/* <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
                <dt className="mt-4 text-base font-semibold text-white">
                  No spam
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl> */}
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-1155/678 w-320 bg-linear-to-tr from-[#94af30] to-[#2ed0aa] opacity-30"
              />
            </div>
            <div className="absolute bottom-0 right-0 lg:right-5 xl:right-15 max-sm:hidden">
              <img src="/stethoscope.png" className="w-40 lg:w-50 xl:w-55 " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
