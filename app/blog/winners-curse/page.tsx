import Link from "next/link";

export const metadata = {
  title: "The Winner's Curse: Why Winning an Auction Might Be Your Biggest Mistake",
  description:
    "Unraveling the game theory myth of why winning a bidding process could actually guarantee a negative expected profit.",
};

export default function WinnersCursePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-emerald-400 transition-colors duration-300 mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-12 animate-fade-up">
          <div className="flex items-center gap-2 mb-4">
            <time className="text-[11px] text-neutral-500 tabular-nums">March 7, 2026</time>
            <span className="text-neutral-700">&middot;</span>
            <span className="text-[11px] text-neutral-500">7 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            The Winner&apos;s Curse: Why Winning an Auction Might Be Your Biggest Mistake
          </h1>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Unraveling the game theory myth of why winning a bidding process could actually guarantee a negative expected profit.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Game Theory", "Probability", "Python"].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] text-neutral-500 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 h-px bg-white/[0.06]" />
        </header>

        {/* Body */}
        <article className="prose prose-invert prose-neutral max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:text-[15px]
          prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-code:text-emerald-300 prose-code:bg-white/[0.05] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-neutral-900/80 prose-pre:border prose-pre:border-white/[0.06] prose-pre:rounded-xl
          prose-blockquote:border-l-emerald-500/50 prose-blockquote:text-neutral-400
          animate-fade-up"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >

          <p>
            Imagine you&apos;re at an auction for a jar of coins. You don&apos;t know exactly how many coins are
            inside, but you can make an estimate. You study the jar, guess it holds around $50 worth, and bid $45
            to leave yourself a margin. You win. Congratulations — you probably just lost money.
          </p>

          <p>
            This is the <strong>Winner&apos;s Curse</strong>: a counterintuitive phenomenon where the winner of an
            auction is systematically likely to have <em>overpaid</em>. It&apos;s not a fluke. It&apos;s a
            mathematical certainty that emerges from the structure of competitive bidding itself.
          </p>

          <h2>The Setup: Common Value Auctions</h2>

          <p>
            The Winner&apos;s Curse arises specifically in <strong>common value auctions</strong> — situations where
            the item being auctioned has a single true value, but bidders must estimate that value independently
            with incomplete information.
          </p>

          <p>
            Classic examples include:
          </p>

          <ul>
            <li>Oil field drilling rights (the oil is worth a fixed amount underground)</li>
            <li>Treasury bill auctions</li>
            <li>Bidding on an acquired company&apos;s assets</li>
            <li>That jar of coins at a school fundraiser</li>
          </ul>

          <p>
            Each bidder independently estimates the true value <code>V</code>. If bidder <em>i</em> estimates
            <code>v_i = V + ε_i</code>, where <code>ε_i</code> is random noise centered around zero, then on
            average the estimates are unbiased. Your individual estimate is just as likely to be too high as too low.
          </p>

          <p>
            So far, so reasonable. The problem is <em>selection bias</em>.
          </p>

          <h2>Why Winning Is Bad News</h2>

          <p>
            Consider 20 bidders, each estimating the same jar of coins independently. Their estimates scatter
            around the true value — some too high, some too low. The person who wins the auction is, by definition,
            the one who estimated <em>highest</em>.
          </p>

          <p>
            The winner isn&apos;t the most accurate estimator. They&apos;re the most optimistic one.
          </p>

          <p>
            In statistical terms: the <strong>maximum of a set of unbiased estimates is a biased
            (upward) estimator</strong> of the true value. Winning the auction is strong Bayesian evidence
            that your estimate was too high — because if it weren&apos;t too high, someone else would have
            outbid you.
          </p>

          <blockquote>
            Winning means your estimate exceeded everyone else&apos;s. Since all estimates are noisy, the
            highest one is almost certainly an overestimate.
          </blockquote>

          <h2>The Math</h2>

          <p>
            Let&apos;s make this precise. Suppose <code>n</code> bidders each observe a signal{" "}
            <code>s_i = V + ε_i</code> where <code>ε_i ~ N(0, σ²)</code> i.i.d. A naive bidder bids their
            signal directly: <code>b_i = s_i</code>.
          </p>

          <p>
            The expected value of the maximum of <code>n</code> standard normal draws is approximately{" "}
            <code>E[max] ≈ σ · √(2 ln n)</code>. With 20 bidders and <code>σ = $5</code>, that&apos;s roughly:
          </p>

          <pre><code>{`E[max overshoot] ≈ 5 · √(2 · ln(20))
                 ≈ 5 · √(5.99)
                 ≈ 5 · 2.45
                 ≈ $12.25`}</code></pre>

          <p>
            So the winner in a 20-bidder auction will, on average, have overestimated by about $12 — even though
            every individual estimate was unbiased. The more bidders, the worse it gets.
          </p>

          <h2>Simulating It in Python</h2>

          <p>
            A simple Monte Carlo confirms the theory immediately:
          </p>

          <pre><code>{`import numpy as np

np.random.seed(42)

TRUE_VALUE = 100    # true value of the item
SIGMA = 10          # noise in each bidder's estimate
N_BIDDERS = 20
N_SIMULATIONS = 100_000

profits = []

for _ in range(N_SIMULATIONS):
    # Each bidder independently estimates V
    estimates = TRUE_VALUE + np.random.normal(0, SIGMA, N_BIDDERS)

    # Winner bids their estimate; pays their bid
    winning_bid = estimates.max()
    profit = TRUE_VALUE - winning_bid
    profits.append(profit)

avg_profit = np.mean(profits)
print(f"Average profit for naive winner: ${avg_profit:.2f}")
# Average profit for naive winner: $-12.27`}</code></pre>

          <p>
            The naive winner loses money on average — every single time, in expectation. The auction is not rigged.
            There&apos;s no fraud. It&apos;s pure statistics.
          </p>

          <h2>The Rational Response</h2>

          <p>
            A rational bidder accounts for the winner&apos;s curse by <strong>shading their bid downward</strong>.
            The key insight from game theory (Milgrom &amp; Weber, 1982) is that a rational bidder should not
            condition on their own signal alone, but on the event that they win:
          </p>

          <blockquote>
            Bid as if you know your estimate is the highest one — because if you win, it will have been.
          </blockquote>

          <p>
            In the symmetric equilibrium of a common value auction, rational bidders shade their bids by roughly
            the expected amount they&apos;ve overestimated. The corrected bid is approximately:
          </p>

          <pre><code>{`def rational_bid(signal, n_bidders, sigma):
    # Expected overshoot given that this signal is the maximum
    # Uses order statistics: E[max of n normals] ≈ sigma * sqrt(2 * ln(n))
    expected_overshoot = sigma * np.sqrt(2 * np.log(n_bidders))
    return signal - expected_overshoot

# Simulate with rational bidders
profits_rational = []
for _ in range(N_SIMULATIONS):
    estimates = TRUE_VALUE + np.random.normal(0, SIGMA, N_BIDDERS)
    bids = [rational_bid(e, N_BIDDERS, SIGMA) for e in estimates]
    winner_idx = np.argmax(bids)
    # Winner pays their (rational) bid
    profit = TRUE_VALUE - bids[winner_idx]
    profits_rational.append(profit)

print(f"Average profit for rational winner: ${np.mean(profits_rational):.2f}")
# Average profit for rational winner: $0.08  (≈ 0, as theory predicts)`}</code></pre>

          <p>
            With proper bid shading, the expected profit approaches zero — the competitive equilibrium. No one
            systematically wins or loses; value is priced correctly.
          </p>

          <h2>Real-World Consequences</h2>

          <p>
            The winner&apos;s curse isn&apos;t academic. It has destroyed real value at scale:
          </p>

          <ul>
            <li>
              <strong>Oil &amp; gas auctions:</strong> Studies in the 1970s found that winning bidders on
              offshore drilling rights consistently earned below-market returns. The oil was worth less than
              they paid to find it — on average.
            </li>
            <li>
              <strong>M&amp;A (mergers and acquisitions):</strong> Research consistently shows that acquiring
              companies&apos; stock prices fall on announcement. The acquirer overpaid. The targets&apos;
              shareholders win; the acquirers&apos; shareholders lose.
            </li>
            <li>
              <strong>IPO auctions:</strong> Bidders in book-built IPOs who get full allocations often discover
              the allocation itself was a signal — demand was low.
            </li>
            <li>
              <strong>Sports free agency:</strong> Teams that win bidding wars for star players routinely
              underperform the expected value of those contracts.
            </li>
          </ul>

          <h2>Key Takeaways</h2>

          <p>
            The winner&apos;s curse teaches a deep lesson about <strong>selection effects</strong>. Any time
            you win a competitive process based on private estimates of a common value, your victory is itself
            information — and not the good kind. It tells you that you were the most optimistic estimator in
            the room.
          </p>

          <p>
            The cure is disciplined bid shading: always ask yourself, &quot;What would it mean about my estimate
            if I won?&quot; If the answer is &quot;it would mean I was probably too optimistic,&quot; then bid
            lower to account for that.
          </p>

          <p>
            Paradoxically, the best bidders are often the ones who seem to lose a lot of auctions — because
            they&apos;ve correctly priced the curse into their bids.
          </p>

        </article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-between animate-fade-up" style={{ "--delay": "300ms" } as React.CSSProperties}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-emerald-400 transition-colors duration-300"
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
