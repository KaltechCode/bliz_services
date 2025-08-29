"use client";
import React from "react";
import StudyAbroadApplicationForm from "@/components/medium/Form/StudyAbroadApplicationForm";

export default function StudyAbroadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Study Abroad Application
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apply for international education opportunities. Fill in your
            details below to begin your study abroad journey.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <StudyAbroadApplicationForm />
        </div>
      </div>
    </div>
  );
}
