import Link from "next/link";

import { SignInButton } from "@/auth/clerk";
import { isLocalAuthMode } from "@/auth/localAuth";

import { Button, buttonVariants } from "@/components/ui/button";

type SignedOutPanelProps = {
  message: string;
  forceRedirectUrl: string;
  signUpForceRedirectUrl?: string;
  mode?: "modal" | "redirect";
  buttonLabel?: string;
  buttonTestId?: string;
};

export function SignedOutPanel({
  message,
  forceRedirectUrl,
  signUpForceRedirectUrl,
  mode = "modal",
  buttonLabel = "Sign in",
  buttonTestId,
}: SignedOutPanelProps) {
  if (isLocalAuthMode()) {
    const target = `/sign-in?redirect_url=${encodeURIComponent(forceRedirectUrl)}`;

    return (
      <div className="col-span-1 md:col-span-2 flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-50 p-10 text-center">
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 md:px-8 md:py-6 shadow-sm">
          <p className="text-sm text-slate-600">{message}</p>
          <Link
            href={target}
            data-testid={buttonTestId}
            className={buttonVariants({ className: "mt-4" })}
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-1 md:col-span-2 flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-50 p-10 text-center">
      <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 md:px-8 md:py-6 shadow-sm">
        <p className="text-sm text-slate-600">{message}</p>
        <SignInButton
          mode={mode}
          forceRedirectUrl={forceRedirectUrl}
          signUpForceRedirectUrl={signUpForceRedirectUrl}
        >
          <Button className="mt-4" data-testid={buttonTestId}>
            {buttonLabel}
          </Button>
        </SignInButton>
      </div>
    </div>
  );
}
