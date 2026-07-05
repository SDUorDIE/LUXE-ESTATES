"use client";

import { useMemo, useState } from "react";

import SectionTitle from "./ui/SectionTitle";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(4500000);
  const [deposit, setDeposit] = useState(500000);
  const [interest, setInterest] = useState(11.75);
  const [years, setYears] = useState(20);

  const monthlyPayment = useMemo(() => {
    const loan = price - deposit;

    const monthlyRate = interest / 100 / 12;

    const months = years * 12;

    if (loan <= 0) return 0;

    return (
      (loan *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  }, [price, deposit, interest, years]);

  return (
    <section className="py-32 bg-zinc-950">

      <div className="max-w-6xl mx-auto px-6">

        <SectionTitle
          subtitle="Finance"
          title="Mortgage Calculator"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Inputs */}

          <div className="space-y-6">

            <Input
              type="number"
              placeholder="Property Price"
              value={price}
              onChange={(e) =>
                setPrice(Number(e.target.value))
              }
            />

            <Input
              type="number"
              placeholder="Deposit"
              value={deposit}
              onChange={(e) =>
                setDeposit(Number(e.target.value))
              }
            />

            <Input
              type="number"
              placeholder="Interest Rate"
              value={interest}
              onChange={(e) =>
                setInterest(Number(e.target.value))
              }
            />

            <Input
              type="number"
              placeholder="Loan Term"
              value={years}
              onChange={(e) =>
                setYears(Number(e.target.value))
              }
            />

          </div>

          {/* Results */}

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-10">

            <p className="text-zinc-400 uppercase tracking-widest">
              Estimated Monthly Repayment
            </p>

            <h2 className="text-6xl font-black text-yellow-500 mt-6">

              R{" "}
              {monthlyPayment.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}

            </h2>

            <div className="mt-12 space-y-4 text-zinc-300">

              <div className="flex justify-between">

                <span>Property Price</span>

                <span>
                  R {price.toLocaleString()}
                </span>

              </div>

              <div className="flex justify-between">

                <span>Deposit</span>

                <span>
                  R {deposit.toLocaleString()}
                </span>

              </div>

              <div className="flex justify-between">

                <span>Interest</span>

                <span>{interest}%</span>

              </div>

              <div className="flex justify-between">

                <span>Loan Term</span>

                <span>{years} Years</span>

              </div>

            </div>

            <Button className="mt-10 w-full">
              Speak To An Advisor
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}