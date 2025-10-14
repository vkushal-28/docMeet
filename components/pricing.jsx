"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { ClerkProvider, PricingTable } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
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

const Pricing = () => {
  return (
    <Card className="border-emerald-900/50 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            ...myPricingAppearance,
          }}>
          <PricingTable
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: {
                    zIndex: 2000,
                    height: 700,
                  },
                },
              },
            }}
          />
        </ClerkProvider>
      </CardContent>
    </Card>
  );
};

export default Pricing;
