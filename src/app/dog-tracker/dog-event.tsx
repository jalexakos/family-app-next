import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DogEventComponentProps {
  time: number;
  name: string;
}

export const DogEvent: React.FC<DogEventComponentProps> = ({ time, name }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bea Event</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{name}</p>
        <p>{time}</p>
        <Button>Delete</Button>
      </CardContent>
    </Card>
  );
};
