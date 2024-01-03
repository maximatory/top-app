import Button from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";

export default function Home() {
  return (
    <>
      <Htag tag='h2'>Hello</Htag>
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Ghost</Button>
      <Button appearance="primary" arrow="right">Arrow</Button>
      <Button appearance="ghost" arrow="down">Arrow</Button>
    </>
  );
}
