import React from "react";
import WorkAbroadApplicationForm from "@/components/medium/Form/WorkAbroadApplicationForm";

export default function WorkAbroadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Work Abroad Application
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your international career. Fill out the
            form below and let us help you find exciting work opportunities
            abroad.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <WorkAbroadApplicationForm />
        </div>
      </div>
    </div>
  );
}
