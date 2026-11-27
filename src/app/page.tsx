import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CompareTable } from "@/components/compare-table";
import { Flow } from "@/components/flow";
import { Card, H2, Page, PageHeader, Pager, Prose, Steps } from "@/components/ui";
import { CREDIT_LOOP, FOUR_DOMAINS } from "@/data/charts";
import { DOMAINS } from "@/data/site";

export default function Home() {
  return (
    <Page className="max-w-[1040px]">
      <PageHeader eyebrow="Working thesis, November 2026" title="The Value" lede="How culture, politics, industry, and finance are connected through one concept: value." />

      <Flow chart={FOUR_DOMAINS} />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DOMAINS.map((d) => (
          <div key={d.slug} className="flex flex-col rounded-[20px] bg-surface p-5 shadow-[0_0_0_1px_var(--tds-line)]">
            <Link href={`/${d.slug}`} className="group flex-1">
              <div className="t-eyebrow flex items-center gap-2 text-ink-3">
                <span className="size-2 rounded-full" style={{ background: d.color }} />
                {d.idx} · {d.domain}
              </div>
              <div className="mt-4 text-[22px] leading-[1.1] tracking-[-0.02em] group-hover:text-blue">{d.role}</div>
              <p className="t-b2 mt-2 text-ink-2">{d.question}</p>
              <span className="t-b2 mt-4 inline-flex items-center gap-1 text-ink-3 group-hover:text-ink">
                Read <ArrowRight className="size-3.5" />
              </span>
            </Link>
            {d.site && (
              <a href={d.site.url} target="_blank" rel="noreferrer" className="t-b3 mt-4 flex items-center justify-between gap-2 border-t border-line pt-3 text-ink-3 hover:text-ink">
                {d.site.name}
                <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
              </a>
            )}
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-[920px]">
        <H2 id="the-thesis" idx="01">
          The Thesis
        </H2>
        <Prose>
          <p>
            One concept connects culture, politics, industry, and finance: <strong>value</strong>. Each domain performs one job in relation to value.
          </p>
          <p>Culture defines value, and politics organizes those definitions into a system of priorities and rules. Industry creates value, and finance exchanges it.</p>
          <p>
            The four domains form two pairs. Culture and politics decide what value is and which values come first, while industry and finance produce that value and move it.
          </p>
        </Prose>

        <Card eyebrow="Two pairs" caption="Every domain does one job. The pairs meet where politics governs industry.">
          <Steps
            items={[
              { kick: "PAIR ONE", title: "Define and rank value", text: "Culture says what people want. Politics decides which wants come first and writes the rules." },
              { kick: "PAIR TWO", title: "Create and move value", text: "Industry produces what the culture values. Finance issues, moves, and regulates it across people and time." },
            ]}
          />
        </Card>

        <H2 id="credit" idx="02">
          Credit Holds It Together
        </H2>
        <Prose>
          <p>
            <strong>Credit</strong> rests on expected future value, and consistent exchange over time creates it. A borrower receives capital today against future repayment; a politician receives support today against future delivery.
          </p>
        </Prose>
        <Flow chart={CREDIT_LOOP} />
        <Link href="/credit" className="t-b2 inline-flex items-center gap-1 text-ink-2 hover:text-ink">
          Read about the common mechanism <ArrowRight className="size-3.5" />
        </Link>

        <H2 id="full-system" idx="03">
          The Full System
        </H2>
        <Prose>
          <p>The four domains answer four questions about value. Each one relies on a different form of trust and fails in a different way.</p>
        </Prose>
        <Card eyebrow="Four domains compared" caption="Culture and politics form the first pair. Industry and finance form the second.">
          <CompareTable />
        </Card>
        <Prose>
          <p>
            The goal is to keep value flowing across the past, the present, and the future. The system is healthy when the value delivered matches the value expected, and it comes under strain when promises exceed what productivity can deliver.
          </p>
          <p>The two pairs can also fall out of step. Strain appears when politics ranks values the culture no longer holds, or when finance prices value industry has not created.</p>
        </Prose>
        <Card eyebrow="Three kinds of strain" caption="Each strain is a gap between value expected and value delivered.">
          <Steps
            items={[
              { kick: "01 OVERPROMISE", title: "Promises Outrun Output", text: "Expectations exceed what productivity can deliver, and credit eventually contracts." },
              { kick: "02 POLITICS ↔ CULTURE", title: "Stale Priorities", text: "Politics ranks values the culture no longer holds, and support is withdrawn." },
              { kick: "03 FINANCE ↔ INDUSTRY", title: "Unbacked Prices", text: "Finance prices value that industry has not created, and prices fall back." },
            ]}
          />
        </Card>
        <Pager href="/" />
      </div>
    </Page>
  );
}
