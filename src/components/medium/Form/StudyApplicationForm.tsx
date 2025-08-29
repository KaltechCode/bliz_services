"use client";
import React, { useState } from "react";

function StudyApplicationForm() {
  const inputWrapperClass = "w-full md:w-[45%] rounded-md";
  const inputClass =
    "w-full h-[40px] px-3 bg-gray-100 focus:outline-pink rounded-sm";
  const labelClass = "block text-sm mb-1 text-gray-700";
  const fullWidthClass = "w-full rounded-lg";

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

  const countries = [
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
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append("Name_First", firstName);
      formData.append("Name_Last", lastName);
      formData.append("PhoneNumber_countrycode", phoneNumber);
      formData.append("Email", email);
      formData.append("Address_AddressLine1", addressLine1);
      formData.append("Address_AddressLine2", addressLine2);
      formData.append("Address_City", city);
      formData.append("Address_Region", region);
      formData.append("Address_ZipCode", zipCode);
      formData.append("Address_Country", country);
      formData.append("Radio", studyCountry);
      formData.append("SingleLine", plannedMajor);
      formData.append("TermsConditions", termsAccepted.toString());

      await fetch(
        "https://forms.zohopublic.com/blizservices1/form/StudyApplication/formperma/8F_MbU-pa5aWXvb6PgwI7BQrkVI_FtPi0ReqxIj1ehY/htmlRecords/submit",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      // Optimistically assume success when using no-cors
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
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white px-7 py-10 rounded-[20px] shadow-2xl shadow-slate-300">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-between gap-5"
      >
        {/* Basic Information Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Basic Information
          </h2>
        </div>

        {/* Name Fields */}
        <div className={inputWrapperClass}>
          <label className={labelClass}>First Name</label>
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
          <label className={labelClass}>Last Name</label>
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

        {/* Phone Number */}
        <div className={inputWrapperClass}>
          <label className={labelClass}>Phone Number</label>
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

        {/* Email */}
        <div className={inputWrapperClass}>
          <label className={labelClass}>Email</label>
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

        {/* Address Fields */}
        <div className={fullWidthClass}>
          <label className={labelClass}>Street Address</label>
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

        <div className={inputWrapperClass}>
          <label className={labelClass}>City</label>
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
          <label className={labelClass}>State/Region/Province</label>
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

        <div className={inputWrapperClass}>
          <label className={labelClass}>Postal / Zip Code</label>
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
          <label className={labelClass}>Country</label>
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

        {/* Institution Details Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Institution Details
          </h2>
        </div>

        {/* Study Country Selection */}
        <div className="w-full">
          <label className={labelClass}>
            Please Select the country you intend to study
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            {countries.map((countryName) => (
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

        {/* Planned Major */}
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

        {/* Terms and Conditions */}
        <div className="w-full">
          <label className={labelClass}>Terms and Conditions</label>
          <div className="bg-gray-50 p-4 rounded-lg mt-2">
            <p className="text-sm text-gray-700 mb-4">
              `I understand that this application is for admission only for the
              term indicated. I agree that I am bound by the prospective
              institution&apos;s regulations concerning application deadlines
              and admission requirements. I agree to the release of any
              transcripts and test scores to this institution. I certify that
              this information is complete and accurate. I understand that
              making false or fraudulent statements within this application will
              result in denial of admission and invalidation of credit or
              degrees earned. If admitted, I agree to abide by the policies of
              the Board of Regents and the rules and regulations of the
              educational institution. Should any information change prior to my
              entry into the institution, I will notify Bliz Services. I
              understand that the service fee I submit with this application is
              a non-refundable fee.
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
              <span className="text-sm">
                I accept the Terms and Conditions.
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue rounded-full px-10 py-3 text-white disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="w-full text-green-600 text-sm mt-2">
            {`Thanks! Your study application has been submitted successfully.`}
          </p>
        )}
        {status === "error" && (
          <p className="w-full text-red-600 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default StudyApplicationForm;
