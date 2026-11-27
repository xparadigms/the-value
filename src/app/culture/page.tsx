import type { Metadata } from "next";
import { Card, H2, Page, PageHeader, Pager, Prose, Steps, Toc } from "@/components/ui";
import { domain } from "@/data/site";

export const metadata: Metadata = { title: "Culture: Value Definition" };

const d = domain("culture");

export default function CulturePage() {
  return (
    <Page>
      <PageHeader dot={d.color} eyebrow={`${d.idx} · Culture`} title="Value Definition" lede="Value is what people want and need. Culture is the shared answer a society gives to that question." />
      <Toc
        items={[
          { id: "what-culture-does", label: "What Culture Does" },
          { id: "how-culture-changes", label: "How Culture Changes" },
          { id: "value-across-time", label: "Value Across Time" },
        ]}
      />

      <H2 id="what-culture-does" idx="01">
        What Culture Does
      </H2>
      <Prose>
        <p>
          <strong>Culture</strong> is the shared answer a society gives to the question of value, built from its beliefs, habits, history, and tastes.
        </p>
        <p>
          Value is subjective for each individual, and culture aggregates individual wants into common definitions. Those definitions explain why societies differ in how highly they rank home ownership, education, or free time.
        </p>
      </Prose>

      <H2 id="how-culture-changes" idx="02">
        How Culture Changes
      </H2>
      <Prose>
        <p>
          Culture changes slowly, yet it does change. Technology, generational turnover, and rising wealth shift what people want, and every shift redefines value for the three other domains.
        </p>
        <p>
          Politics turns the new definitions into priorities and rules, industry builds what they call for, and finance prices them. Delivered value then changes what people want next, so the loop starts again.
        </p>
      </Prose>

      <H2 id="value-across-time" idx="03">
        Value Across Time
      </H2>
      <Prose>
        <p>Value exists across three time frames. A culture defines what was worth saving, what is worth buying today, and what is worth working toward.</p>
      </Prose>
      <Card eyebrow="Value across time" caption="The same definition of value applies to what people keep, what they trade, and what they expect.">
        <Steps
          items={[
            { kick: "01 PAST", title: "Stored Value", text: "Savings, assets, and reputation built from earlier work." },
            { kick: "02 PRESENT", title: "Exchanged Value", text: "Goods, services, and support traded between people today." },
            { kick: "03 FUTURE", title: "Promised Value", text: "Expectations that people act on now, before delivery." },
          ]}
        />
      </Card>

      <Pager href="/culture" />
    </Page>
  );
}
