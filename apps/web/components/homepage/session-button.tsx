"use server";

import React from "react";
import Link from "next/link";
import { Button } from "@feely/ui/components/button";
import { createClient } from "@utils/supabase/server";

const SessionButton = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    return (
      <Button asChild className="button-brand">
        <Link href="/redirect_to_workspace">Go to dashboard</Link>
      </Button>
    );
  } else {
    return (
      <div className="flex items-center space-x-1.5">
        <Button variant="text" asChild className="focus:ring-amber-600">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild className="button-brand">
          <Link href="/signup">Start for free</Link>
        </Button>
      </div>
    );
  }
};

export default SessionButton;
