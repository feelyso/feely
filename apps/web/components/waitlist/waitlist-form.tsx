// Import core
import { useState } from "react";
// Import custom
import { Input } from "@feely/ui/components/input";
import { Button } from "@feely/ui/components/button";

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS] as const;
const formStyles = {
  id: "clwksib2x01b0zlgn6smoyzkr",
  name: "Default",
  userGroup: "waitlist",
};
const domain = "app.loops.so";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<(typeof formStates)[number]>(INIT);
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setFormState(INIT);
    setErrorMessage("");
  };

  /**
   * Rate limit the number of submissions allowed
   * @returns {boolean} true if the form has been successfully submitted in the past minute
   */
  const hasRecentSubmission = () => {
    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");

    // Indicate if the last sign up was less than a minute ago
    if (previousTimestamp && Number(previousTimestamp) + 60 * 1000 > timestamp) {
      setFormState(ERROR);
      setErrorMessage("Too many signups, please try again in a little while");
      return true;
    }

    localStorage.setItem("loops-form-timestamp", timestamp.toString());
    return false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission
    event.preventDefault();

    // boundary conditions for submission
    if (formState !== INIT) return;
    if (!isValidEmail(email)) {
      setFormState(ERROR);
      setErrorMessage("Please enter a valid email");
      return;
    }
    if (hasRecentSubmission()) return;
    setFormState(SUBMITTING);

    // build body
    const formBody = `userGroup=${encodeURIComponent(formStyles.userGroup)}&email=${encodeURIComponent(
      email
    )}`;

    // API request to add user to newsletter
    fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res: any) => [res.ok, res.json(), res])
      .then(([ok, dataPromise, res]) => {
        if (ok) {
          resetForm();
          setFormState(SUCCESS);
        } else {
          dataPromise.then((data: any) => {
            setFormState(ERROR);
            setErrorMessage(data.message || res.statusText);
            localStorage.setItem("loops-form-timestamp", "");
          });
        }
      })
      .catch((error) => {
        setFormState(ERROR);
        // check for cloudflare error
        if (error.message === "Failed to fetch") {
          setErrorMessage("Too many signups, please try again in a little while");
        } else if (error.message) {
          setErrorMessage(error.message);
        }
        localStorage.setItem("loops-form-timestamp", "");
      });
  };

  switch (formState) {
    case SUCCESS:
      return (
        <>
          <div className="relative z-40 flex w-screen items-center justify-center overflow-auto sm:h-screen">
            <div className="m-6 grid max-w-screen-sm justify-items-center gap-8 py-20 sm:py-0">
              <div className="grid gap-6 text-left sm:text-center">
                <h1 className="sm:text-display-website text-heading-screen">
                  Yay, can you <span className="text-brand-gradient">feel the joy?</span>
                </h1>
                <p className="text-description text-lg leading-7">
                  You&apos;ve just joined feely waitlist. Make sure you&apos;ve received our{" "}
                  <b>welcome email</b>.
                  <br />
                  If you don&apos;t find her, <b>check your spam or promotions tab</b> – she sometimes like to
                  hide in there.
                </p>
              </div>
            </div>
          </div>
        </>
      );
    case ERROR:
      return (
        <>
          <div className="relative z-40 flex w-screen items-center justify-center overflow-auto sm:h-screen">
            <div className="m-6 grid max-w-screen-sm justify-items-start gap-8  py-20 sm:justify-items-center sm:py-0">
              <div className="grid gap-6 text-left sm:text-center">
                <h1 className="sm:text-display-website text-heading-screen">
                  Hey hey, <span className="text-brand-gradient">slow down</span>
                </h1>
                <p className="text-description text-lg leading-7">
                  Seems like you tried a little bit too hard: <b>you&apos;ve just submitted</b> another email
                  address.
                  <br />
                  Go and <b>check your email</b>, you might already have our welcome message in there.
                  Otherwise,
                  <b>wait a minute and try again</b>.
                </p>
              </div>
              <Button className="button-waitlist w-fit" onClick={resetForm}>
                Okay, I&apos;ll go back
              </Button>
            </div>
          </div>
        </>
      );
    default:
      return (
        <>
          <div className=" relative z-40 flex w-screen items-center justify-center overflow-auto sm:h-screen">
            <div className="m-6 grid max-w-screen-sm justify-items-center gap-8 py-20 sm:py-0">
              <div className="grid gap-6 text-left sm:text-center">
                <h1 className="sm:text-display-website text-heading-screen max-w-[600px]">
                  <span className="text-brand-gradient">User feedbacks</span> get real by being rewarded
                </h1>
                <p className="text-description text-lg leading-7">
                  We&apos;re building a spot where <b>user thoughts</b> become a <b>treasure</b>.
                  <br />
                  Entirely opensource, entirely bootstrapped.
                  <br />
                  We&apos;ll encourge users to listen to each other through <b>conversations</b> and{" "}
                  <b>rewarding</b>.
                  <br />
                  The result? A product actually built for your people. And <b>they will feel part of it</b>.
                  <br />
                  <b>Join the waitlist</b>: we&apos;ll send you new feature releases, case histories and tips.
                  Only when you need them.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="items-left xs:flex xs:items-center xs:justify-center grid w-full max-w-[420px] justify-start gap-3">
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                  className="input-waitlist w-full"
                  autoFocus
                />
                <Input type="hidden" name="userGroup" value="waitlist" />
                <Button
                  className={
                    formState === SUBMITTING ? "button-waitlist opacity-disabled" : "button-waitlist"
                  }
                  type="submit">
                  {formState === SUBMITTING ? "Wait a sec" : "Join the waitlist"}
                </Button>
              </form>
            </div>
          </div>
        </>
      );
  }
}

function isValidEmail(email: any) {
  return /.+@.+/.test(email);
}
