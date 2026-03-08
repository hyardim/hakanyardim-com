import React from "react";
import Link from "next/link";

export const metadata = {
  title: "The Winner's Curse: Why Winning an Auction Might Be Your Biggest Mistake",
  description:
    "Unraveling the game theory myth of why winning a bidding process could actually guarantee a negative expected profit.",
};

export default function WinnersCursePage() {
  return (
    <main className="min-h-screen bg-[#0d0b08] text-white selection:bg-amber-500/30">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-amber-500/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-amber-400 transition-colors duration-300 mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-12 animate-fade-up">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500/80">Game Theory</span>
            <span className="text-stone-700">&middot;</span>
            <time className="text-[11px] text-stone-500 tabular-nums">March 7, 2026</time>
            <span className="text-stone-700">&middot;</span>
            <span className="text-[11px] text-stone-500">7 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
            The Winner&apos;s Curse: Why Winning an Auction Might Be Your Biggest Mistake
          </h1>
          <p className="mt-4 text-stone-400 leading-relaxed text-[15px]">
            Unraveling the game theory myth of why winning a bidding process could actually guarantee a negative expected profit.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Game Theory", "Probability", "Python"].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-amber-500/10 bg-amber-500/[0.04] px-2 py-0.5 text-[10px] text-amber-600/80 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 h-px bg-white/[0.05]" />
        </header>

        {/* Body */}
        <div className="space-y-6 text-[15px] leading-relaxed text-stone-300 animate-fade-up" style={{ "--delay": "100ms" } as React.CSSProperties}>

          <p>
            Who doesn&apos;t want to be a winner, right? From playing football on the field to playing FIFA with
            your friend, people like winning. In this article, I want to explain a phenomenon called the{" "}
            <strong className="text-white">&quot;Winner&apos;s Curse&quot;</strong> as a topic of game theory,
            unraveling the myth of why winning a bidding process could actually be a massive mistake.
          </p>

          {/* Scenario Setup */}
          <div className="my-8 rounded-2xl border border-amber-500/10 bg-amber-500/[0.02] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500/70 mb-4">The Scenario</p>
            <p className="text-stone-300 leading-relaxed mb-4">
              Picture this: You and I are sitting at a high-end art auction. Up on the block is a mystery painting
              hidden under a sheet.
            </p>
            <p className="text-stone-300 leading-relaxed mb-4">
              I turn to you and whisper:{" "}
              <em className="text-stone-200">
                &quot;I have no idea who painted that, but I know its true value is completely random — somewhere
                between 0 and 100,000. I also happen to know a museum director who will buy it off you today
                for <strong className="text-white">1.5×</strong> whatever it&apos;s actually worth.&quot;
              </em>
            </p>
            <p className="text-stone-400 text-sm border-t border-white/[0.04] pt-4">
              Bid <strong className="text-white">higher</strong> than the painting&apos;s secret value → you win.
              Bid lower → you lose, and we go home.
            </p>
          </div>

          <p>
            You are thrilled, greedy, and believe you are the smartest guy in the auction room. You think:{" "}
            <em>&quot;Well, the average price is 50,000, so my average gain is 25,000. There is no way I am
            losing this trade with a bid of 50,000.&quot;</em>
          </p>

          <p>
            I know, it sounds bulletproof. But you know what?{" "}
            <strong className="text-white">You just locked yourself in for a losing trade.</strong>
          </p>

          <p>
            Let <em>V</em> denote the actual value of the painting, and <em>B</em> denote the bid you place.
            Here&apos;s what actually happens in each case.
          </p>

          {/* Scenario A & B Cards */}
          <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Scenario A */}
            <div className="rounded-2xl border border-rose-500/15 bg-rose-500/[0.03] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400">Scenario A</span>
                <span className="text-[10px] text-stone-600">You Win</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed mb-4">
                Winning means <em>V</em> &lt; <em>B</em>. The painting is now uniform on [0,&nbsp;<em>B</em>].
                You just learned it&apos;s worth <em>less</em> than you paid.
              </p>
              <div className="rounded-lg bg-black/30 border border-white/[0.04] p-3 font-mono text-xs text-stone-300 space-y-1">
                <div>E[V | V &lt; B] = B / 2</div>
                <div>Revenue&nbsp;= 1.5 × (B/2) = 0.75B</div>
                <div className="text-rose-400 font-semibold pt-1 border-t border-white/[0.05]">Profit = −0.25B</div>
              </div>
            </div>

            {/* Scenario B */}
            <div className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Scenario B</span>
                <span className="text-[10px] text-stone-600">You Lose</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed mb-4">
                Your bid is rejected. <em>V</em> &gt; <em>B</em> — you underpriced it — but you also
                dodged a guaranteed loss.
              </p>
              <div className="rounded-lg bg-black/30 border border-white/[0.04] p-3 font-mono text-xs text-stone-300">
                <div className="text-amber-400 font-semibold">Profit = $0</div>
                <div className="text-stone-600 mt-1">You lose nothing. You walk away clean.</div>
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-white/[0.04]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">The Plot Twist</span>
            <div className="flex-1 h-px bg-white/[0.04]" />
          </div>

          <h2 className="text-xl font-bold text-white">Can&apos;t I Still Get Lucky?</h2>

          <p>
            Now, if you are a sharp reader, you might be thinking:{" "}
            <em>&quot;Wait a minute. Expected value is just an average. What if the painting&apos;s actual value
            is 40,000 and I bid 50,000? The museum pays me 60,000, and I make a sweet 10,000 profit!
            I can still win this, right?&quot;</em>
          </p>

          <p>
            You are absolutely right — it is entirely possible to make money on a single trade. But let&apos;s
            look at exactly how lucky you need to be. To turn a profit, the museum&apos;s payout must beat your bid:
          </p>

          <div className="my-6 rounded-xl border border-white/[0.05] bg-stone-900/50 p-5 font-mono text-sm text-stone-300 space-y-1.5">
            <div className="text-stone-500">{"// Profit condition"}</div>
            <div>1.5V &gt; B</div>
            <div>V &gt; B / 1.5</div>
            <div className="text-amber-300 font-semibold">V &gt; (2/3) × B</div>
          </div>

          <p>
            Your bid is only profitable if the painting&apos;s true value falls in the{" "}
            <strong className="text-white">upper third</strong> — between 66.7% and 100% of your bid.
            Since <em>V</em> is uniform on [0,&nbsp;<em>B</em>] when you win, the odds are fixed:
          </p>

          {/* Probability Bar */}
          <div className="my-6">
            <div className="flex rounded-xl overflow-hidden h-11 text-xs font-semibold">
              <div className="flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-400 w-1/3 gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                Profit · 33.3%
              </div>
              <div className="flex items-center justify-center bg-rose-500/10 border border-rose-500/20 text-rose-400 w-2/3 gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg>
                Loss · 66.7%
              </div>
            </div>
            <div className="flex justify-between mt-2 text-[11px] text-stone-600">
              <span>V &gt; (2/3)B → you profit</span>
              <span>V ≤ (2/3)B → you lose</span>
            </div>
          </div>

          <p>
            Why does the house always win the long game? The scales are unbalanced. Your upside is capped — bid
            60,000 and the maximum profit is barely under 30,000. But if the painting is worth 0, you lose your
            entire 60,000 bid. That heavy 67% chance of severe losses drags your average straight down to the
            mathematically guaranteed{" "}
            <code className="text-amber-300 bg-amber-500/[0.08] px-1.5 py-0.5 rounded text-sm">−0.25B</code>.
          </p>

          {/* Section divider */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-white/[0.04]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">Conclusion</span>
            <div className="flex-1 h-px bg-white/[0.04]" />
          </div>

          {/* Key Insight Callout */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] px-6 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500/80 mb-2">Key Insight</p>
            <p className="text-stone-200 leading-relaxed">
              Notice the negative sign. Whatever bid <em>B</em> you place, your expected profit is{" "}
              <strong className="text-white">always negative</strong>. Every time you &quot;win&quot; this auction,
              you can expect to lose exactly <strong className="text-white">25% of your bid</strong>.
            </p>
          </div>

          <p>
            This is the Winner&apos;s Curse: sometimes, the only winning move is not to play. Or in this case,
            to confidently bid 0 and walk away.
          </p>

          {/* Section divider */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-white/[0.04]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600">Simulation</span>
            <div className="flex-1 h-px bg-white/[0.04]" />
          </div>

          <h2 className="text-xl font-bold text-white">Proving It with Python</h2>

          <p>
            Math is great, but code is better. Let&apos;s write a quick simulation to play this exact game
            100,000 times and see if the math holds up.
          </p>

          <pre className="my-6 rounded-xl border border-white/[0.05] bg-stone-950/80 p-5 overflow-x-auto text-sm font-mono text-stone-300 leading-relaxed"><code>{`import random

# 1. Set the Parameters
revenueCoeff = 1.5
B = 50000
n = 100000

# 2. Set up Trackers
netProfit = 0
profitableWins = 0
numberOfWins = 0

# 3. Run the Simulation
for i in range(n):
    V = random.uniform(0, 100000)

    if V > B:
        continue

    numberOfWins += 1

    revenue = V * revenueCoeff
    currProfit = revenue - B
    netProfit += currProfit

    if currProfit > 0:
        profitableWins += 1

# 4. Results
averageProfit = netProfit / numberOfWins
winRate = (profitableWins / numberOfWins) * 100

print(f"Auctions Won: {numberOfWins} out of {n}")
print(f"Average Profit per Win: \${averageProfit:.2f}")
print(f"Profitable Win Rate: {winRate:.2f}%")`}</code></pre>

          <p>The output:</p>

          <pre className="my-4 rounded-xl border border-amber-500/10 bg-stone-950/80 p-5 overflow-x-auto text-sm font-mono leading-relaxed"><code className="text-amber-300">{`Auctions Won: 49812 out of 100000
Average Profit per Win: $-12511.40
Profitable Win Rate: 33.21%`}</code></pre>

          <p className="font-semibold text-white">The Law of Large Numbers never lies.</p>

          <ul className="space-y-2 pl-5 list-disc marker:text-amber-500/60">
            <li>We won roughly half the time (bidding 50,000 out of 100,000).</li>
            <li>We only made a profit on about <strong className="text-white">33.3%</strong> of the games we won.</li>
            <li>
              Our expected profit settled right at −12,500 — exactly{" "}
              <code className="text-amber-300 bg-amber-500/[0.08] px-1.5 py-0.5 rounded text-sm">−0.25 × B</code>.
            </li>
          </ul>

          <p className="text-stone-500 text-sm mt-8 border-t border-white/[0.04] pt-6">
            Want to play with the parameters and run the simulation yourself? You can find the full Python
            Jupyter Notebook on my{" "}
            <a
              href="https://github.com/hyardim/website-blog-posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              GitHub
            </a>.
          </p>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex items-center justify-between animate-fade-up" style={{ "--delay": "300ms" } as React.CSSProperties}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All posts
          </Link>
        </div>
      </div>
    </main>
  );
}
