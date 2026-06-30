"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const COMMAND = "java -jar YggUtils.jar";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(COMMAND);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
      <div></div>
  );
}