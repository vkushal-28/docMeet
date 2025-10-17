"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BarLoader } from "react-spinners";
import { Check, X, User, Medal, FileText, ExternalLink } from "lucide-react";

import { updateDoctorStatus } from "@/actions/admin";
import useFetch from "@/hooks/use-fetch";

export function PendingDoctors({ doctors = [] }) {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const {
    loading,
    data,
    fn: submitStatusUpdate,
  } = useFetch(updateDoctorStatus);

  // --- Handlers ---
  const handleViewDetails = (doctor) => setSelectedDoctor(doctor);
  const handleCloseDialog = () => setSelectedDoctor(null);

  const handleUpdateStatus = async (doctorId, status) => {
    if (loading) return;

    const formData = new FormData();
    formData.append("doctorId", doctorId);
    formData.append("status", status);

    await submitStatusUpdate(formData);
  };

  // --- Auto-close dialog after update ---
  useEffect(() => {
    if (data?.success) handleCloseDialog();
  }, [data]);

  // --- Render: Empty State ---
  if (doctors.length === 0) {
    return (
      <Card className="border-emerald-900/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            Pending Doctor Verifications
          </CardTitle>
          <CardDescription>
            Review and approve doctor applications
          </CardDescription>
        </CardHeader>
        <CardContent className=" py-8 text-muted-foreground flex items-center justify-center h-[300px] ">
          <div>No pending verification requests at this time.</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      {/* Pending Doctor List */}
      <Card className="bg-background/40 border-emerald-900/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            Pending Doctor Verifications
          </CardTitle>
          <CardDescription>
            Review and approve doctor applications
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {doctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="bg-background border-emerald-900/20 hover:border-emerald-700/30 transition-all">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Doctor Basic Info */}
                    <div className="flex items-center gap-3">
                      <div className="bg-muted/20 rounded-full p-2">
                        <User className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {doctor.specialty} • {doctor.experience} years
                          experience
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 self-end md:self-auto">
                      <Badge
                        variant="outline"
                        className="bg-amber-900/20 border-amber-900/30 text-amber-400">
                        Pending
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetails(doctor)}
                        className="border-emerald-900/30 hover:bg-muted/80">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Doctor Details Dialog */}
      {selectedDoctor && (
        <Dialog open={!!selectedDoctor} onOpenChange={handleCloseDialog}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white">
                Doctor Verification Details
              </DialogTitle>
              <DialogDescription>
                Review the doctor&apos;s information carefully before making a
                decision
              </DialogDescription>
            </DialogHeader>

            {/* Doctor Details */}
            <div className="space-y-6 py-4">
              {/* Basic Info */}
              <div className="flex flex-col md:flex-row gap-6">
                <InfoBlock label="Full Name" value={selectedDoctor.name} />
                <InfoBlock label="Email" value={selectedDoctor.email} />
                <InfoBlock
                  label="Application Date"
                  value={format(new Date(selectedDoctor.createdAt), "PPP")}
                />
              </div>

              <Separator className="bg-emerald-900/20" />

              {/* Professional Info */}
              <Section title="Professional Information" icon={Medal}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                  <InfoBlock
                    label="Specialty"
                    value={selectedDoctor.specialty}
                  />
                  <InfoBlock
                    label="Years of Experience"
                    value={`${selectedDoctor.experience} years`}
                  />
                  <div className="space-y-1 col-span-2">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Credentials
                    </h4>
                    <a
                      href={selectedDoctor.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 flex items-center">
                      View Credentials
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </Section>

              <Separator className="bg-emerald-900/20" />

              {/* Service Description */}
              <Section title="Service Description" icon={FileText}>
                <p className="text-muted-foreground whitespace-pre-line">
                  {selectedDoctor.description}
                </p>
              </Section>
            </div>

            {loading && <BarLoader width="100%" color="#36d7b7" />}

            <DialogFooter className="flex sm:justify-between">
              <Button
                variant="destructive"
                onClick={() =>
                  handleUpdateStatus(selectedDoctor.id, "REJECTED")
                }
                disabled={loading}
                className="bg-red-600 hover:bg-red-700">
                <X className="mr-2 h-4 w-4" />
                {loading ? "Rejecting..." : "Reject"}
              </Button>
              <Button
                onClick={() =>
                  handleUpdateStatus(selectedDoctor.id, "VERIFIED")
                }
                disabled={loading}
                className="bg-emerald-600 hover:bg-emerald-700">
                <Check className="mr-2 h-4 w-4" />
                {loading ? "Approving..." : "Approve"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

/* Subcomponents */

function InfoBlock({ label, value }) {
  return (
    <div className="space-y-1 flex-1">
      <h4 className="text-sm font-medium text-muted-foreground">{label}</h4>
      <p className="text-base font-medium text-white">{value}</p>
    </div>
  );
}

function Section({ title, icon: Icon, children }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-emerald-400" />}
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      {children}
    </div>
  );
}
