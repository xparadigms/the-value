import type { Metadata } from "next";
import { Flow } from "@/components/flow";
import { Card, H2, Page, PageHeader, Pager, Prose, SiteCard, Steps, Toc } from "@/components/ui";
import { FINANCE_MOVES } from "@/data/charts";
import { domain } from "@/data/site";

export const metadata: Metadata = { title: "Finance: Value Exchange" };

const d = domain("finance");

export default function FinancePage() {
  return (
    <Page>
      <PageHeader dot={d.color} eyebrow={`${d.idx} · Finance`} title="Value Exchange" lede="Finance makes value flow. It builds the infrastructure and marketplaces that issue, move, and regulate value." />
      <Toc
        items={[
          { id: "three-verbs", label: "Issue, Move, Regulate" },
          { id: "money", label: "Money as the Common Unit" },
          { id: "across-time", label: "Moving Value Across Time" },
        ]}
      />

      <H2 id="three-verbs" idx="01">
        Issue, Move, Regulate
      </H2>
      <Prose>
        <p>
          <strong>Finance</strong> makes value flow. It builds the infrastructure and marketplaces that issue, move, and regulate value.
        </p>
      </Prose>
      <Card eyebrow="Three verbs of finance" caption="Finance is organized by function, not institution. One institution can appear under all three verbs.">
        <Steps
          items={[
            { kick: "01 ISSUE", title: "Issue Value", text: "Money, credit, equity, pooled products, risk contracts, and digital assets." },
            { kick: "02 MOVE", title: "Value Flow", text: "Money, capital, and risk moving between people, firms, and countries." },
            { kick: "03 REGULATE", title: "Regulate Value", text: "Rule makers, stability safeguards, integrity controls, and assurance." },
          ]}
        />
      </Card>

      <H2 id="money" idx="02">
        Money as the Common Unit
      </H2>
      <Prose>
        <p>
          Every transaction is an exchange of value, and finance supplies the money, the markets, and the prices that make exchange possible at scale. Money is the common unit that lets people compare and transfer different kinds of value.
        </p>
      </Prose>

      <H2 id="across-time" idx="03">
        Moving Value Across Time
      </H2>
      <Prose>
        <p>
          Finance also moves value across time. It carries stored value from the past to the producers who create value in the future, and it prices the expectation that they will deliver.
        </p>
      </Prose>
      <Flow chart={FINANCE_MOVES} />

      <SiteCard d={d} />
      <Pager href="/finance" />
    </Page>
  );
}
