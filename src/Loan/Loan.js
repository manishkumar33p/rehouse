import React, { useMemo, useState } from "react";
import "./Loan.css";

function Loan() {
  /* =====================================================
     EMI CALCULATOR
  ===================================================== */

  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  /* =====================================================
     ELIGIBILITY
  ===================================================== */

  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [existingEmi, setExistingEmi] = useState(10000);

  /* =====================================================
     APPLICATION
  ===================================================== */

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "Home Loan",
    city: "",
    propertyValue: "",
    requiredLoan: "",
    employment: "Salaried",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* =====================================================
     EMI CALCULATION
  ===================================================== */

  const emiData = useMemo(() => {
    const principal = Number(loanAmount) || 0;
    const annualRate = Number(interestRate) || 0;
    const years = Number(tenure) || 0;

    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;

    if (!principal || !months) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
      };
    }

    let emi = 0;

    if (monthlyRate === 0) {
      emi = principal / months;
    } else {
      emi =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    return {
      emi,
      totalInterest,
      totalPayment,
    };
  }, [loanAmount, interestRate, tenure]);

  /* =====================================================
     ELIGIBILITY CALCULATION
  ===================================================== */

  const eligibilityData = useMemo(() => {
    const income = Number(monthlyIncome) || 0;
    const otherEmi = Number(existingEmi) || 0;

    /*
      Indicative planning assumption:
      maximum total EMI = 50% of monthly income.
      This is NOT a lender approval rule.
    */

    const maxTotalEmi = income * 0.5;
    const availableEmi = Math.max(maxTotalEmi - otherEmi, 0);

    const annualRate = Number(interestRate) || 8.5;
    const monthlyRate = annualRate / 12 / 100;
    const months = Number(tenure) * 12;

    let eligibleLoan = 0;

    if (availableEmi > 0 && months > 0) {
      if (monthlyRate === 0) {
        eligibleLoan = availableEmi * months;
      } else {
        eligibleLoan =
          (availableEmi *
            (Math.pow(1 + monthlyRate, months) - 1)) /
          (monthlyRate *
            Math.pow(1 + monthlyRate, months));
      }
    }

    return {
      maxTotalEmi,
      availableEmi,
      eligibleLoan,
    };
  }, [monthlyIncome, existingEmi, interestRate, tenure]);

  /* =====================================================
     FORMAT CURRENCY
  ===================================================== */

  const money = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value || 0);
  };

  /* =====================================================
     FORM HANDLER
  ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const applications =
      JSON.parse(
        localStorage.getItem("rehouse_loan_applications") || "[]"
      );

    applications.push({
      ...form,
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem(
      "rehouse_loan_applications",
      JSON.stringify(applications)
    );

    setSubmitted(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      loanType: "Home Loan",
      city: "",
      propertyValue: "",
      requiredLoan: "",
      employment: "Salaried",
      message: "",
    });
  };

  return (
    <div className="loan-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="loan-hero">

        <div className="loan-container loan-hero-grid">

          <div className="loan-hero-content">

            <span className="loan-eyebrow">
              REHOUSE LOAN DESK
            </span>

            <h1>
              Turn Your Property
              <span> Dream Into Reality.</span>
            </h1>

            <p>
              Explore suitable loan options, estimate your EMI,
              understand the process and get professional assistance
              for your property financing journey.
            </p>

            <div className="loan-hero-buttons">

              <button
                className="loan-primary-btn"
                onClick={() =>
                  document
                    .getElementById("loan-calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Calculate My EMI →
              </button>

              <button
                className="loan-outline-btn"
                onClick={() =>
                  document
                    .getElementById("loan-application")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Apply for Loan
              </button>

            </div>

            <div className="loan-trust-row">

              <span>✓ Property Guidance</span>
              <span>✓ Loan Assistance</span>
              <span>✓ Document Guidance</span>

            </div>

          </div>


          <div className="loan-hero-card">

            <div className="loan-hero-card-image">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90"
                alt="Luxury Property"
              />
            </div>

            <div className="loan-floating-card">

              <span>
                PLAN SMARTER
              </span>

              <strong>
                Your Property.
                <br />
                Your Finance.
              </strong>

              <small>
                Estimate your monthly EMI before you apply.
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          LOAN TYPES
      ================================================= */}

      <section className="loan-types-section">

        <div className="loan-container">

          <div className="loan-section-heading">

            <span>
              FINANCING OPTIONS
            </span>

            <h2>
              Choose the Right
              <em> Loan.</em>
            </h2>

            <p>
              Explore financing categories according to your
              property requirement.
            </p>

          </div>


          <div className="loan-types-grid">

            <div className="loan-type-card">
              <div>⌂</div>
              <h3>Home Loan</h3>
              <p>
                For purchasing a new or resale residential property.
              </p>
            </div>

            <div className="loan-type-card">
              <div>◇</div>
              <h3>Plot / Land Loan</h3>
              <p>
                Financing options for eligible residential plots.
              </p>
            </div>

            <div className="loan-type-card">
              <div>▦</div>
              <h3>Construction Loan</h3>
              <p>
                Funding support for eligible residential construction.
              </p>
            </div>

            <div className="loan-type-card">
              <div>▥</div>
              <h3>Commercial Property</h3>
              <p>
                Financing options for eligible commercial properties.
              </p>
            </div>

            <div className="loan-type-card">
              <div>✦</div>
              <h3>Property Renovation</h3>
              <p>
                Explore financing for eligible renovation requirements.
              </p>
            </div>

            <div className="loan-type-card">
              <div>↗</div>
              <h3>Loan Transfer</h3>
              <p>
                Explore balance transfer options with eligible lenders.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          EMI CALCULATOR
      ================================================= */}

      <section
        className="loan-calculator-section"
        id="loan-calculator"
      >

        <div className="loan-container">

          <div className="loan-section-heading center">

            <span>
              SMART FINANCIAL PLANNING
            </span>

            <h2>
              Home Loan
              <em> EMI Calculator</em>
            </h2>

            <p>
              Enter your loan details and instantly estimate your
              monthly EMI, total interest and total repayment.
            </p>

          </div>


          <div className="loan-calculator-box">

            <div className="loan-calculator-inputs">

              <div className="loan-input-group">

                <label>
                  Loan Amount
                </label>

                <div className="loan-input-money">
                  <span>₹</span>

                  <input
                    type="number"
                    min="100000"
                    value={loanAmount}
                    onChange={(e) =>
                      setLoanAmount(e.target.value)
                    }
                  />
                </div>

                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) =>
                    setLoanAmount(e.target.value)
                  }
                />

                <div className="loan-range-values">
                  <span>₹1 Lakh</span>
                  <span>₹5 Crore</span>
                </div>

              </div>


              <div className="loan-input-group">

                <label>
                  Interest Rate
                </label>

                <div className="loan-input-money">
                  <input
                    type="number"
                    min="1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(e.target.value)
                    }
                  />

                  <span>%</span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(e.target.value)
                  }
                />

                <div className="loan-range-values">
                  <span>1%</span>
                  <span>20%</span>
                </div>

              </div>


              <div className="loan-input-group">

                <label>
                  Loan Tenure
                </label>

                <div className="loan-input-money">

                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={tenure}
                    onChange={(e) =>
                      setTenure(e.target.value)
                    }
                  />

                  <span>Years</span>

                </div>

                <input
                  type="range"
                  min="1"
                  max="30"
                  value={tenure}
                  onChange={(e) =>
                    setTenure(e.target.value)
                  }
                />

                <div className="loan-range-values">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>

              </div>

            </div>


            <div className="loan-calculator-result">

              <span className="result-small-title">
                ESTIMATED MONTHLY EMI
              </span>

              <strong className="loan-emi-big">
                {money(emiData.emi)}
              </strong>

              <span className="result-note">
                per month
              </span>


              <div className="loan-result-divider"></div>


              <div className="loan-result-row">

                <span>
                  Principal Amount
                </span>

                <strong>
                  {money(loanAmount)}
                </strong>

              </div>


              <div className="loan-result-row">

                <span>
                  Total Interest
                </span>

                <strong>
                  {money(emiData.totalInterest)}
                </strong>

              </div>


              <div className="loan-result-row">

                <span>
                  Total Repayment
                </span>

                <strong>
                  {money(emiData.totalPayment)}
                </strong>

              </div>


              <button
                className="loan-result-btn"
                onClick={() =>
                  document
                    .getElementById("loan-application")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Discuss My Loan →
              </button>

            </div>

          </div>


          <div className="loan-calculator-note">

            <span>ⓘ</span>

            <p>
              Calculator results are indicative planning estimates.
              Actual EMI, interest rate, eligibility, fees and loan
              amount depend on the selected lender and applicant
              profile.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          ELIGIBILITY
      ================================================= */}

      <section className="loan-eligibility-section">

        <div className="loan-container">

          <div className="loan-eligibility-box">

            <div className="loan-eligibility-content">

              <span>
                KNOW YOUR NUMBERS
              </span>

              <h2>
                Estimate Your
                <em> Loan Eligibility</em>
              </h2>

              <p>
                Get an indicative estimate based on your monthly
                income, existing EMI obligations, interest rate
                and selected tenure.
              </p>


              <div className="loan-eligibility-input-grid">

                <div>
                  <label>
                    Monthly Income
                  </label>

                  <input
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) =>
                      setMonthlyIncome(e.target.value)
                    }
                  />
                </div>


                <div>
                  <label>
                    Existing Monthly EMIs
                  </label>

                  <input
                    type="number"
                    value={existingEmi}
                    onChange={(e) =>
                      setExistingEmi(e.target.value)
                    }
                  />
                </div>

              </div>

            </div>


            <div className="loan-eligibility-result">

              <span>
                INDICATIVE ELIGIBLE LOAN
              </span>

              <strong>
                {money(eligibilityData.eligibleLoan)}
              </strong>

              <div className="eligibility-line"></div>

              <p>
                Estimated available EMI capacity:
              </p>

              <b>
                {money(eligibilityData.availableEmi)}
                <small> / month</small>
              </b>

              <small className="eligibility-disclaimer">
                Indicative only — lender assessment is final.
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          BANKS
      ================================================= */}

      <section className="loan-banks-section">

        <div className="loan-container">

          <div className="loan-section-heading center">

            <span>
              LENDER OPTIONS
            </span>

            <h2>
              Explore Leading
              <em> Banks & Lenders</em>
            </h2>

            <p>
              We can help you understand and explore suitable
              lending options. Availability and terms depend on
              the lender and applicant profile.
            </p>

          </div>


          <div className="loan-banks-grid">

            <Bank
              logo="https://cdn.simpleicons.org/statebankofindia"
              name="State Bank of India"
              short="SBI"
            />

            <Bank
              logo="https://cdn.simpleicons.org/icicibank"
              name="ICICI Bank"
              short="ICICI"
            />

            <Bank
              logo="https://cdn.simpleicons.org/hdfcbank"
              name="HDFC Bank"
              short="HDFC"
            />

            <Bank
              logo="https://cdn.simpleicons.org/axisbank"
              name="Axis Bank"
              short="AXIS"
            />

            <Bank
              logo="https://cdn.simpleicons.org/bankofbaroda"
              name="Bank of Baroda"
              short="BOB"
            />

            <Bank
              logo="https://cdn.simpleicons.org/punjabnationalbank"
              name="Punjab National Bank"
              short="PNB"
            />

            <Bank
              logo="https://cdn.simpleicons.org/canarabank"
              name="Canara Bank"
              short="CANARA"
            />

            <Bank
              logo="https://cdn.simpleicons.org/unionbankofindia"
              name="Union Bank of India"
              short="UNION"
            />

            <Bank
              logo="https://cdn.simpleicons.org/indianbank"
              name="Indian Bank"
              short="INDIAN"
            />

            <Bank
              logo="https://cdn.simpleicons.org/idfcfirstbank"
              name="IDFC FIRST Bank"
              short="IDFC"
            />

            <Bank
              logo="https://cdn.simpleicons.org/kotakmahindrabank"
              name="Kotak Mahindra Bank"
              short="KOTAK"
            />

            <Bank
              logo="https://cdn.simpleicons.org/lic"
              name="LIC Housing Finance"
              short="LIC"
            />

          </div>


          <p className="loan-bank-disclaimer">
            Bank names and logos are shown for lender discovery/reference.
            REHOUSE REALTORS should not be represented as an official partner
            of any lender unless separately agreed or documented.
          </p>

        </div>

      </section>


      {/* =================================================
          PROCESS
      ================================================= */}

      <section className="loan-process-section">

        <div className="loan-container">

          <div className="loan-section-heading center">

            <span>
              SIMPLE PROCESS
            </span>

            <h2>
              Your Loan Journey,
              <em> Step by Step.</em>
            </h2>

          </div>


          <div className="loan-process-grid">

            <Process
              number="01"
              title="Share Your Requirement"
              text="Tell us about your property, approximate budget and financing requirement."
            />

            <Process
              number="02"
              title="Understand Your Options"
              text="Explore suitable lender categories, loan structures and repayment possibilities."
            />

            <Process
              number="03"
              title="Prepare Documents"
              text="Get guidance on commonly required identity, income and property documents."
            />

            <Process
              number="04"
              title="Application & Lender Review"
              text="Submit your application to the selected lender for its eligibility, legal and credit assessment."
            />

          </div>

        </div>

      </section>


      {/* =================================================
          DOCUMENTS
      ================================================= */}

      <section className="loan-documents-section">

        <div className="loan-container loan-documents-grid">

          <div>

            <span className="loan-eyebrow">
              DOCUMENT CHECKLIST
            </span>

            <h2>
              Keep Your
              <em> Documents Ready.</em>
            </h2>

            <p>
              Requirements vary by lender, applicant profile and
              property type. Commonly requested documents may include:
            </p>

          </div>


          <div className="loan-document-list">

            <div>✓ PAN / Identity Proof</div>
            <div>✓ Address Proof</div>
            <div>✓ Income Proof</div>
            <div>✓ Salary Slips / Business Documents</div>
            <div>✓ Bank Statements</div>
            <div>✓ Property Documents</div>
            <div>✓ Passport-size Photographs</div>
            <div>✓ Additional documents as requested by lender</div>

          </div>

        </div>

      </section>


      {/* =================================================
          APPLICATION
      ================================================= */}

      <section
        className="loan-application-section"
        id="loan-application"
      >

        <div className="loan-container">

          <div className="loan-application-box">

            <div className="loan-application-heading">

              <span>
                REHOUSE LOAN ASSISTANCE
              </span>

              <h2>
                Let's Plan Your
                <em> Property Finance.</em>
              </h2>

              <p>
                Submit your requirement and our team can connect
                with you to understand your property and financing
                needs.
              </p>

              <div className="loan-contact-points">

                <span>
                  ✓ Property + Loan Guidance
                </span>

                <span>
                  ✓ Lender Options
                </span>

                <span>
                  ✓ Application Support
                </span>

              </div>

            </div>


            <form
              className="loan-form"
              onSubmit={handleSubmit}
            >

              <div className="loan-form-grid">

                <div>
                  <label>Full Name *</label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>


                <div>
                  <label>Mobile Number *</label>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    maxLength="10"
                    required
                  />
                </div>


                <div>
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />
                </div>


                <div>
                  <label>City</label>

                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Property / residence city"
                  />
                </div>


                <div>
                  <label>Loan Type</label>

                  <select
                    name="loanType"
                    value={form.loanType}
                    onChange={handleChange}
                  >
                    <option>Home Loan</option>
                    <option>Plot / Land Loan</option>
                    <option>Construction Loan</option>
                    <option>Commercial Property Loan</option>
                    <option>Property Renovation</option>
                    <option>Loan Transfer</option>
                    <option>Other</option>
                  </select>
                </div>


                <div>
                  <label>Employment Type</label>

                  <select
                    name="employment"
                    value={form.employment}
                    onChange={handleChange}
                  >
                    <option>Salaried</option>
                    <option>Self Employed</option>
                    <option>Business Owner</option>
                    <option>Professional</option>
                    <option>Other</option>
                  </select>
                </div>


                <div>
                  <label>Approx. Property Value</label>

                  <input
                    name="propertyValue"
                    value={form.propertyValue}
                    onChange={handleChange}
                    placeholder="e.g. ₹80,00,000"
                  />
                </div>


                <div>
                  <label>Required Loan Amount</label>

                  <input
                    name="requiredLoan"
                    value={form.requiredLoan}
                    onChange={handleChange}
                    placeholder="e.g. ₹60,00,000"
                  />
                </div>

              </div>


              <div className="loan-form-message">

                <label>
                  Message / Requirement
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  rows="4"
                />

              </div>


              <button
                type="submit"
                className="loan-submit-btn"
              >
                Request a Loan Consultation →
              </button>


              {submitted && (
                <div className="loan-success-message">
                  ✓ Thank you! Your loan enquiry has been recorded.
                  Our team can review your requirement and contact you.
                </div>
              )}

            </form>

          </div>

        </div>

      </section>


      {/* =================================================
          TERMS
      ================================================= */}

      <section className="loan-terms-section">

        <div className="loan-container">

          <div className="loan-section-heading">

            <span>
              IMPORTANT INFORMATION
            </span>

            <h2>
              Terms &
              <em> Conditions</em>
            </h2>

          </div>


          <div className="loan-terms-grid">

            <div>
              <strong>01</strong>
              <p>
                EMI and eligibility calculations shown on this page
                are indicative planning estimates only.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <p>
                Final loan approval, sanctioned amount, interest rate,
                tenure, fees and charges are determined by the selected
                lender.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <p>
                Lender policies may vary according to income,
                employment, credit profile, property and documentation.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <p>
                Submission of an enquiry does not guarantee loan
                approval or disbursement.
              </p>
            </div>

            <div>
              <strong>05</strong>
              <p>
                Property valuation, legal verification and technical
                assessment may be required by the lender.
              </p>
            </div>

            <div>
              <strong>06</strong>
              <p>
                Applicants should independently review the lender's
                final sanction letter, fees, terms and repayment
                conditions before accepting the loan.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="loan-final-cta">

        <div className="loan-container">

          <span>
            YOUR PROPERTY JOURNEY
          </span>

          <h2>
            Find the Property.
            <br />
            Plan the Finance.
            <br />
            <em>Move Forward.</em>
          </h2>

          <button
            onClick={() =>
              document
                .getElementById("loan-application")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Loan Journey →
          </button>

        </div>

      </section>

    </div>
  );
}


/* =====================================================
   BANK COMPONENT
===================================================== */

function Bank({ logo, name, short }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="loan-bank-card">

      <div className="loan-bank-logo">

        {!imageError ? (
          <img
            src={logo}
            alt={name}
            onError={() => setImageError(true)}
          />
        ) : (
          <strong>
            {short}
          </strong>
        )}

      </div>

      <div>
        <strong>{name}</strong>
        <span>Loan options to explore</span>
      </div>

    </div>
  );
}


/* =====================================================
   PROCESS COMPONENT
===================================================== */

function Process({ number, title, text }) {
  return (
    <div className="loan-process-card">

      <span className="loan-process-number">
        {number}
      </span>

      <div className="loan-process-icon">
        ✓
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}

export default Loan;