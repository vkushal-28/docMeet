import React, { useMemo } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";

/**
 * Reusable component for a single specialty card
 * Memoized to prevent unnecessary re-renders
 */
const SpecialtyCard = React.memo(({ specialty }) => (
  <Link href={`/doctors/${specialty.name}`}>
    <Card className="hover:border-emerald-700/40 transition-all cursor-pointer border-emerald-900/20 h-full">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
        <div className="w-14 h-14 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4">
          <div className="text-emerald-400">{specialty.icon}</div>
        </div>
        <h3 className="font-medium text-white">{specialty.name}</h3>
      </CardContent>
    </Card>
  </Link>
));

/**
 * Page component to display all doctor specialties
 */
export default function DoctorsPage() {
  // Memoize the mapped list of specialty cards for performance
  const specialtiesList = useMemo(
    () =>
      SPECIALTIES.map((specialty) => (
        <SpecialtyCard key={specialty.name} specialty={specialty} />
      )),
    []
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Find Your Doctor</h1>
        <p className="text-muted-foreground text-lg">
          Browse by specialty or view all available healthcare providers
        </p>
      </div>

      {/* Specialties grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {specialtiesList}
      </div>
    </div>
  );
}
