"use client";
import { studyPageUrl } from "@/constant/data";
import { baseUrl } from "@/helpers/baseUrl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function StudyAbroadApplicationForm() {
  const inputWrapperClass = "w-full md:w-[45%] rounded-md";
  const inputClass =
    "w-full h-[40px] px-3 bg-gray-100 focus:outline-pink rounded-sm";
  const labelClass = "block text-sm mb-1 text-gray-700";
  const fullWidthClass = "w-full rounded-lg";

  const route = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("-Select-");
  const [studyCountry, setStudyCountry] = useState("");
  const [plannedMajor, setPlannedMajor] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const studyCountries = [
    "Canada",
    "United States",
    "United Kingdom",
    "Ireland",
    "Europe",
  ];

  const worldCountries = [
    "-Select-",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Navassa Island",
    "Nepal",
    "Netherlands Antilles",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Korea",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paracel Islands",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn Islands",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of the Congo",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const nextStep = () => {
    if (currentStep === 1) {
      if (
        !firstName ||
        !lastName ||
        !phoneNumber ||
        !email ||
        !addressLine1 ||
        !city ||
        !region ||
        !zipCode ||
        country === "-Select-"
      ) {
        alert("Please fill in all required fields in Basic Information");
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const formData = {
        Name: {
          Name_First: firstName,
          Name_Last: lastName,
        },
        PhoneNumber: phoneNumber,
        Email: email,
        Address: {
          Address_AddressLine1: addressLine1,
          Address_AddressLine2: addressLine2,
          Address_City: city,
          Address_Region: region,
          Address_ZipCode: zipCode,
          Address_Country: country,
        },
        Radio: studyCountry,
        SingleLine: plannedMajor,
        TermsConditions: termsAccepted.toString(),
        REFERRER_NAME: "https://accounts.zoho.com/",
      };

      const response = await fetch(
        "https://forms.zohopublic.com/blizservices1/form/StudyApplication/formperma/vP1WDPI-6V3p95w9MiNr46qpsHou4AgUdDUq8X2J7Vc/records",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmail("");
      setAddressLine1("");
      setAddressLine2("");
      setCity("");
      setRegion("");
      setZipCode("");
      setCountry("-Select-");
      setStudyCountry("");
      setPlannedMajor("");
      setTermsAccepted(false);
      setStatus("success");
      setCurrentStep(1);

      route.replace(baseUrl() + studyPageUrl);
    } catch (err) {
      console.error("An error occurred:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="w-full mb-8">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= 1
                ? "bg-darkblue text-white"
                : "bg-gray-200 text-darkblue"
            }`}
          >
            1
          </div>
          <div
            className={`w-16 h-1 mx-2 ${
              currentStep > 1 ? "bg-darkblue" : "bg-gray-100"
            }`}
          ></div>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= 2
                ? "bg-darkblue text-white"
                : "bg-gray-200 text-darkblue"
            }`}
          >
            2
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2 text-sm text-gray-600">
        <span className={currentStep === 1 ? "text-darkblue font-medium" : ""}>
          Basic Information
        </span>
        <span className="mx-4">•</span>
        <span className={currentStep === 2 ? "text-darkblue font-medium" : ""}>
          Institution Details
        </span>
      </div>
    </div>
  );

  const renderBasicInformation = () => (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Basic Information
      </h2>

      <div className="flex flex-wrap gap-5">
        <div className={inputWrapperClass}>
          <label className={labelClass}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Name_First"
            maxLength={255}
            className={inputClass}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className={inputWrapperClass}>
          <label className={labelClass}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Name_Last"
            maxLength={255}
            className={inputClass}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <div className={inputWrapperClass}>
          <label className={labelClass}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="PhoneNumber_countrycode"
            maxLength={20}
            className={inputClass}
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className={inputWrapperClass}>
          <label className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="Email"
            maxLength={255}
            className={inputClass}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={fullWidthClass}>
        <label className={labelClass}>
          Street Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="Address_AddressLine1"
          maxLength={255}
          className={inputClass}
          placeholder="Street Address"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          required
        />
      </div>

      <div className={fullWidthClass}>
        <label className={labelClass}>Address Line 2</label>
        <input
          type="text"
          name="Address_AddressLine2"
          maxLength={255}
          className={inputClass}
          placeholder="Address Line 2 (Optional)"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-5">
        <div className={inputWrapperClass}>
          <label className={labelClass}>
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Address_City"
            maxLength={255}
            className={inputClass}
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className={inputWrapperClass}>
          <label className={labelClass}>
            State/Region/Province <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Address_Region"
            maxLength={255}
            className={inputClass}
            placeholder="State/Region/Province"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <div className={inputWrapperClass}>
          <label className={labelClass}>
            Postal / Zip Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Address_ZipCode"
            maxLength={255}
            className={inputClass}
            placeholder="Postal / Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>

        <div className={inputWrapperClass}>
          <label className={labelClass}>
            Country <span className="text-red-500">*</span>
          </label>
          <select
            name="Address_Country"
            className={inputClass}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            {worldCountries.map((countryName) => (
              <option key={countryName} value={countryName}>
                {countryName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={nextStep}
          className="px-[16px] py-[8px] bg-pink border border-pink !text-darkblue border-solid rounded-full flex gap-2 items-center group/link is-primary hover:!bg-transparent hover:!text-darkblue transition-all duration-500 h-max primaryLink 
    "
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderInstitutionDetails = () => (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Institution Details
      </h2>

      <div className="w-full">
        <label className={labelClass}>
          Please Select the country you intend to study{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col flex-wrap gap-3 mt-2">
          {studyCountries.map((countryName) => (
            <label key={countryName} className="flex items-center gap-2">
              <input
                type="radio"
                name="Radio"
                value={countryName}
                checked={studyCountry === countryName}
                onChange={(e) => setStudyCountry(e.target.value)}
                className="mr-2"
                required
              />
              <span>{countryName}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={fullWidthClass}>
        <label className={labelClass}>
          What is your planned major? <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="SingleLine"
          maxLength={255}
          className={inputClass}
          placeholder="Enter your planned major"
          value={plannedMajor}
          onChange={(e) => setPlannedMajor(e.target.value)}
          required
        />
      </div>

      <div className="w-full">
        <label className={labelClass}>
          Terms and Conditions <span className="text-red-500">*</span>
        </label>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p className="text-sm text-gray-700 mb-4">
            I understand that this application is for admission only for the
            term indicated. I agree that I am bound by the prospective
            institution&apos;s regulations concerning application deadlines and
            admission requirements. I certify that this information is complete
            and accurate. I understand that making false or fraudulent
            statements within this application will result in denial of
            admission and invalidation of credit or degrees earned. If admitted,
            I agree to abide by the policies of the Board of Regents and the
            rules and regulations of the educational institution. Should any
            information change prior to my entry into the institution, I will
            notify Bliz Services. I understand that the service fee I submit
            with this application is a non-refundable fee.
          </p>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="TermsConditions"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
              required
            />
            <span className="text-sm">I accept the Terms and Conditions.</span>
          </label>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={prevStep}
          className="px-[16px] py-[8px] bg-pink border border-pink !text-darkblue border-solid rounded-full flex gap-2 items-center group/link is-primary hover:!bg-transparent hover:!text-darkblue transition-all duration-500 h-max primaryLink 
    "
        >
          Previous
        </button>
        <button
          type="submit"
          className="px-[16px] py-[8px] bg-pink border border-pink !text-darkblue border-solid rounded-full flex gap-2 items-center group/link is-primary hover:!bg-transparent hover:!text-darkblue transition-all duration-500 h-max primaryLink 
    "
          disabled={
            isSubmitting || !studyCountry || !plannedMajor || !termsAccepted
          }
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white px-7 py-10 rounded-[20px] shadow-2xl shadow-slate-300">
      <form onSubmit={handleSubmit}>
        {renderStepIndicator()}

        {currentStep === 1 && renderBasicInformation()}
        {currentStep === 2 && renderInstitutionDetails()}

        {status === "success" && (
          <div className="w-full text-center">
            <p className="text-green-600 text-lg font-medium mt-4">
              Thanks! Your study application has been submitted successfully.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="w-full text-center">
            <p className="text-red-600 text-lg font-medium mt-4">
              Something went wrong. Please try again.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default StudyAbroadApplicationForm;
