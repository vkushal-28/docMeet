import React from "react";
import { User, Star, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * DoctorCard Component
 * Displays information about a single doctor in a card format
 * Memoized to avoid unnecessary re-renders
 */

export const DoctorCard = React.memo(({ doctor }) => {
  return (
    <Card className="border-emerald-900/20 hover:border-emerald-700/40 transition-all">
      <CardContent>
        <div className="flex items-start gap-4">
          {/* Doctor Image or Fallback Icon */}
          <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center flex-shrink-0">
            {doctor.imageUrl ? (
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <User className="h-6 w-6 text-emerald-400" />
            )}
          </div>

          {/* Doctor Details */}
          <div className="flex-1">
            {/* Name and Verified Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="font-medium text-white text-lg">{doctor.name}</h3>
              <Badge
                variant="outline"
                className="bg-emerald-900/20 border-emerald-900/30 text-emerald-400 self-start flex items-center gap-1">
                <Star className="h-3 w-3 " />
                Verified
              </Badge>
            </div>

            {/* Specialty and Experience */}
            <p className="text-sm text-muted-foreground mb-1">
              {doctor.specialty} • {doctor.experience} years experience
            </p>

            {/* Description */}
            <p className="mt-4 line-clamp-2 text-sm text-muted-foreground mb-4">
              {doctor.description}
            </p>

            {/* View Profile & Book Button */}
            <Button
              asChild
              className="w-full bg-emerald-500 hover:bg-emerald-600 mt-2">
              <Link
                href={`/doctors/${doctor.specialty}/${doctor.id}`}
                className="flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" />
                View Profile & Book
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});
