import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

const myPricingAppearance = {
  cssLayerName: "clerk", // useful if you're also using Tailwind so your overrides come later
  variables: {
    colorPrimary: "#008c5f", // e.g. emerald / greenish
    colorTextOnPrimaryBackground: "#ffffff", // text color when on primary color
    colorBackground: "#1a1a1a", // optional default background
    // you can also set colorText, colorTextSecondary, etc.
  },
  elements: {
    // Card / plan container
    planCard: {
      background: "#008c5f", // card background
      color: "#ffffff", // text color inside card
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1.5rem",
      height: "200px",
    },
    planCardSelected: {
      background: "#006d4a", // darker variant when selected, optional
      color: "#ffffff",
    },
    // Feature list items
    featureListItem: {
      fontSize: "0.95rem",
      color: "#eeeeee",
    },
    // Primary button inside the pricing UI (subscribe / select)
    formButtonPrimary: {
      background: "#ffffff",
      color: "#008c5f",
      border: "1px solid #008c5f",
      borderRadius: "4px",
      padding: "0.5rem 1rem",
      fontWeight: "500",

      transition: "background 0.2s ease, color 0.2s ease",
      "&:hover": {
        background: "#f0fdf4", // light emerald / off-white on hover
        color: "#006d4a",
      },
      "&:focus": {
        outline: "2px solid #008c5f",
        outlineOffset: "2px",
      },
    },
    // You can also override secondary / outline button etc. similarly
    formButtonSecondary: {
      background: "transparent",
      color: "#008c5f",
      border: "1px solid #008c5f",
      "&:hover": {
        background: "#e0f5eb",
      },
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        ...myPricingAppearance,
      }}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className} `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <Header />
            <main className="min-h-screen smooth-transition">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-6">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made by Kushal Vala</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
