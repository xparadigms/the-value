import type { Metadata } from "next";
import { CompareTable } from "@/components/compare-table";
import { Flow } from "@/components/flow";
import { Card, H2, Page, PageHeader, Pager, Prose, Steps } from "@/components/ui";
import { FOUR_DOMAINS } from "@/data/charts";

export const metadata: Metadata = { title: "The Full System" };

export default function SystemPage() {
  return (
    <Page>
      <PageHeader eyebrow="06 · The Full System" title="The Full System" lede="The four domains answer four questions about value. Each one relies on a different form of trust and fails in a different way." />

      <Card eyebrow="Four domains compared" caption="Culture and politics form the first pair. Industry and finance form the second.">
        <CompareTable />
      </Card>

      <H2 id="health" idx="01">
        When the System Is Healthy
      </H2>
      <Prose>
        <p>
          The goal is to keep value flowing across the past, the present, and the future. The system is healthy when the value delivered matches the value expected, and it comes under strain when promises exceed what productivity can deliver.
        </p>
      </Prose>
      <Flow chart={FOUR_DOMAINS} />

      <H2 id="strain" idx="02">
        Where Strain Appears
      </H2>
      <Prose>
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

      <Pager href="/system" />
    </Page>
  );
}
