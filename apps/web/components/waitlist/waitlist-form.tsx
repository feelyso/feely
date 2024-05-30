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
          <div className=" relative z-50 flex h-screen w-screen items-center justify-center">
            <div className="grid max-w-[440px] gap-8 p-6">
              <div className="grid gap-4 text-center">
                <h1 className="text-display-website">
                  Yay, <span className="text-brand-gradient">success</span>
                </h1>
                <p className="text-description text-md">
                  Lorem ipsum dolor sit amet consectetur. Consequat eu fringilla dui tincidunt semper. Sed
                  adipiscing faucibus nisi egestas ut. Quam eget risus turpis elit vel id hendrerit sagittis.
                  Condimentum nunc vitae pellentesque nisl lorem elit auctor.
                </p>
              </div>
            </div>
          </div>
        </>
      );
    case ERROR:
      return (
        <>
          <div className=" relative z-50 flex h-screen w-screen items-center justify-center">
            <div className="grid max-w-[440px] justify-items-center gap-8 p-6">
              <div className="grid gap-4 text-center">
                <h1 className="text-heading-screen">Something went wrong</h1>
                <p className="text-description text-md">
                  Lorem ipsum dolor sit amet consectetur. Consequat eu fringilla dui tincidunt semper. Sed
                  adipiscing faucibus nisi egestas ut. Quam eget risus turpis elit vel id hendrerit sagittis.
                  Condimentum nunc vitae pellentesque nisl lorem elit auctor.
                </p>
              </div>
              <Button className="button-waitlist w-fit" onClick={resetForm}>
                Back
              </Button>
            </div>
          </div>
        </>
      );
    default:
      return (
        <>
          <div className=" relative z-50 flex h-screen w-screen items-center justify-center">
            <div className="grid max-w-[440px] gap-8 p-6">
              <div className="grid gap-4 text-center">
                <h1 className="text-display-website">
                  Join the <span className="text-brand-gradient">waitlist</span>
                </h1>
                <p className="text-description text-md">
                  Lorem ipsum dolor sit amet consectetur. Consequat eu fringilla dui tincidunt semper. Sed
                  adipiscing faucibus nisi egestas ut. Quam eget risus turpis elit vel id hendrerit sagittis.
                  Condimentum nunc vitae pellentesque nisl lorem elit auctor.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex items-center justify-center gap-3">
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                  className="input-waitlist w-full max-w-96"
                />
                <Input type="hidden" name="userGroup" value="waitlist" />
                <Button
                  className={
                    formState === SUBMITTING ? "button-waitlist opacity-disabled" : "button-waitlist"
                  }
                  type="submit">
                  {formState === SUBMITTING ? "Please wait..." : "Join now"}
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
