import { Collapse, Space } from "antd";
import image_10 from "assets/images/image_10.png";
import { theme } from "antd";

export default function AccordionUsage() {
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    background: token.colorFillAlter,
  };
  return (
    <Space className="w-full" direction="vertical">
      <Collapse
        accordion
        style={{ background: "#F5F4F9" }}
        items={[
          {
            key: "1",
            label: "Formulation & Development",
            children: (
              <div>
                <div className="flex justify-center items-center w-full mx-auto">
                  <img src={image_10} alt="" />
                </div>
                <div className="w-full mx-auto px-4 mt-4">
                  <p className="text-xs font-light">
                    Formulation Department develops the drug products through
                    formulation studies to maximize the effectiveness and safety
                    of API, such as improving the solubility and stability, and
                    controlling of drug release. The department is responsible
                    for establishing the quality of the drug products as a
                    continuum, from development through clinical manufacturing
                    to commercial manufacturing. The activities under this
                    include, but not limited to the following:
                  </p>
                  <ul className="w-full text-xs font-light list-disc mx-auto px-6">
                    <li>Formulations of pharmaceuticals</li>
                    <li> Formulation of herbal medicines</li>
                    <li> Formulation of nutraceuticals</li>
                  </ul>
                  <p className="text-xs font-light">The unit development</p>
                  <ul className="w-full text-xs font-light list-disc mx-auto px-8">
                    <li>Solid Oral dosage forms</li>
                    <li> Oral liquid dosage forms</li>
                    <li> Semi solid &</li>
                    <li> Injectable</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ]}
      />
      <Collapse
        style={{ background: "#F5F4F9" }}
        items={[
          {
            key: "2",
            label: " Research Laboratory",
            children: (
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            ),
          },
        ]}
      />
      <Collapse
        style={{ background: "#F5F4F9" }}
        items={[
          {
            key: "3",
            label: "Quality Control Tests",
            children: (
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            ),
          },
        ]}
      />
      <Collapse
        style={{ background: "#F5F4F9" }}
        items={[
          {
            key: "3",
            label: "Bioequivalence Center",
            children: (
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            ),
          },
        ]}
      />
      <Collapse
        style={{ background: "#F5F4F9" }}
        items={[
          {
            key: "3",
            label: "Calibration Center",
            children: (
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            ),
          },
        ]}
      />
      <Collapse
        style={{ background: "#F5F4F9" }}
        accordion
        items={[
          {
            key: "3",
            label: "Calibration Center",
            children: (
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            ),
          },
        ]}
      />
      <Collapse
        style={{ background: "#F5F4F9" }}
        items={[
          {
            key: "3",
            label: "Calibration Center",
            children: (
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            ),
          },
        ]}
      />
      <Collapse
        style={{ background: "#F5F4F9" }}
        items={[
          {
            key: "3",
            label: "Calibration Center",
            children: (
              <p className="text-xs font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            ),
          },
        ]}
      />
    </Space>
  );
}
