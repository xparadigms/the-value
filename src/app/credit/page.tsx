import type { Metadata } from "next";
import { Flow } from "@/components/flow";
import { Card, H2, Page, PageHeader, Pager, Prose, Steps } from "@/components/ui";
import { CREDIT_LOOP } from "@/data/charts";

export const metadata: Metadata = { title: "Credit: The Common Mechanism" };

export default function CreditPage() {
  return (
    <Page>
      <PageHeader eyebrow="Credit · The Common Mechanism" title="The Common Mechanism" lede="Credit rests on expected future value, and consistent exchange over time creates it. It works the same way in politics and in finance." />

      <H2 id="two-advances" idx="01">
        Two Advances, One Logic
      </H2>
      <Prose>
        <p>A borrower receives capital today against future repayment. A politician receives support today against future delivery.</p>
      </Prose>
      <Card eyebrow="The same promise in two domains" caption="Both advances are made today against value that has not yet been delivered.">
        <Steps
          items={[
            { kick: "FINANCE", title: "Capital for Repayment", text: "Lenders and investors advance capital to producers who promise future returns." },
            { kick: "POLITICS", title: "Support for Delivery", text: "Citizens and coalitions advance support to leaders who promise future value." },
          ]}
        />
      </Card>

      <H2 id="the-loop" idx="02">
        The Credit Loop
      </H2>
      <Prose>
        <p>
          When the expectation is met in finance, credit expands and industry grows. When it is met in politics, support grows and credibility builds.
        </p>
        <p>When the expectation fails, credit contracts. Lenders withdraw capital and supporters withdraw their backing.</p>
      </Prose>
      <Flow chart={CREDIT_LOOP} />

      <Pager href="/credit" />
    </Page>
  );
}
