import type { Metadata } from "next";
import { Flow } from "@/components/flow";
import { H2, Page, PageHeader, Pager, Prose, SiteCard, Toc } from "@/components/ui";
import { CULTURE_TO_POLITICS } from "@/data/charts";
import { domain } from "@/data/site";

export const metadata: Metadata = { title: "Politics: Value System" };

const d = domain("politics");

export default function PoliticsPage() {
  return (
    <Page>
      <PageHeader dot={d.color} eyebrow={`${d.idx} · Politics`} title="Value System" lede="Politics ranks a society's competing definitions of value, writes the rules of exchange, and chooses a direction." />
      <Toc
        items={[
          { id: "ranking-values", label: "Ranking Values" },
          { id: "support", label: "Support for Expected Value" },
          { id: "purpose", label: "The Purpose of Politics" },
        ]}
      />

      <H2 id="ranking-values" idx="01">
        Ranking Values
      </H2>
      <Prose>
        <p>
          A society holds many definitions of value at once, and they compete for limited resources. <strong>Politics</strong> is the system that ranks them, writes the rules of exchange, and chooses a direction.
        </p>
      </Prose>

      <H2 id="support" idx="02">
        Support for Expected Value
      </H2>
      <Prose>
        <p>
          Politics is built on support from individuals, who give it in exchange for the future value they expect to receive. That support forms coalitions, and coalitions form parties and countries.
        </p>
      </Prose>
      <Flow chart={CULTURE_TO_POLITICS} />

      <H2 id="purpose" idx="03">
        The Purpose of Politics
      </H2>
      <Prose>
        <p>
          The purpose of politics is to keep industry sustainable and growing, with a clear direction. It succeeds when its rules reflect what the culture values and when it delivers the value it promised.
        </p>
        <p>The relationship runs in both directions. Laws, education, and public institutions shape norms over time, so politics also changes the culture it draws on.</p>
      </Prose>

      <SiteCard d={d} />
      <Pager href="/politics" />
    </Page>
  );
}
