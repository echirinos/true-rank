import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  CheckCircle2,
  BarChart3,
  Medal,
  BadgeCheck,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/TrueRankLogo.png"
            alt="True Rank Logo"
            width={128}
            height={128}
          />
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            How It Works
          </Link>
          <Link
            href="#comparison"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Comparison
          </Link>
        </nav>
        <div>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700"
          >
            Join Waitlist
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Coming Soon
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  A Better Pickleball Rating System
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  True Rank provides accurate, category-specific pickleball
                  ratings without the clutter of advertisements. Know your true
                  skill level in Men's, Women's, and Mixed play.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700"
                  >
                    Join the Waitlist
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/app-review-1.png"
                  alt="True Rank App Review Preview"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover border shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Why Choose True Rank?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  True Rank delivers what pickleball players actually want:
                  accurate, format-specific ratings without distractions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Medal className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Category-Specific Ratings</h3>
                <p className="text-gray-500">
                  Separate ratings for Men's, Women's, and Mixed play to
                  accurately reflect your skills in each format.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <BadgeCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Ad-Free Experience</h3>
                <p className="text-gray-500">
                  No advertisements or distractions. Just the ratings and
                  information you need.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Accuracy Focused</h3>
                <p className="text-gray-500">
                  Our algorithm is designed to provide the most accurate
                  reflection of your true skill level.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Understanding True Rank's Rating System
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our rating system provides a more comprehensive view of your
                  pickleball skills across different play formats.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/playing-pickleball.jpg"
                alt="People playing pickleball"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <span className="font-bold">M</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        Men's Doubles Rating
                      </h3>
                      <p className="text-gray-500">
                        Specific rating based on your performance in men's
                        doubles matches only.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <span className="font-bold">W</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        Women's Doubles Rating
                      </h3>
                      <p className="text-gray-500">
                        Specific rating based on your performance in women's
                        doubles matches only.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <span className="font-bold">X</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        Mixed Doubles Rating
                      </h3>
                      <p className="text-gray-500">
                        Specific rating based on your performance in mixed
                        doubles matches only.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="comparison"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Comparison
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  True Rank vs. DUPR
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how True Rank compares to other rating systems in the
                  pickleball community.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="rounded-xl border bg-white shadow-sm">
                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="col-span-1"></div>
                  <div className="col-span-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-1 text-lg font-bold">
                        <Image
                          src="/TrueRankLogo.png"
                          alt="True Rank Logo"
                          width={24}
                          height={24}
                        />
                        True Rank
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <div className="flex items-center gap-1 text-lg font-bold">
                      <Image
                        src="/dupr-logo.png"
                        alt="DUPR Logo"
                        width={24}
                        height={24}
                      />
                      DUPR
                    </div>
                  </div>
                </div>
                <div className="border-t grid grid-cols-3 gap-4 p-6">
                  <div className="col-span-1 font-medium">
                    Format-Specific Ratings
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="col-span-1 flex justify-center text-gray-500">
                    Single rating only
                  </div>
                </div>
                <div className="border-t grid grid-cols-3 gap-4 p-6">
                  <div className="col-span-1 font-medium">
                    Ad-Free Experience
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="col-span-1 flex justify-center text-gray-500">
                    Contains ads
                  </div>
                </div>
                <div className="border-t grid grid-cols-3 gap-4 p-6">
                  <div className="col-span-1 font-medium">Clean Interface</div>
                  <div className="col-span-1 flex justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="col-span-1 flex justify-center text-gray-500">
                    Cluttered
                  </div>
                </div>
                <div className="border-t grid grid-cols-3 gap-4 p-6">
                  <div className="col-span-1 font-medium">
                    Focus on Player Experience
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="col-span-1 flex justify-center text-gray-500">
                    Mixed focus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="algorithm"
          className="w-full py-12 md:py-24 lg:py-32 bg-white border-t"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Why TrueRank's Algorithm Out-plays the Rest
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What Makes Our Ratings Smarter
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fewer matches to get ranked, ratings that actually reflect
                  today's form, and clear separation between Men's, Women's, and
                  Mixed play.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="overflow-x-auto mb-12">
                <table className="min-w-full border text-left text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 font-semibold">What we do</th>
                      <th className="px-4 py-2 font-semibold">
                        How it helps you
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2">
                        Glicko-2 core, not basic Elo
                        <br />
                        <span className="text-gray-500">
                          We track both rating and volatility, updating
                          confidence after every match.
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        You reach a stable rating in 6–8 verified matches
                        instead of 20+.
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">
                        Performance-weighted points
                        <br />
                        <span className="text-gray-500">
                          Margin of victory, rally length, and clutch points
                          carry extra weight.
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        Close battles nudge your rating; blowouts move it
                        faster—no more stagnant scores.
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">
                        Recency bias that decays smoothly
                      </td>
                      <td className="px-4 py-2">
                        Recent form matters, but a single bad night won't tank
                        your rating.
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">
                        Separate pools for Men's, Women's, and Mixed
                      </td>
                      <td className="px-4 py-2">
                        No cross-inflation—each format reflects its own
                        competitive landscape.
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">
                        Two-captain verification + club imports
                        <br />
                        <span className="text-gray-500">
                          Scores must be confirmed by both teams; leagues upload
                          nightly CSVs or connect via API.
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        Cleaner data, zero self-reported fluff, and thousands of
                        results flowing in from day one.
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2">
                        Open math & public changelog
                      </td>
                      <td className="px-4 py-2">
                        Every tweak to the formula is logged and explained—no
                        black boxes.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto mb-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  How TrueRank Compares to DUPR and Elo
                </h3>
                <table className="min-w-full border text-left text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 font-semibold">System</th>
                      <th className="px-4 py-2 font-semibold">Core math</th>
                      <th className="px-4 py-2 font-semibold">
                        Key variables they publish
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-bold">DUPR</td>
                      <td className="px-4 py-2">
                        Proprietary Elo-style model wrapped in a Bayesian
                        logistic regression. Adjusts win-probability curve after
                        every update, similar to Glicko, and applies a
                        post-processing "reliability" weight.
                      </td>
                      <td className="px-4 py-2">
                        • Win/Loss only (latest update removed close-score
                        bonuses)
                        <br />• Opponent's current rating
                        <br />• Your last 30 singles / 60 doubles results
                        <br />• Reliability Score (how much data you've logged)
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-bold">Plain Elo</td>
                      <td className="px-4 py-2">
                        Fixed K-factor; rating moves based solely on
                        expected-vs-actual result.
                      </td>
                      <td className="px-4 py-2">
                        Win/Loss & opponent rating only
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4 text-gray-600 text-sm text-center">
                  DUPR isn't using a brand-new statistical technique—it's a
                  customized, multi-factor Elo variant that throws everything
                  (recent results, sample size, margin rules) into a closed
                  formula. They've never open-sourced the exact coefficients,
                  but every release note describes tweaks to those weighting
                  factors rather than a wholesale new algorithm.
                </p>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold mb-4">
                  Bottom line: fewer matches to get ranked, ratings that
                  actually reflect today's form, and clear separation between
                  Men's, Women's, and Mixed play.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700"
                >
                  Ready to see a rating that actually makes court assignments
                  fair?
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Built by Experts
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Created by a Certified DUPR Coach
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  True Rank was developed by someone who understands the current
                  rating system's limitations from the inside.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <div className="rounded-xl border bg-white shadow-sm p-8">
                <div className="flex flex-col items-center space-y-6">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/dupr-coach-logo.png"
                      alt="DUPR Certified Coach"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">DUPR Certified Coach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Having worked extensively with DUPR's rating system as a
                      certified coach, I've seen firsthand where it falls short.
                      True Rank addresses these pain points with a more
                      accurate, transparent, and user-focused approach to
                      pickleball ratings.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-semibold text-green-600">
                          Deep Understanding
                        </div>
                        <div className="text-gray-600">
                          Years of experience with current rating systems
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-semibold text-green-600">
                          Player-Focused
                        </div>
                        <div className="text-gray-600">
                          Built from a coach's perspective on player needs
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-semibold text-green-600">
                          Proven Expertise
                        </div>
                        <div className="text-gray-600">
                          Certified by the industry's leading rating platform
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Experience True Rank?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our waitlist today and be among the first to access True
                  Rank when we launch.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link
                  href="/signup"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-green-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Join the Waitlist
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/TrueRankLogo.png"
              alt="True Rank Logo"
              width={32}
              height={32}
            />
            <p className="text-sm font-medium">
              © 2025 True Rank. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
