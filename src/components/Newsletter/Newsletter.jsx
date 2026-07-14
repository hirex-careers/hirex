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
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Decorations */}
      <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"></div>

      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#0F172A] via-[#1E40AF] to-[#2563EB] px-8 py-14 shadow-2xl md:px-14 lg:px-20">
          {/* Inner Glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md">
                <FaEnvelope />
                Weekly Job Alerts
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Never Miss Your
                <span className="block text-cyan-300">
                  Next Opportunity.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
                Get handpicked jobs, career tips and hiring updates delivered
                directly to your inbox every week.
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-sm text-white">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-300" />
                  No spam
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-300" />
                  Weekly updates
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-300" />
                  Unsubscribe anytime
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl md:p-8">
              {subscribed ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
                    <FaCheckCircle />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-white">
                    Subscription Successful!
                  </h3>

                  <p className="mt-3 text-blue-100">
                    You will receive the latest HireX opportunities soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubscribed(false)}
                    className="mt-6 rounded-xl border border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600"
                  >
                    Add Another Email
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white">
                    Join 50,000+ Job Seekers
                  </h3>

                  <p className="mt-3 leading-7 text-blue-100">
                    Enter your email and start receiving the latest
                    opportunities.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-7">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center rounded-2xl bg-white px-5 py-4 shadow-lg">
                        <FaEnvelope className="shrink-0 text-blue-600" />

                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="Enter your email address"
                          className="ml-3 w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                      >
                        Subscribe Now
                        <FaPaperPlane />
                      </button>
                    </div>
                  </form>

                  <p className="mt-4 text-center text-xs text-blue-100">
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