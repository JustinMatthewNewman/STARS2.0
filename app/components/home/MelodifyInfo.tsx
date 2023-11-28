import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function MelodifyInfo() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Our Mission</p>
          <p className="text-small text-default-500">stars2.vercel.app</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="py-2">
          Empowering athletic excellence through the relentless pursuit of
          real-time insights, our mission at STARS is to seamlessly
          weave the tapestry of team dynamics by harnessing the digital realm,
          sculpting wisdom from rosters, and unlocking the full
          potential of every player through data-driven enlightenment.
        </p>
      </CardBody>
    </Card>
  );
}
