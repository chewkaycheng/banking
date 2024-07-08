"use client";

import React from "react";
import { formatAmount } from "@/lib/utils";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className="w-full">
      <CountUp
        duration={0.75}
        decimals={2}
        decimal="."
        prefix="$"
        end={amount}
      />
    </p>
  );
};

export default AnimatedCounter;
