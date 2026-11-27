import type { Metadata } from "next";
import { Flow } from "@/components/flow";
import { Card, H2, Page, PageHeader, Pager, Prose, SiteCard, Steps, Toc } from "@/components/ui";
import { NEW_VALUE } from "@/data/charts";
import { domain } from "@/data/site";

export const metadata: Metadata = { title: "Industry: Value Creation" };

const d = domain("industry");

export default function IndustryPage() {
  return (
    <Page>
      <PageHeader dot={d.color} eyebrow={`${d.idx} · Industry`} title="Value Creation" lede="Industry is where value is created. People and firms combine labor, capital, and knowledge to produce what the culture has defined as valuable." />
      <Toc
        items={[
          { id: "where-value-is-made", label: "Where Value Is Made" },
          { id: "productivity", label: "Productivity" },
          { id: "new-value", label: "How New Value Appears" },
        ]}
      />

      <H2 id="where-value-is-made" idx="01">
        Where Value Is Made
      </H2>
      <Prose>
        <p>
          <strong>Industry</strong> is where value is created. People and firms combine labor, capital, and knowledge to produce what the culture has defined as valuable.
        </p>
        <p>Value is made in two places: in the listed industries that make up today&rsquo;s economy, and in the startups building what will join them.</p>
      </Prose>
      <Card eyebrow="Two places value is made" caption="Established industries compound today's value; startups open the new types of value that come next.">
        <Steps
          items={[
            { kick: "01 INDUSTRY", title: "Listed Economy", text: "Sectors and industries that turn inputs into the goods and services people already want." },
            { kick: "02 STARTUPS", title: "What Comes Next", text: "New firms, funded by investors, building for wants that change is only starting to open." },
          ]}
        />
      </Card>

      <H2 id="productivity" idx="02">
        Productivity
      </H2>
      <Prose>
        <p>Productivity drives the growth of value. When people produce more with the same time and resources, the total value available to a society increases.</p>
      </Prose>

      <H2 id="new-value" idx="03">
        How New Value Appears
      </H2>
      <Prose>
        <p>New directions of change create new types of value. As more people create those new types, the market for value expands.</p>
      </Prose>
      <Flow chart={NEW_VALUE} />

      <SiteCard d={d} />
      <Pager href="/industry" />
    </Page>
  );
}
