import * as React from "react";

interface Props {
  console?: boolean;
  name?: string;
  [key: string]: any;
}

const RerenderTest: React.FC<Props> = (props: Props) => {
  const [color, setColor] = React.useState("");

  const randomColor = () => {
    // https://stackoverflow.com/a/5365036/6335029
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  };
  const getColorByBgColor = (bgColor: string) => {
    // https://stackoverflow.com/a/33890907/6335029
    return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2
      ? "#000"
      : "#fff";
  };

  React.useEffect(() => {
    if (props.console) {
      if (props.name) {
        console.count("Component " + props.name + " Re-Rendered  ");
      } else {
        console.count("Component  Re-Rendered  ");
      }
    }
    setColor(randomColor());
  }, [props]);
  return (
    <span
      style={{
        background: color,
        margin: "0 8px 0 0",
        padding: "0 7px",
        color: getColorByBgColor(color),
        border: "1px solid #d9d9d9",
        display: "inline-block",
        fontSize: 12,
        lineHeight: "20px",
        borderRadius: 4,
        textTransform: "uppercase"
      }}
    >
      {color}
    </span>
  );
};

export default RerenderTest;
