import { redirect } from "next/navigation";
import { Calendar } from "lucide-react";

import { getPatientAppointments } from "@/actions/patient";
import { getCurrentUser } from "@/actions/onboarding";
import { AppointmentCard } from "@/components/appointment-card";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Reusable component to display an empty state
 */
const EmptyState = ({ title, description }) => (
  <div className="text-center py-8">
    <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
    <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

/**
 * Reusable component to render a list of appointments
 */
const AppointmentsList = ({ appointments }) => (
  <div className="space-y-4">
    {appointments.map((appointment) => (
      <AppointmentCard
        key={appointment.id}
        appointment={appointment}
        userRole="PATIENT"
      />
    ))}
  </div>
);

/**
 * Main page component for patient appointments
 */
export default async function PatientAppointmentsPage() {
  // Fetch the current user
  const user = await getCurrentUser();

  // Redirect unauthorized users immediately
  if (!user || user.role !== "PATIENT") {
    redirect("/onboarding");
  }

  // Fetch patient appointments
  const { appointments, error } = await getPatientAppointments();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <PageHeader
        icon={<Calendar />}
        title="My Appointments"
        backLink="/doctors"
        backLabel="Find Doctors"
      />

      {/* Appointments card */}
      <Card className="border-emerald-900/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-400" />
            Your Scheduled Appointments
          </CardTitle>
        </CardHeader>

        <CardContent>
          {error ? (
            <div className="text-center py-8">
              <p className="text-red-400">Error: {error}</p>
            </div>
          ) : appointments?.length > 0 ? (
            <AppointmentsList appointments={appointments} />
          ) : (
            <EmptyState
              title="No appointments scheduled"
              description="You don’t have any appointments scheduled yet. Browse our doctors and book your first consultation."
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
