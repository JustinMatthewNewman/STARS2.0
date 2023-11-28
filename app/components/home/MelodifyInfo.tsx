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
          real-time insights, our mission at STARS is to seamlessly weave the
          tapestry of team dynamics by harnessing the digital realm, sculpting
          wisdom from rosters, and unlocking the full potential of every player
          through data-driven enlightenment.
        </p>
        <p className="py-2">
          With a commitment to precision and a spirit fueled by innovation, we
          aspire to redefine the boundaries of sports analytics, providing
          coaches, players, and enthusiasts with a dynamic tool that transcends
          mere statistics. Our vision extends beyond the numbers, aiming to
          cultivate a culture where every data point becomes a brushstroke in
          the masterpiece of athletic strategy. At STARS, we believe
          in the transformative power of knowledge, and we pledge to be the
          catalyst that propels teams to new heights, shaping victories and
          fostering a legacy of unparalleled sporting achievement.
        </p>
      </CardBody>
    </Card>
  );
}
