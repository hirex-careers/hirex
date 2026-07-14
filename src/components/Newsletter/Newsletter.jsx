import { useState } from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background Decorations */}
      <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0F172A] via-[#1E40AF] to-[#2563EB] px-5 py-10 shadow-2xl sm:rounded-[32px] sm:px-8 sm:py-12 md:px-12 lg:rounded-[36px] lg:px-16 lg:py-16 xl:px-20">

          {/* Inner Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl sm:h-72 sm:w-72"></div>

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl sm:h-72 sm:w-72"></div>

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur-md sm:text-sm">
                <FaEnvelope />
                Weekly Job Alerts
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                Never Miss Your
                <span className="block text-cyan-300">
                  Next Opportunity.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                Get handpicked jobs, career tips and hiring updates delivered
                directly to your inbox every week.
              </p>

              <div className="mx-auto mt-7 grid max-w-xl grid-cols-1 gap-3 text-left text-sm text-white sm:grid-cols-3 lg:mx-0">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="shrink-0 text-cyan-300" />
                  No spam
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="shrink-0 text-cyan-300" />
                  Weekly updates
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="shrink-0 text-cyan-300" />
                  Unsubscribe anytime
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl sm:p-7 lg:p-8">
              {subscribed ? (
                <div className="py-6 text-center sm:py-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl text-white sm:h-16 sm:w-16 sm:text-2xl">
                    <FaCheckCircle />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                    Subscription Successful!
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-blue-100 sm:text-base">
                    You will receive the latest HireX opportunities soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubscribed(false)}
                    className="mt-6 w-full rounded-xl border border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600 sm:w-auto"
                  >
                    Add Another Email
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Join 50,000+ Job Seekers
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
                    Enter your email and start receiving the latest
                    opportunities.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-7">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center rounded-2xl bg-white px-4 py-4 shadow-lg sm:px-5">
                        <FaEnvelope className="shrink-0 text-blue-600" />

                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="Enter your email address"
                          className="ml-3 min-w-0 w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                      >
                        Subscribe Now
                        <FaPaperPlane />
                      </button>
                    </div>
                  </form>

                  <p className="mt-4 text-center text-[11px] leading-5 text-blue-100 sm:text-xs">
                    By subscribing, you agree to receive HireX career updates.
                  </p>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;